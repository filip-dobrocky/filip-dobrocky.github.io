---
title: "Geofónie"
description: "collective installation"
date: 2024-11-01T17:26:52+01:00
draft: false
---

Geofónie is the result of the Trychtýř 2024 open call, the goal of which was to create a site-specific collective sound installation for Brno's former limestone quarry Hády, now a nature reserve and a popular recreation area on the city.

Artyčok TV's [report](https://artycok.tv/cs/post/sonda-festival-lom-hady):

<div style="position:relative;padding-top:66%;">
<iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://artycok.tv/cs/embed/03dd85be-ed5b-421d-90d3-89ef4f5b2cb5" frameborder="0" allowfullscreen=""></iframe>
</div>

The open call brought together artists of diverse backgrounds and resulted in a multi-layered spatial sound installation exploring the location's geology. The constellation of objects, forming an IoT network, generates a varying soundscape by the means of sonification (scanning the surface of various limestones), or live processing the sound of limestones dissolving in acid.

I was focusing mainly on the technical realization - software and hardware architecture and the implementation on the embedded platforms ESP32 (sensors, stepper motor, OSC communication via Wi-Fi) and Daisy Seed (audio programming using `gen~` / [Oopsy](https://github.com/electro-smith/oopsy)).

<small>
Installation credits:
<ul>
<li>Jiří Y. Suchánek – project coordination, mechatronics, kinetic objects, code, sound  
<li>Filip Dobrocký (SK) – code, electronics, Wi-Fi communication, sound  
<li>Michal Marenčík (SK) – dissolution of limestones, objects, code, sound  
<li>Lucie Vobr Jestřabíková (CZ) – ceramics, porcelain  
<li>Eliška Janečková (CZ) – 3D prints, objects, speculative design  
<li>Mgr. Tomáš Kumpan, Ph.D. – professional consultant, geology  
</ul>
</small>

<small>
The installation (or parts of it) has since been exhibited in varying forms at several occasions:  
<ul>
<li>SONDA festival, Hády quarry, Brno, CZ, 11/2024  
<li>Brno Art Week, co.labs, Brno, CZ, 3/2025  
<li>Re:Senster lab, 3SI Art festival, Krakow, PL, 4/2025  
<li>Světlo Valmez, Valašské Meziříčí, CZ, 9/2025  
<li>Esc Medien Kunst Labor, Graz, AT 9-11/2025  
<li>Dim Zvuku (House of Sound), Lviv, Ukraine, 12/2025  
</ul>
</small>

More about the project [here](https://www.jiri-suchanek.net/en/project/geofonie/).

{{< youtube HzzZqvGcuoU>}}

{{< inlinepic "/images/content/geofonie1.jpg" >}}
{{< inlinepic "/images/content/geofonie3.jpg" "/images/content/geofonie2.jpg" >}}
{{< inlinepic "/images/content/geofonie4.jpg" "/images/content/geofonie5.jpg" >}}
{{< inlinepic "/images/content/geofonie6.jpg" >}}
<sub style="text-align: center">Photos: Karolina Raimund</sub>
