---
title: "Ecosystem"
description: "networked sound installation"
date: 2025-10-01T16:00:00+02:00
draft: false
---

The work titled *Ecosystem* is a networked sound installation inspired by nature. It comprises fictive life-forms communicating by exchanging messages in the form of musical patterns. 

While the cyber-animals express themselves through sound (or light), the essence of the conversation lies beyond what is humanly conceivable — messages are transmitted over a wireless mesh network. The accuracy of the transmission affects the behaviour of the communicating agents, therefore the physicality of the network (comprising dropped or delayed messages) shapes the overall soundscape. Each recipient of the message mutates the received pattern according to their "*DNA*", resulting in a decentralized genetic algorithm. The installation is designed to be *modular*, *scalable*, and *expandable* — new species can be integrated into the infrastructure at any time.

<figure style="margin: 0 auto; width: 75%; text-align: center;">
  <img src="/images/content/ecosystem/ecosystem.png" alt="A visualisation of a wireless mesh ecosystem" style="width: 100%;">
  <figcaption style="margin-top: 2em;">A visualisation of a wireless mesh ecosystem</figcaption>
</figure>

# PicidÆ

The first instance of the Ecosystem included one form of cyber-species named **PicidÆ** (refering to the biological family of woodpeckers). The rhythmical drumming of woodpeckers is mainly of social character — it serves as a way of advertising teritory and communication between potential partners. The cyber-woodpeckers take shape of compact sculptures fusing organic material and electronics. 

The installation came about during the collaborative project [TRYCHTÝŘ IV](svitava.org/udalost/open-call-trychtyr-iv-2025/) with the common theme of *"new wilderness"*, which resulted in various artistic interventions in the space of *Theatre on Orlí Street* (Brno, CZ) where [SONDA 2025](https://www.fullmoonzine.cz/festival-sonda-murcof-marco-donnarumma-a-dalsi) — festival of experimental music and sonic arts — took place. 12 cyber-woodpeckers were placed throughout the foyer of the theatre, rewilding the sonic environment of the space.

{{< vimeo 1136135916>}}

# Posteriformes

 The Cyber Ecosystem was later diversified by the addition of new species: **Posteriformes** (Passeriformes — biological order of songbirds, Posteri — those who come after). The physiology of these beings is adapted for making melodic sounds, which serve as their means of expression. They are also capable of visual evolutionary signaling by radiating colorful light.

The voices of these creatures come from physical modeling synthesis of the avian syrinx, shaped by a physical tube resonator. The birdsong-like patterns are encoded into a series of machine words, then transmitted and mutatated.

 The second instance of the installation *Ecosystem 2.0: PicidÆ + Posteriformes* filled the emergency staircase of the Music Faculty of Janacek Academy of Performing Arts, with 15 specimen (7 woodpeckers + 8 songbirds). The installation ran throughout the afternoon and the evolving soundscape transformed a space which is normally used by the students and employees of the faculty as a mere passageway.

<div style="display: flex; gap: 1em; justify-content: center; align-items: flex-start;">
  <div style="width: 60%;">
    {{< vimeo 1160225324>}}
  </div>
  <div style="width: 25%;">
    <div style="padding:177.78% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1160232428?badge=0&autopause=0&player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Vimeo video"></iframe></div>
  </div>
</div>


 ## Technical realization

The electronics used are rather budget-friendly. The "brain" of these devices is a cheap Wi-Fi enabled microcontroller ESP32-C3, carrying out the wireless communication and the sound-making (mechanical / digitally synthetised), eventually controlling addressable LEDs. PicidÆ use 12V solenoids of varying size (force), Posteriformes rely on 3W I2S amplifiers and small speakers (using PVC pipes as resonators). Each of the devices uses one 18650 Li-ion cell (salvaged from irreparable devices).

The code was enabled by the following open-source projects: [painlessMesh](https://gitlab.com/painlessMesh/painlessMesh), [TaskScheduler](https://github.com/arkhipenko/TaskScheduler), [HVCC](https://github.com/Wasted-Audio/hvcc), [Arduino Audio Tools](https://github.com/pschatzmann/arduino-audio-tools).


## Photos

{{< inlinepic "/images/content/ecosystem/picidae1.jpg" "/images/content/ecosystem/picidae3.jpg" "/images/content/ecosystem/picidae6.jpg" >}}
{{< inlinepic "/images/content/ecosystem/picidae4.jpg" "/images/content/ecosystem/picidae5.jpg" >}}
{{< inlinepic "/images/content/ecosystem/picidae2.jpg" >}}
<sub style="text-align: center">Photos: Karolina Raimund</sub>
