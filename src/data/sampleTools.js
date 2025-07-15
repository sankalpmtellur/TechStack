import figmaLogo from '../assets/figma.png';
import supabaseLogo from '../assets/supabase.png';
import netlifyLogo from '../assets/netlify.png';
import notionLogo from '../assets/notion.png';
import postmanLogo from '../assets/postman.png';
import githubLogo from '../assets/github.png';
import canvaLogo from '../assets/canva.png';
import vercelLogo from '../assets/vercel.png';
import firebaseLogo from '../assets/firebase.png';
import renderLogo from '../assets/render.png';
import railwayLogo from '../assets/railway.png';
import herokuLogo from '../assets/heroku.png';
import replitLogo from '../assets/replit.png';
import stackblitzLogo from '../assets/stackblitz.png';
import codesandboxLogo from '../assets/codesandbox.png';
import obsidianLogo from '../assets/obsidian.png';
import excalidrawLogo from '../assets/excalidraw.png';
import framerLogo from '../assets/framer.png';
import chatgptLogo from '../assets/chatgpt.png';
import typeformLogo from '../assets/typeform.png';
import loomLogo from '../assets/loom.png';
import zapierLogo from '../assets/zapier.png';
import iftttLogo from '../assets/ifttt.png';
import docusaurusLogo from '../assets/docusaurus.png';
import astroLogo from '../assets/astro.png';
import tailwindLogo from '../assets/tailwind.png';
import bootstrapLogo from '../assets/bootstrap.png';
import eslintLogo from '../assets/eslint.png';
import prettierLogo from '../assets/prettier.png';
import sentryLogo from '../assets/sentry.png';
import cloudflareLogo from '../assets/cloudflare.png';
import trelloLogo from '../assets/trello.png';
import grokLogo from '../assets/grok.png';
import deepseekLogo from '../assets/deepseek.png';
import perplexityLogo from '../assets/perplexity.png';
import claudeLogo from '../assets/claude.png';
import copilotLogo from '../assets/copilot.png';
import llamaLogo from '../assets/llama.png';
import geminiLogo from '../assets/gemini.png';
import huggingfaceLogo from '../assets/huggingface.png';
import midjourneyLogo from '../assets/midjourney.png';
import runwayLogo from '../assets/runway.png';
import viteLogo from '../assets/vite.png';
import webpackLogo from '../assets/webpack.png';
import parcelLogo from '../assets/parcel.png';
import npmLogo from '../assets/npm.png';
import pnpmLogo from '../assets/pnpm.png';
import yarnLogo from '../assets/yarn.png';
import gitLogo from '../assets/git.png';
import vscodeLogo from '../assets/vscode.png';



const sampleTools = [
    {
        logo: figmaLogo,
        name: "Figma",
        description: "Design and prototype beautiful user interfaces collaboratively.",
        tags: ["Design", "Free", "Collaborative"],
        link: "https://figma.com",
    },
    {
        logo: supabaseLogo,
        name: "Supabase",
        description: "Open source Firebase alternative with realtime DB and auth.",
        tags: ["Backend", "Open Source", "Database"],
        link: "https://supabase.com",
    },
    {
        logo: netlifyLogo,
        name: "Netlify",
        description: "Deploy static websites and serverless functions with ease.",
        tags: ["Deployment", "Free", "CI/CD"],
        link: "https://netlify.com",
    },
    {
        logo: notionLogo,
        name: "Notion",
        description: "All-in-one workspace for notes, docs, wikis, and task management.",
        tags: ["Productivity", "Free", "Collaborative"],
        link: "https://notion.so",
    },
    {
        logo: postmanLogo,
        name: "Postman",
        description: "Test, document, and monitor APIs easily in one platform.",
        tags: ["API", "Testing", "Developer Tools"],
        link: "https://postman.com",
    },
    {
        logo: githubLogo,
        name: "GitHub",
        description: "Code hosting and version control with collaboration features.",
        tags: ["Deployment", "Version Control", "Open Source"],
        link: "https://github.com",
    },
    {
        logo: canvaLogo,
        name: "Canva",
        description: "Create stunning designs and graphics easily with drag-and-drop.",
        tags: ["Design", "Free", "Beginner Friendly"],
        link: "https://canva.com",
    },
    {
        logo: vercelLogo,
        name: "Vercel",
        description: "Front-end hosting for React, Next.js and static sites with zero config.",
        tags: ["Deployment", "Free", "Frontend"],
        link: "https://vercel.com",
    },
    {
        logo: firebaseLogo,
        name: "Firebase",
        description: "Backend-as-a-Service platform with real-time database, authentication, and hosting by Google.",
        tags: ["Backend", "BaaS", "Mobile"],
        link: "https://firebase.google.com",
    },
    {
        logo: renderLogo,
        name: "Render",
        description: "Cloud hosting platform to deploy web apps, static sites, cron jobs, and more.",
        tags: ["Deployment", "Cloud", "Serverless"],
        link: "https://render.com",
    },
    {
        logo: railwayLogo,
        name: "Railway",
        description: "Infrastructure platform for developers to provision databases and deploy apps with ease.",
        tags: ["Deployment", "Backend", "DevOps"],
        link: "https://railway.app",
    },
    {
        logo: herokuLogo,
        name: "Heroku",
        description: "Platform-as-a-Service (PaaS) that enables deployment and scaling of apps easily.",
        tags: ["Deployment", "PaaS", "Beginner Friendly"],
        link: "https://www.heroku.com",
    },
    {
        logo: replitLogo,
        name: "Replit",
        description: "Online IDE to code, collaborate, and deploy in any language from the browser.",
        tags: ["IDE", "Coding", "Collaborative"],
        link: "https://replit.com",
    },
    {
        logo: stackblitzLogo,
        name: "StackBlitz",
        description: "Browser-based IDE for web development with instant preview and live environments.",
        tags: ["IDE", "Frontend", "Web"],
        link: "https://stackblitz.com",
    },
    {
        logo: codesandboxLogo,
        name: "CodeSandbox",
        description: "Online code editor and prototyping tool for rapid frontend development.",
        tags: ["IDE", "Frontend", "Prototyping"],
        link: "https://codesandbox.io",
    },
    {
        logo: obsidianLogo,
        name: "Obsidian",
        description: "Markdown-based note-taking app that helps build a personal knowledge base.",
        tags: ["Notes", "Markdown", "Productivity"],
        link: "https://obsidian.md",
    },
    {
        logo: excalidrawLogo,
        name: "Excalidraw",
        description: "Virtual whiteboard for sketching hand-drawn like diagrams and UI flows.",
        tags: ["Design", "Drawing", "Collaborative"],
        link: "https://excalidraw.com",
    },
    {
        logo: framerLogo,
        name: "Framer",
        description: "Design tool for building interactive and production-ready React websites.",
        tags: ["Design", "Frontend", "Prototyping"],
        link: "https://framer.com",
    },
    {
        logo: chatgptLogo,
        name: "ChatGPT",
        description: "AI-powered assistant for answering questions, coding help, content generation, and more.",
        tags: ["AI", "Productivity", "Chatbot"],
        link: "https://chat.openai.com",
    },
    {
        logo: typeformLogo,
        name: "Typeform",
        description: "Create interactive and beautiful forms, surveys, and quizzes that feel human.",
        tags: ["Forms", "Surveys", "Productivity"],
        link: "https://typeform.com",
    },
    {
        logo: loomLogo,
        name: "Loom",
        description: "Screen recording tool to capture quick videos for tutorials, updates, or feedback.",
        tags: ["Video", "Communication", "Productivity"],
        link: "https://loom.com",
    },
    {
        logo: zapierLogo,
        name: "Zapier",
        description: "Automate workflows by connecting your favorite apps and services.",
        tags: ["Automation", "Productivity", "No Code"],
        link: "https://zapier.com",
    },
    {
        logo: iftttLogo,
        name: "IFTTT",
        description: "Connect apps and devices with automation recipes for personal use.",
        tags: ["Automation", "No Code", "IoT"],
        link: "https://ifttt.com",
    },
    {
        logo: docusaurusLogo,
        name: "Docusaurus",
        description: "Static site generator optimized for documentation, built by Facebook.",
        tags: ["Docs", "Open Source", "React"],
        link: "https://docusaurus.io",
    },
    {
        logo: astroLogo,
        name: "Astro",
        description: "Modern static site builder that delivers lightning-fast performance by shipping less JavaScript.",
        tags: ["Static Site", "Frontend", "Web"],
        link: "https://astro.build",
    },
    {
        logo: tailwindLogo,
        name: "Tailwind CSS",
        description: "Utility-first CSS framework for quickly building custom UIs.",
        tags: ["CSS", "Frontend", "Utility"],
        link: "https://tailwindcss.com",
    },
    {
        logo: bootstrapLogo,
        name: "Bootstrap",
        description: "Popular open-source CSS framework for responsive web design.",
        tags: ["CSS", "Framework", "Frontend"],
        link: "https://getbootstrap.com",
    },
    {
        logo: eslintLogo,
        name: "ESLint",
        description: "Tool for identifying and fixing problems in JavaScript code.",
        tags: ["Linting", "JavaScript", "Code Quality"],
        link: "https://eslint.org",
    },
    {
        logo: prettierLogo,
        name: "Prettier",
        description: "Opinionated code formatter to ensure consistent style across your codebase.",
        tags: ["Formatter", "Code Style", "JavaScript"],
        link: "https://prettier.io",
    },
    {
        logo: sentryLogo,
        name: "Sentry",
        description: "Error tracking tool that helps developers monitor and fix crashes in real time.",
        tags: ["Monitoring", "Error Tracking", "Performance"],
        link: "https://sentry.io",
    },
    {
        logo: cloudflareLogo,
        name: "Cloudflare",
        description: "Web performance and security company providing CDN, DNS, and DDoS protection.",
        tags: ["CDN", "Security", "DNS"],
        link: "https://cloudflare.com",
    },
    {
        logo: trelloLogo,
        name: "Trello",
        description: "Visual project management tool using boards, lists, and cards.",
        tags: ["Productivity", "Task Management", "Collaborative"],
        link: "https://trello.com",
    },
    {
        logo: grokLogo,
        name: "Grok",
        description: "AI chatbot developed by xAI (Elon Musk), integrated with X (Twitter) to give real-time insights and commentary.",
        tags: ["AI", "Chatbot", "xAI"],
        link: "https://x.ai/grok",
    },
    {
        logo: deepseekLogo,
        name: "DeepSeek",
        description: "Open-source language model for coding and general tasks, similar to GPT models but focused on reasoning and programming.",
        tags: ["AI", "Open Source", "Coding"],
        link: "https://github.com/deepseek-ai",
    },
    {
        logo: perplexityLogo,
        name: "Perplexity AI",
        description: "AI-powered search engine that provides instant answers with source links and citations.",
        tags: ["AI", "Search", "Productivity"],
        link: "https://www.perplexity.ai",
    },
    {
        logo: claudeLogo,
        name: "Claude",
        description: "Conversational AI developed by Anthropic, designed to be helpful, harmless, and honest.",
        tags: ["AI", "Chatbot", "Anthropic"],
        link: "https://claude.ai",
    },
    {
        logo: copilotLogo,
        name: "GitHub Copilot",
        description: "AI pair programmer powered by OpenAI, helping developers write code faster in VS Code and other IDEs.",
        tags: ["AI", "Coding", "Developer Tools"],
        link: "https://github.com/features/copilot",
    },
    {
        logo: llamaLogo,
        name: "LLaMA",
        description: "Meta’s open-source large language model, used for research and open AI applications.",
        tags: ["AI", "Open Source", "Meta"],
        link: "https://ai.meta.com/llama/",
    },
    {
        logo: geminiLogo,
        name: "Gemini",
        description: "Google's AI assistant (formerly Bard), capable of reasoning, coding, and generating content.",
        tags: ["AI", "Google", "Chatbot"],
        link: "https://gemini.google.com",
    },
    {
        logo: huggingfaceLogo,
        name: "Hugging Face",
        description: "Platform for hosting, training, and deploying machine learning models and datasets.",
        tags: ["AI", "Open Source", "ML"],
        link: "https://huggingface.co",
    },
    {
        logo: midjourneyLogo,
        name: "Midjourney",
        description: "AI-powered tool to generate stunning images from text prompts.",
        tags: ["AI", "Image Generation", "Creativity"],
        link: "https://www.midjourney.com",
    },
    {
        logo: runwayLogo,
        name: "Runway",
        description: "Creative AI suite that offers video, image, and audio generation tools for creators.",
        tags: ["AI", "Video", "Creativity"],
        link: "https://runwayml.com",
    },
    {
        logo: viteLogo,
        name: "Vite",
        description: "Next-generation frontend tooling that offers instant hot module replacement and lightning-fast builds.",
        tags: ["Development", "Build Tool", "Frontend"],
        link: "https://vitejs.dev",
    },
    {
        logo: webpackLogo,
        name: "Webpack",
        description: "Popular module bundler for JavaScript applications with support for loaders and plugins.",
        tags: ["Development", "Bundler", "JavaScript"],
        link: "https://webpack.js.org",
    },
    {
        logo: parcelLogo,
        name: "Parcel",
        description: "Zero-config web application bundler that supports hot reloading and fast performance.",
        tags: ["Development", "Frontend", "Bundler"],
        link: "https://parceljs.org",
    },
    {
        logo: npmLogo,
        name: "npm",
        description: "World’s largest software registry and package manager for JavaScript.",
        tags: ["Development", "Package Manager", "JavaScript"],
        link: "https://www.npmjs.com",
    },
    {
        logo: pnpmLogo,
        name: "pnpm",
        description: "Fast, disk space-efficient package manager with strict versioning and symlinks.",
        tags: ["Development", "Package Manager", "Frontend"],
        link: "https://pnpm.io",
    },
    {
        logo: yarnLogo,
        name: "Yarn",
        description: "Alternative JavaScript package manager focused on speed, stability, and security.",
        tags: ["Development", "Package Manager", "JavaScript"],
        link: "https://yarnpkg.com",
    },
    {
        logo: eslintLogo,
        name: "ESLint",
        description: "Tool for identifying and fixing problems in JavaScript code.",
        tags: ["Development", "Linting", "JavaScript"],
        link: "https://eslint.org",
    },
    {
        logo: prettierLogo,
        name: "Prettier",
        description: "Opinionated code formatter to ensure consistent style across your codebase.",
        tags: ["Development", "Formatter", "Code Style"],
        link: "https://prettier.io",
    },
    {
        logo: gitLogo,
        name: "Git",
        description: "Distributed version control system for tracking code changes and collaboration.",
        tags: ["Development", "Version Control", "Open Source"],
        link: "https://git-scm.com",
    },
    {
        logo: vscodeLogo,
        name: "VS Code",
        description: "Lightweight and powerful code editor with support for extensions and remote development.",
        tags: ["Development", "Editor", "Productivity"],
        link: "https://code.visualstudio.com",
    },
];

export default sampleTools;