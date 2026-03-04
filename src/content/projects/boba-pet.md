---
title: "Boba Pet: A Tamagotchi for Boba Lovers"
number: "02"
date: 2026-03-03
description: "A virtual pet that grows every time you drink boba. Built the entire MVP in one evening with Claude — from empty MacBook to live app on the internet."
tags: ["Vibe Coding", "Next.js", "Game"]
order: 2
---
![Boba Pet - Tapioca the duck](/images/boba-pet.png)

<a href="https://boba-pet.vercel.app/" target="_blank">Try Boba Pet →</a>

Let me tell you about two things I love: bubble tea and cute things. Ducks, bunnies, cats with little hats. If it's small and adorable, I'm interested. So when I was looking for my next vibe coding project, the idea came naturally. What if I built a digital pet that grows every time you drink boba?

That's how Boba Pet was born.

The concept is simple. You pick a pet: Ducky (sweet and bubbly), Mochi (sassy and cute), or Tapioca (chill and cozy). Your pet starts as a tiny baby with a boba cup balanced on its head. Every time you grab boba in real life, you open the app and check in. Your pet gains XP, grows through five stages from Egg to Legend, and unlocks new outfits along the way. Keep a daily streak going and you earn bonus XP. Miss a day and the streak resets. Your pet even has a happiness meter that slowly decays, so you have to check in regularly or give it a little pat to keep it happy.

There's a coin shop where you can buy your pet outfits like a bow tie, a crown, cool sunglasses, or a wizard hat. There's also an achievements system with badges like "First Sip" for your first check-in and "Boba Legend" for reaching the final growth stage. Think Tamagotchi meets loyalty card meets kawaii culture.

Here's the part that surprises people: I built the entire MVP in one evening.

I had Claude on my MacBook. That was it. I described my idea, and Claude generated the first working prototype as an interactive component right in the chat. Then it gave me a step-by-step guide to set up a real development environment. I opened Terminal for the first time, installed Homebrew, installed Node.js, and created a Next.js project with one command. Then I opened Claude Code, an AI coding assistant that runs in the terminal, and described what I wanted in plain English.

Claude Code read my project files, thought about it for a few minutes, and wrote 737 lines of production-ready code. It ran type checks and build verification automatically. I opened my browser, went to localhost:3000, and there it was: a fully working Boba Pet game with a cute duck wearing a boba hat.

When I wanted to push the code to GitHub, I told Claude Code to help me and it walked me through the entire process. When I wanted to deploy it so anyone could see it online, I connected my GitHub to Vercel and hit deploy. From an empty MacBook to a live app on the internet, in one evening. The whole experience felt like having a conversation with a senior developer who just happens to type impossibly fast.

The app is built with Next.js and React, styled with Tailwind CSS, and uses localStorage for persistence. The UI is a single-page app with a mobile-first dark kawaii aesthetic: deep purple gradients, glowing cards, and smooth CSS animations for the pet's idle bounce, level-up celebrations, and star burst effects. The pet sprites are currently emoji-based to keep things simple for the MVP.

So what's next? A lot. I have big plans for Boba Pet, from custom art and social features to AI-powered interactions that make every pet feel truly yours. This is just the MVP. The real fun is just getting started.

This project started as a fun experiment born from two of my favorite things. It turned into proof that you don't need years of coding experience to bring an idea to life. You need curiosity, a clear vision, and the willingness to just start.

Now if you'll excuse me, I need to go buy boba. My pet is hungry.
