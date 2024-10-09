---
title: "Lithic"
description: "interactive installation"
date: 2024-01-07T14:29:37+02:00
draft: false
---

My first multimedia project at Janacek Academy of Performing Arts and my first try at an installation.

The subject of the piece are stones, all collected at local former quarry Hády. I focused on the sonic and haptic qualities of stones, with a motivation grounded in phenomenology rather than geology. The stones attracted me with their visual purity and universality in meaning. A stone is usually associated with something rigid and stable - I question that with electro-mechanical excitation.

A constellation of stones create an interactive environment, an interface, through which the visitor is invited to shape a generative spatial sound composition via haptic interaction.

{{< vimeo 995435136>}}

Capacitive field sensing is used to detect one touching a stone. A touch causes a reaction by mechanical excitation of the stones (vibrational motors and solenoid magnets are used and also a an audio speaker) and an advancement in the composition. Moreover, piezo pickups are used to capture the sound of the stones.

{{< inlinepic "/images/content/lithic1.jpg" "/images/content/lithic2.jpg" >}}

During the project presentation, the composition lasted around 15 minutes, with around 15 visitors who actively participated. Hovewer, the interaction model was designed to function indefinitely in an installation (implementing a finite state machine). The technical execution was carried out using the Max environment communicating with the ESP32 embedded platform via Wi-Fi.

I crafted the project remaining loyal to the DIY ethos - it involved various technical challenges like drilling into stones. I like to think of the presented form as a prototype that can be refined in the future. 