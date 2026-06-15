# Kartik Rajput — Portfolio

Personal portfolio site for Kartik Rajput, backend engineer with a focus on AI systems, RAG pipelines, and distributed systems.

Built with Next.js 15, TypeScript, Tailwind CSS, and Shadcn UI.

**Live site:** [kartikrajput.dev](https://kartikrajput.dev) _(update when deployed)_

## Tech stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS + Shadcn UI
- MDX for project case studies
- Telegram contact form integration

## Local development

1. Clone the repository:

   ```bash
   git clone https://github.com/KartikXx/Portfolio.git
   cd Portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   # or: bun install
   ```

3. Create a `.env` file (see `.env.example` if present, or add):

   ```env
   TELEGRAM_BOT_TOKEN="your-token"
   TELEGRAM_CHAT_ID="your-chat-id"
   GEMINI_API_KEY="your-api-key"
   NEXT_PUBLIC_URL="http://localhost:3000"
   ```

4. Run the dev server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000)

## Customization

Site content lives in `src/config/` — hero, about, experience, projects, resume, navbar, and more. Profile image is set in `src/config/Profile.ts`.

## Credits

Based on the [sleek-portfolio](https://github.com/ramxcodes/sleek-portfolio) template by Ramkrishna Swarnkar (MIT License).
