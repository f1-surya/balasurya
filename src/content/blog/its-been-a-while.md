---
title: "Its been a while"
description: "A year of Java, Next.js, SvelteKit, and one cable TV ledger that refused to stay the same."
pubDate: "Sep 27 2026"
---

In my last [blog](https://balasurya.vercel.app/blog/update-may-2025), I said I'm going to use more Java.

And I did for the first few weeks.

You see at the time I decided to write an app to make the subscription tracking for my parent's cable TV business more bearable. You see the signal provider's website is bleak and slow. So I decided to build my own ledger like thing.

So I built the [app](https://github.com/f1-surya/collection-ledger-lite) (lets call it V1 for now) as a offline only mobile app using **React-Native**. It worked okay but I wanted multi device sync.

So came [V2](https://github.com/f1-surya/collection-ledger-api): a mobile app talking to a Spring Boot backend. This was also around the time I decided that I was going to be a Java developer from now on.

Writing the backend was a little annoying, I hadn't embraced AI for coding at the time so I was writing code by hand. And I found Java... annoying. I mean how much abstraction does a person need, seriously!!

But I pushed through and eventually got the backend working.

Right before the refactor of the mobile app, I remembered that I was jobless and had no money to host the backend in a dependable way.

So [V3](https://github.com/f1-surya/collection-ledger) happened.

I rewrote the whole thing in **NextJS** front to back, because of the generous free tier from Vercel. In general the DX was much better compared Java and the app was fast and reliable. I used it for like 5 months, saved me from hours of manual work every payment cycle.

At this point, I was still writing most of the code by hand and NextJS's lack of built-in boundary between server and client annoyed me.

So came V4.

I migrated the whole thing to **Sveltekit**, which gave much better separation for the environments and the ecosystem itself was a lot friendly. Paraglide in particular, felt much more intuitive than *next-intl*. Initially the dev environment was faster than Next but as I added more dependencies for the newer features like *LayerChart* for stats it slowed down the whole thing by a lot. So at the moment dev and build times are quite slower than it was on Next, which bummed me out. 

But the app itself is working just as good if not better. All that work for DX that I don't need a lot these days seems moot LOL.

I also added a few more feature based on my 5 months usage.

I also worked on a few other projects including [TNMDA](https://tnmda.org) and [Yavarum](https://yavarum.com), during which I've gotten really good at prototyping and iterating on ideas with AI. 

More importantly, I think the quality of what I build has improved too. I'm much more comfortable taking an idea, throwing together a prototype, figuring out what doesn't work, and iterating until it does.

Right now I'm working on a few projects I got through my brother, along with some hobby projects.

So that's what I've been upto.
