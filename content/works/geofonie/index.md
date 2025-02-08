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
<li>Michal Marenčík (SK) – dissolution of limestones, objects, code, sound  
<li>Eliška Janečková (CZ) – 3D prints, objects, speculative design  
<li>Filip Dobrocký (SK) – code, electronics, Wi-Fi communication, sound  
<li>Lucie Vobr Jestřabíková (CZ) – ceramics, porcelain  
<li>Kristína Zubáková – assistance  
<li>Jakub Nečas - assistance  
<li>Mgr. Tomáš Kumpan, Ph.D. – professional consultant, geology  
<li>Jiří Y. Suchánek – project coordination, mechatronics, kinetic objects, code, sound  
</ul>
</small>

{{< inlinepic "/images/content/geofonie1.jpg" >}}
{{< inlinepic "/images/content/geofonie3.jpg" "/images/content/geofonie2.jpg" >}}
{{< inlinepic "/images/content/geofonie4.jpg" "/images/content/geofonie5.jpg" >}}
{{< inlinepic "/images/content/geofonie6.jpg" >}}
<sub style="text-align: center">Photos: Karolina Raimund</sub>
