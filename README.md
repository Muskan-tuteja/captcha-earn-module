# CAPTCHA Earn Module — VELoop Rewards

A premium, fintech-styled CAPTCHA verification experience built for VELoop Rewards, where users earn Gems by completing a quick visual verification challenge. This project transforms a typically boring CAPTCHA task into a smooth, interactive, and rewarding product feature.

This is a **frontend-only** module built as part of the VELoop Rewards internship task, with the primary focus on UI/UX quality, animation, and interaction design.

## Live Demo

[\[Add your deployed link here\]](https://captcha-earn-module.vercel.app/)







## Features

- Dynamically generated CAPTCHA challenges (letters + digits)
- 4 answer options per challenge — 1 correct, 2 visually similar, 1 completely different
- No submit button — selecting an option instantly triggers verification
- Smooth 0.5s selection/verification animation
- Dedicated "Checking" state with animated verification indicator
- Separate, polished Correct and Incorrect result pages
- Gem reward system: +1 Gem for correct answers, +0.5 Gems for incorrect answers
- Claim and No Thanks actions on every result
- Mock rewarded-ad placeholder state (UI only, no real ad integration)
- Previous CAPTCHA challenges are never repeated
- Fully responsive across mobile, tablet, and desktop

## Tech Stack

- **React** (Vite)
- **Tailwind CSS** — styling
- **Framer Motion** — animations and transitions
- **Lucide React** — icons

## Project Structure
src/
├── components/
│ ├── CaptchaPage.jsx # Main CAPTCHA screen
│ ├── CaptchaOptions.jsx # Selectable answer options with interaction states
│ ├── CheckingPage.jsx # Verification/checking state
│ ├── ResultPage.jsx # Correct/Incorrect result screen
│ └── MockAdState.jsx # Placeholder for future rewarded-ad flow
├── data/
│ └── captchaData.js # CAPTCHA + options generation logic
└── App.jsx # Core state machine controlling the full flow

## User Flow
CAPTCHA Page → Select Option → Verification Animation (0.5s)
→ Checking Page → Correct / Incorrect Result → Gem Reward
→ Claim (Mock Ad → New CAPTCHA) or No Thanks (New CAPTCHA)


## Getting Started

1. Clone the repository

2. Install dependencies

3. Run the development server

4. Open the local URL shown in the terminal (typically `http://localhost:5173`)

## Scope Notes

This module is frontend-only, as specified in the task requirements. The following are intentionally **not** implemented, as they are out of scope:

- Backend / database
- Real CAPTCHA security system
- Authentication
- Real reward or wallet API
- Real advertisement integration or ad SDK

## Author

Muskan — Frontend Development Intern, VELoop Rewards
