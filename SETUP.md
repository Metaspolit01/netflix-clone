# Netflix Clone Setup Guide

## Option 1: Simple HTML Version (Recommended for Quick Start)

### Requirements
- Any modern web browser
- Internet connection

### Steps
1. Open the `index.html` file directly in your browser
2. The application will automatically load movies from TMDB API
3. Enjoy browsing movies!

### Features Available in HTML Version
- ✅ Hero section with featured movie
- ✅ Multiple movie categories (Trending, Popular, Top Rated, Action)
- ✅ Responsive Netflix-like design
- ✅ Smooth scrolling movie rows
- ✅ Dynamic navbar
- ✅ Real movie data from TMDB API

---

## Option 2: Next.js Development Version

### Requirements
- Node.js 18+ 
- npm or yarn

### Installation Steps

1. **Install Node.js**
   - Download from [nodejs.org](https://nodejs.org/)
   - Install the LTS version

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

---

## API Configuration

The project uses The Movie Database (TMDB) API with the following key:
```
TMDB_API_KEY=e87bb8225a9fe4a45bf6196f7c0abb07
```

This key is already configured in both versions of the application.

---

## Quick Start (HTML Version)

1. Simply double-click on `index.html`
2. Or right-click and select "Open with" → your preferred browser
3. The Netflix clone will load automatically!

---

## Troubleshooting

### HTML Version
- **Movies not loading**: Check your internet connection
- **Images not showing**: The TMDB API might be temporarily unavailable

### Next.js Version
- **npm not found**: Install Node.js from nodejs.org
- **Port 3000 in use**: Use `npm run dev -- -p 3001` to use a different port
- **Build errors**: Run `npm install` to ensure all dependencies are installed

---

## Features

### Current Features
- 🎬 Browse trending, popular, and top-rated movies
- 🎯 Genre-based movie categories
- 📱 Responsive design
- 🎨 Netflix-like UI with animations
- 🎥 Hero section with random featured movies

### Planned Features (Next.js version)
- 🔍 Search functionality
- 🎬 Movie details modal
- 📺 TV shows integration
- 👤 User profiles
- 📋 My List functionality

---

## File Structure

```
Netflix-Clone-main/
├── index.html              # Standalone HTML version
├── package.json            # Next.js dependencies
├── .env                    # API configuration
├── app/                    # Next.js app directory
├── components/             # React components
├── lib/                    # Utility functions
└── README.md              # This file
```
