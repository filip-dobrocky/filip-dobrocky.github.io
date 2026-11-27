---
title: "Mycelium"
description: "generative 3D prints, electronics, Wi-Fi mesh"
date: 2026-11-07T18:00:00+01:00
draft: false
thumbpos: top
---

*(generative 3D prints, electronics, Wi-Fi mesh)*  

The *Mycelium* is a single organism spread across scattered, co-dependent fungal bodies. Connected over a network imperceptible to us, they breathe as one. The *Mycelium* feeds on your data, sniffing the Wi-Fi signals your phone gives away without asking and digesting them into sound and light.

The work was created as part of the [TRYCHTÝŘ V](https://www.svitava.org) project, organized by SVITAVA – transmedia art lab in 2026.

{{< inlinepic "/images/content/mycelium/mycelium2.jpg" >}}

The mushrooms we see in a forest are only the fruiting bodies of a much larger organism. Its true body, the mycelium, is a web of thin threads hidden in the soil, sometimes spreading over kilometres. Through it, the fungus feeds by digesting its surroundings, and passes nutrients and chemical signals between distant parts of itself, and even between the roots of trees. What looks like a scattering of separate mushrooms is one living being.

The *Mycelium* is built the same way: its fruiting bodies are scattered through the space, and the threads connecting them are Wi-Fi signals.

Both networks share the same nature: they are everywhere, and they remain unseen. Beneath the forest floor and in the air around us, signals travel constantly between distant bodies. The *Mycelium* places the two side by side, and lets one feed on the other.

And like a fungus, it feeds on its surroundings, in this case on the data that leaks into the air. A phone with Wi-Fi turned on keeps calling out for networks it knows, even in a pocket, even when nobody is using it. These *probe requests* travel through the air unencrypted and every listening device can hear them. Each fungal body of the *Mycelium* listens.

The bodies share one state of mind and one level of energy. Left alone, the organism rests; every phone it hears feeds it. As energy accumulates, the remembered meals start to resound: each one becomes a rhythmic pattern (the phone's identifier gives a euclidean rhythm, the phone model gives a pitch, the signal strength gives loudness) and the patterns are passed from body to body.

When the organism is full, it *sonifies* everything it ate in a single rhythmically synchronised piece spread across the space. Then its memory is cleared and the organism returns to rest — not quite the same as before, carrying a trace of what it has eaten.

In nature, fungi are decomposers. They break down what others leave behind and return it to the cycle of life. Our digital traces are a similar residue, shed without thought and usually harvested by systems we never see. The *Mycelium* digests them differently: what it takes, it turns into a fleeting song, and then forgets.

Every sound and every flash is caused by a real packet: a phone in the room, or a message actually arriving over the mesh. The sound follows the data.

## Fruiting bodies

The shapes of the bodies are not modelled by hand — they are *bred*. A parametric model describes a fungal fruiting body as a set of genes (outline, cup or trumpet profile, wavy margin, rolled lip, pattern of ridges) derived from four species: the wood ear (*Auricularia auricula-judae*), the chanterelle (*Cantharellus*), the horn of plenty (*Craterellus cornucopioides*) and the morel (*Morchella*). Each individual is a random hybrid of these, with slight mutations, so no two bodies are alike.

{{< inlinepic "/images/content/mycelium/ears.jpg" >}}

The bodies are 3D printed from translucent material and act as speaker horns. The ridges are only on the outer skin, so the wall thickness varies — lit by a ring of LEDs from below, the pattern shows like a lithophane.

Somewhere between organism and machine, the *Mycelium* has no centre and no single voice. Whether it is listening to us, or simply living alongside us, is left open.

{{< inlinepic "/images/content/mycelium/sections.png" "/images/content/mycelium/freq_response.png" >}}

{{< inlinepic "/images/content/mycelium/horns.jpg" "/images/content/mycelium/assembly.jpg" >}}

## Technical realization

Each body is a battery-powered speaker and light built around a custom round PCB: an ESP32-S3 microcontroller, an I2S class-D amplifier driving a small full-range driver, a ring of 24 addressable LEDs and two 18650 Li-ion cells. The bodies form a Wi-Fi mesh network while simultaneously listening to the surrounding Wi-Fi traffic. There is no central computer — one of the bodies always takes the role of a conductor, and if it disappears, another one takes over. The mesh clock is synchronized, so the bodies can play in rhythm together.

The sound is synthesised in real time on each node from a Pure Data patch compiled to C++.

{{< inlinepic "/images/content/mycelium/pcb.jpg" "/images/content/mycelium/workbench.jpg" >}}

The software builds on my [Ecosystem](/works/ecosystem/) framework and the following open-source projects: [painlessMesh](https://gitlab.com/painlessMesh/painlessMesh), [HVCC](https://github.com/Wasted-Audio/hvcc), [Arduino Audio Tools](https://github.com/pschatzmann/arduino-audio-tools), [manifold](https://github.com/elalish/manifold).
