'use client';

import { useState, useEffect } from 'react';
import { FiPlay, FiInfo } from 'react-icons/fi';
import { fetchMovies, getBackdropUrl, type Movie } from '@/lib/tmdb';

const Hero = () => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRandomMovie = async () => {
      try {
        const response = await fetchMovies('/trending/movie/week');
        const randomMovie = response.results[Math.floor(Math.random() * response.results.length)];
        setMovie(randomMovie);
      } catch (error) {
        console.error('Error fetching hero movie:', error);
      } finally {
        setLoading(false);
      }
    };

    getRandomMovie();
  }, []);

  if (loading) {
    return (
      <div className="relative h-screen w-full animate-pulse">
        <div className="absolute inset-0 bg-gray-800"></div>
      </div>
    );
  }

  if (!movie) {
    return null;
  }

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={getBackdropUrl(movie.backdrop_path)}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center h-full px-4 lg:px-16 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          {movie.title}
        </h1>
        
        <p className="text-lg md:text-xl text-white mb-8 leading-relaxed">
          {truncateText(movie.overview, 150)}
        </p>

        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 bg-white text-black px-8 py-3 rounded font-bold text-lg hover:bg-gray-200 transition">
            <FiPlay className="text-xl" />
            <span>Play</span>
          </button>
          
          <button className="flex items-center space-x-2 bg-gray-600/50 text-white px-8 py-3 rounded font-bold text-lg hover:bg-gray-600/70 transition">
            <FiInfo className="text-xl" />
            <span>More Info</span>
          </button>
        </div>

        {/* Movie Info */}
        <div className="flex items-center space-x-4 mt-6 text-white">
          <span className="text-green-400 font-bold">
            {Math.round(movie.vote_average * 10)}% Match
          </span>
          <span>{new Date(movie.release_date).getFullYear()}</span>
          <span className="border border-gray-400 px-1 text-sm">HD</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
