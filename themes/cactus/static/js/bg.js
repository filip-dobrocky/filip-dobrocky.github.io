(function () {
  var CELL = 14, SCALE = 0.003, LEVELS = 8, SPEED = 0.0008, FRICTION = 0.94, ALPHA = 0.1,
      FEEDBACK = 0.85, ZOOM = 0.25, TAIL = 40;

  // Ken Perlin's improved noise (3D), z driven by scroll
  var p = new Uint8Array(512);
  for (var i = 0; i < 256; i++) p[i] = i;
  for (i = 255; i > 0; i--) { var j = Math.random() * (i + 1) | 0, t = p[i]; p[i] = p[j]; p[j] = t; }
  for (i = 0; i < 256; i++) p[i + 256] = p[i];
  function fade(t) { return t * t * t * (t * (t * 6 - 15) + 10); }
  function lerp(t, a, b) { return a + t * (b - a); }
  function grad(h, x, y, z) {
    h &= 15; var u = h < 8 ? x : y, v = h < 4 ? y : h === 12 || h === 14 ? x : z;
    return ((h & 1) ? -u : u) + ((h & 2) ? -v : v);
  }
  function noise(x, y, z) {
    var X = Math.floor(x) & 255, Y = Math.floor(y) & 255, Z = Math.floor(z) & 255;
    x -= Math.floor(x); y -= Math.floor(y); z -= Math.floor(z);
    var u = fade(x), v = fade(y), w = fade(z);
    var A = p[X] + Y, AA = p[A] + Z, AB = p[A + 1] + Z, B = p[X + 1] + Y, BA = p[B] + Z, BB = p[B + 1] + Z;
    return lerp(w, lerp(v, lerp(u, grad(p[AA], x, y, z), grad(p[BA], x - 1, y, z)),
                           lerp(u, grad(p[AB], x, y - 1, z), grad(p[BB], x - 1, y - 1, z))),
                   lerp(v, lerp(u, grad(p[AA + 1], x, y, z - 1), grad(p[BA + 1], x - 1, y, z - 1)),
                           lerp(u, grad(p[AB + 1], x, y - 1, z - 1), grad(p[BB + 1], x - 1, y - 1, z - 1))));
  }

  var c = document.createElement('canvas');
  c.setAttribute('aria-hidden', 'true');
  c.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;z-index:-1;pointer-events:none;opacity:' + ALPHA;
  document.body.prepend(c);
  var ctx = c.getContext('2d'), w, h, cols, rows, field, color;
  var z = 0, vel = 0, lastY = scrollY, running = false, tail = 0;

  function resize() {
    var dpr = window.devicePixelRatio || 1;
    w = innerWidth; h = innerHeight;
    c.width = w * dpr; c.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cols = Math.ceil(w / CELL) + 1; rows = Math.ceil(h / CELL) + 1;
    field = new Float32Array(cols * rows);
    color = getComputedStyle(document.body).color;
    draw();
  }

  // contour lines of noise * LEVELS at every integer (marching squares)
  function draw() {
    var x, y, k;
    for (y = 0; y < rows; y++) for (x = 0; x < cols; x++)
      field[y * cols + x] = LEVELS * noise(x * CELL * SCALE, y * CELL * SCALE, z);
    // feedback: previous frame, faded and zoomed by scroll velocity
    var dw = w * (1 + vel * ZOOM), dh = h * (1 + vel * ZOOM);
    ctx.globalCompositeOperation = 'copy';
    ctx.globalAlpha = FEEDBACK;
    ctx.drawImage(c, 0, 0, c.width, c.height, (w - dw) / 2, (h - dh) / 2, dw, dh);
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 1;
    ctx.strokeStyle = color;
    ctx.beginPath();
    var pts = [];
    for (y = 0; y < rows - 1; y++) for (x = 0; x < cols - 1; x++) {
      var a = field[y * cols + x], b = field[y * cols + x + 1],
          d = field[(y + 1) * cols + x], e = field[(y + 1) * cols + x + 1];
      var lo = Math.ceil(Math.min(a, b, d, e)), hi = Math.max(a, b, d, e);
      var px = x * CELL, py = y * CELL;
      for (var l = lo; l <= hi; l++) {
        pts.length = 0;
        if ((a < l) !== (b < l)) pts.push(px + CELL * (l - a) / (b - a), py);
        if ((b < l) !== (e < l)) pts.push(px + CELL, py + CELL * (l - b) / (e - b));
        if ((d < l) !== (e < l)) pts.push(px + CELL * (l - d) / (e - d), py + CELL);
        if ((a < l) !== (d < l)) pts.push(px, py + CELL * (l - a) / (d - a));
        for (k = 0; k + 3 < pts.length; k += 4) { ctx.moveTo(pts[k], pts[k + 1]); ctx.lineTo(pts[k + 2], pts[k + 3]); }
      }
    }
    ctx.stroke();
  }

  function tick() {
    z += vel;
    vel *= FRICTION;
    draw();
    tail = Math.abs(vel) > 1e-5 ? TAIL : tail - 1;
    running = tail > 0;
    if (running) requestAnimationFrame(tick);
  }

  addEventListener('scroll', function () {
    vel += (scrollY - lastY) * SPEED * (1 - FRICTION);
    lastY = scrollY;
    if (!running) { running = true; requestAnimationFrame(tick); }
  }, { passive: true });
  addEventListener('resize', resize);
  resize();
})();
