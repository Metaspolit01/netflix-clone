# Netflix Clone - Setup Guide

## Prerequisites

### Required Software
1. **Node.js and npm**
   - Install Node.js 20.x or later from [nodejs.org](https://nodejs.org/)
   - Verify installation:
     ```bash
     node --version
     npm --version
     ```

2. **Docker**
   - Install Docker Desktop from [docker.com](https://www.docker.com/products/docker-desktop)
   - Verify installation:
     ```bash
     docker --version
     docker-compose --version
     ```

3. **Git**
   - Install from [git-scm.com](https://git-scm.com/)
   - Verify installation:
     ```bash
     git --version
     ```

### API Access
1. **TMDB API Key**
   - Create account at [themoviedb.org](https://www.themoviedb.org/)
   - Navigate to Settings → API
   - Generate API key
   - Copy the key for configuration

## Installation

### Local Development Setup

1. **Clone Repository**
   ```bash
   git clone https://github.com/Metaspolit01/devops-Netflix-clone.git
   cd devops-Netflix-clone
   ```

2. **Environment Configuration**
   ```bash
   # Copy example environment file
   cp .env.example .env

   # Edit .env and add your TMDB API key
   NEXT_PUBLIC_TMDB_API_KEY=your_api_key_here
   TMDB_API_KEY=your_api_key_here
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```

5. **Access Application**
   - Open browser to [http://localhost:3000](http://localhost:3000)

### Docker Setup

1. **Build and Run Containers**
   ```bash
   docker-compose up --build
   ```

2. **Access Dockerized App**
   - Open [http://localhost:3000](http://localhost:3000)

3. **Stop Containers**
   ```bash
   docker-compose down
   ```

## Production Deployment

### Standard Deployment

1. **Build Application**
   ```bash
   npm run build
   ```

2. **Start Production Server**
   ```bash
   npm start
   ```

### Docker Production Deployment

1. **Build Production Image**
   ```bash
   docker-compose -f docker-compose.yml up --build
   ```

2. **Environment Variables**
   - Ensure all required environment variables are set
   - Use `.env` file or container environment

## Project Structure

```
Netflix-Clone-main/
├── app/                 # Next.js app directory
├── components/         # React components
├── lib/               # Utility functions
├── public/           # Static assets
└── ... configuration files
```

## Common Issues & Solutions

### Development Issues

1. **Port Already in Use**
   ```bash
   # Find process using port 3000
   netstat -ano | findstr :3000
   # Kill process
   taskkill /PID <process_id> /F
   ```

2. **Node Modules Issues**
   ```bash
   # Clean install
   rm -rf node_modules
   rm package-lock.json
   npm install
   ```

### Docker Issues

1. **Container Access Issues**
   ```bash
   # Reset Docker environment
   docker-compose down
   docker system prune
   docker-compose up --build
   ```

2. **Build Issues**
   ```bash
   # Clean Docker cache
   docker builder prune
   ```

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Docker Documentation](https://docs.docker.com/)
- [TMDB API Docs](https://developers.themoviedb.org/3)

## Security Notes

1. **API Key Protection**
   - Never commit `.env` file
   - Use environment variables in production
   - Rotate API keys regularly

2. **Docker Security**
   - Keep base images updated
   - Use non-root user
   - Implement resource limits

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
TMDB_API_KEY= yourapi key
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
