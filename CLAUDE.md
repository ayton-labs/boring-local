# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 application created with `create-next-app` using TypeScript, Tailwind CSS v4, and modern development tools. The project uses the new App Router architecture and includes SEO optimization packages.

## Commands

### Development
- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### TypeScript
- TypeScript configuration uses strict mode with ES2017 target
- Path aliases: `@/*` maps to `./src/*`

## Architecture

### Project Structure
- `src/app/` - Next.js App Router directory
  - `layout.tsx` - Root layout with Geist fonts and global styles
  - `page.tsx` - Home page component
  - `globals.css` - Global styles with Tailwind CSS and CSS variables
- `public/` - Static assets (SVG icons)
- Configuration files at root level

### Styling System
- **Tailwind CSS v4** with PostCSS plugin
- CSS variables for theming: `--background`, `--foreground`
- Automatic dark mode support via `prefers-color-scheme`
- Geist fonts (sans and mono) loaded via `next/font/google`

### Key Dependencies
- **Next.js 15.4.6** with React 19
- **Tailwind CSS v4** (latest major version)
- **next-seo** and **next-sitemap** for SEO optimization
- **Sharp** for image optimization
- **TypeScript 5** with strict configuration
- **ESLint 9** with Next.js config extending core-web-vitals

### Development Setup
The project uses modern ESLint flat config format with compatibility layer for traditional extends syntax. PostCSS is configured specifically for Tailwind CSS v4.