---
title: "Posezení"
description: "generative ambient sound bench"
date: 2025-01-15T00:00:00+01:00
draft: false
---

**Posezení** [Sitting] is a sound bench — an intervention in public space in front of the Music Faculty of JAMU on Komenského náměstí, Brno. Sitting down on the bench activates generative ambient music that sounds from the wood itself. A prototype was installed and tested on site for 24 hours in January 2025.

The space in front of the faculty is a busy place, passed through by all kinds of people. Inspired by Brian Eno's definition of ambient music and generative music made for spaces of rest, the bench proposes the opposite of hostile architecture: an inviting place to stop, sit down and relax.

{{< inlinepic "/images/content/posezeni/above.jpg" >}}

## How it works

One plank of the bench was replaced with a new spruce one, hiding the electronics: a Raspberry Pi Zero 2W, four I²S amplifiers driving four exciters that turn the plank into a speaker, and two load cells sensing the weight of whoever sits down. The bench runs off a 20000 mAh battery charged by two 6 W solar panels.

{{< inlinepic "/images/content/posezeni/electronics.jpg" >}}

{{< inlinepic "/images/content/posezeni/wood1.jpg" "/images/content/posezeni/wood2.jpg" >}}

A Python program handles the weight sensing, fetches weather data and sends it all over OSC to SuperCollider, where synths and patterns generate the music — shaped by the weather and the time of day. During the test, every sitting was uploaded to a database and visualized on a web front end.

{{< inlinepic "/images/content/posezeni/night1.jpg" "/images/content/posezeni/night2.jpg" >}}
