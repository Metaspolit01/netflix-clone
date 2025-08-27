# Netflix Clone

A fully functional Netflix clone built with Next.js 14, TypeScript, and Tailwind CSS, powered by The Movie Database (TMDB) API.

## Features

- 🎬 Browse trending, popular, and top-rated movies
- 🔍 Search functionality
- 🎯 Genre-based movie categories
- 📱 Responsive design for all devices
- 🎨 Netflix-like UI with smooth animations
- 🎥 Hero section with random featured movies
- ⚡ Fast loading with Next.js optimizations

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **API**: The Movie Database (TMDB)
- **Icons**: React Icons
- **HTTP Client**: Axios

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- TMDB API key

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd netflix-clone
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# Create .env.local file with your TMDB API key
TMDB_API_KEY=your_tmdb_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Hero.tsx          # Hero section component
│   ├── MovieRow.tsx      # Movie row component
│   └── Navbar.tsx        # Navigation component
├── lib/                  # Utility functions
│   └── tmdb.ts          # TMDB API functions
└── public/              # Static assets
```

## API Integration

This project uses The Movie Database (TMDB) API to fetch movie data. The following endpoints are utilized:

- `/trending/movie/week` - Trending movies
- `/movie/popular` - Popular movies
- `/movie/top_rated` - Top rated movies
- `/discover/movie` - Discover movies by genre
- `/search/movie` - Search movies

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is for educational purposes only.

## Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing the movie data API
- [Netflix](https://www.netflix.com/) for the design inspiration
