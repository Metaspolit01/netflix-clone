'use client';

import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { fetchMovies, getImageUrl, type Movie } from '@/lib/tmdb';

interface MovieRowProps {
  title: string;
  endpoint: string;
}

const MovieRow = ({ title, endpoint }: MovieRowProps) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetchMovies(endpoint);
        setMovies(response.results);
      } catch (error) {
        console.error(`Error fetching movies for ${title}:`, error);
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, [endpoint, title]);

  const scroll = (direction: 'left' | 'right') => {
    const container = document.getElementById(`movie-row-${title.replace(/\s+/g, '-')}`);
    if (container) {
      const scrollAmount = container.clientWidth * 0.8;
      const newPosition = direction === 'left' 
        ? Math.max(0, scrollPosition - scrollAmount)
        : scrollPosition + scrollAmount;
      
      container.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      setScrollPosition(newPosition);
    }
  };

  if (loading) {
    return (
      <div className="px-4 lg:px-16 mb-8">
        <h2 className="text-white text-xl lg:text-2xl font-bold mb-4">{title}</h2>
        <div className="flex space-x-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="w-48 h-72 bg-gray-800 animate-pulse rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 lg:px-16 mb-8">
      <h2 className="text-white text-xl lg:text-2xl font-bold mb-4">{title}</h2>
      
      <div className="relative group">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-0 bottom-0 z-40 w-12 bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center hover:bg-black/70"
        >
          <FiChevronLeft className="text-2xl" />
        </button>

        {/* Movies Container */}
        <div
          id={`movie-row-${title.replace(/\s+/g, '-')}`}
          className="flex space-x-4 overflow-x-scroll scrollbar-hide py-2"
        >
          {movies.map((movie) => (
            <div key={movie.id} className="flex-none group/movie">
              <div className="w-48 movie-card cursor-pointer">
                <img
                  src={getImageUrl(movie.poster_path)}
                  alt={movie.title}
                  className="w-full h-72 object-cover rounded"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    if (img.dataset.fallbackApplied) return;
                    img.dataset.fallbackApplied = '1';
                    img.src = '/placeholder-movie.svg';
                  }}
                />
                
                {/* Movie Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 opacity-0 group-hover/movie:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-bold text-sm mb-1">{movie.title}</h3>
                  <div className="flex items-center space-x-2 text-xs text-gray-300">
                    <span>{new Date(movie.release_date).getFullYear()}</span>
                    <span>•</span>
                    <span className="text-green-400">
                      {Math.round(movie.vote_average * 10)}% Match
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-0 bottom-0 z-40 w-12 bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center hover:bg-black/70"
        >
          <FiChevronRight className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default MovieRow;
