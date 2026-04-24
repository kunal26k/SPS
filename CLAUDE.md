# Sharda Public School — Website Project

## Project Overview
Full website revamp for Sharda Public School, Almora (Uttarakhand).
- Live site: https://shardapublicschool.com
- Tech: Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion
- Hosting target: Vercel

## Folder Structure
```
sps-website/          ← Next.js app lives here
school-data.json      ← All structured content extracted from existing site
competitor-analysis.md ← Competitor research and design patterns
SPS New logo.png      ← Official school logo (source of brand colors)
CLAUDE.md             ← This file
```

## Brand Colors (extracted from logo)
- Navy:      #1A2E4A  → primary bg, headings, footer
- Green:     #2D6A3F  → secondary accents, icons
- Gold:      #E8A820  → CTAs, highlights, tagline dots
- White:     #FFFFFF  → dominant page background
- Light Gray:#F7F8FA  → alternating section backgrounds

## Typography
- Headings:  Playfair Display (serif — authority)
- Body:      Inter (sans-serif — clean)
- Accent:    Montserrat (bold — tagline, labels)

## School Key Facts
- Principal: Mrs. Vinita Shekhar
- President/Manager: Dr. H.D. Kandpal
- CBSE Affiliation No: 3530299
- Est: 2001 | 23+ years | 1300+ students | 50+ faculty | 1:20 ratio
- Tagline: "Learn • Excel • Perform"
- Motto: "Seva Parmo Dharma" (Service before Self)
- Classes: Nursery to Class XII
- Campuses: Junior (Khatyari, Khagmara Kote) + Senior (Near Circuit House, Dugalkhola)
- Phone: 7300502640
- Email: contact@shardapublicschool.com | admission@shardapublicschool.com

## Key Differentiators to Highlight
1. Robotics & AI Lab
2. Swimming Pool
3. IIT & international alumni
4. 23-year legacy
5. Two dedicated campuses
6. CBSE NCF 2024 + NEP 2020 aligned
7. 1:20 teacher-student ratio
8. 15 sports programs

## Dev Commands
```bash
cd sps-website
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve production build
```

## Content Gaps (to fill before go-live)
- Real Vision statement (About page still has placeholder)
- Class 11-12 streams (Science/Commerce/Arts — not confirmed)
- Full sports list (claims 15, only 11 listed)
- High-res campus photos (placeholder images used currently)
- Faculty list with names/qualifications
- CBSE topper names/scores for achievements page
- Trust registration renewal status (shows expired 2022)

## Design Principles
- Mobile-first — all layouts designed for 375px up
- Sticky navbar: transparent on top → navy solid on scroll
- WhatsApp float button (7300502640) on all pages
- Framer Motion scroll reveals on all major sections
- Real photos over stock — placeholder divs used until photos provided
- No Lorem ipsum anywhere
- Gold CTAs throughout
