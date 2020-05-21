---
layout: post
title:  "Starting out: The Subpar Subharmoniclon(e)"
date:   2020-05-21 00:00:00 +0000
categories: general, tech, hardware
---

## The Beginning

Recently the new [Moog Subharmonicon](https://www.moogmusic.com/products/subharmonicon) came out and I was struck by the worst bout of gear acquisition syndrome I've experienced for about 5 years. I immediately attempted to recreate it with my modular, with not great success. 


I'll admit now if it cost a bit less I'd probably have just gone out and bought one. But I didn't. My next step was to have a try in PureData (what if it was bad and then I wouldn't want it?). A friend helpfully pointed out that "your janky pd patch will probably be bad and not a reflection of the synth". - he was right. But it was still fun to play with and a good use of some PureData skills I hadn't used since university.

## The Current Idea

Building the synth in PureData did get me thinking about how relatively simple it was to make some elements of the Subharmonicon. Doing some quick maths in my heads I had more than enough oscillators in my synth, a mixer, filters and envelopes. The bits that were missing are:


- the voltage control to manage the sub-oscillators and controlling the division each one is operating on
- the sequencer including its clever timing maths

I was struck thinking - it wasn't too bad to make those bits in Pd. How hard could it be to make them on say and Arduino and control the nice sounding bits I already owned?
 

With that idea firmly seeded I ordered an Arduino and got to researching. How hard can it be? 
