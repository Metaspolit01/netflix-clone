'use client';

import { useState, useEffect } from 'react';
import { FiPlay, FiPlus, FiThumbsUp, FiChevronDown } from 'react-icons/fi';
import { getImageUrl, type Movie } from '@/lib/tmdb';

interface MovieCardProps {
  movie: Movie;
  onPlayClick?: (movie: Movie) => void;
  onMoreInfoClick?: (movie: Movie) => void;
}

const MovieCard = ({ movie, onPlayClick, onMoreInfoClick }: MovieCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handlePlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onPlayClick?.(movie);
  };

  const handleMoreInfoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onMoreInfoClick?.(movie);
  };

  const getReleaseYear = () => {
    return new Date(movie.release_date).getFullYear();
  };

  const getMatchPercentage = () => {
    return Math.round(movie.vote_average * 10);
  };

  return (
    <div 
      className="relative group cursor-pointer transition-transform duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Movie Poster */}
      <div className="relative overflow-hidden rounded-md">
        <img
          src={getImageUrl(movie.poster_path)}
          alt={movie.title}
          className="w-full h-auto object-cover"
          onError={(e) => {
            const img = e.target as HTMLImageElement;
            if (img.dataset.fallbackApplied) return;
            img.dataset.fallbackApplied = '1';
            img.src = '/placeholder-movie.svg';
          }}
        />
        
        {/* Hover Overlay */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-4 transition-opacity duration-300">
            <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">
              {movie.title}
            </h3>
            
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <button
                  onClick={handlePlayClick}
                  className="bg-white text-black rounded-full p-2 hover:bg-gray-200 transition"
                >
                  <FiPlay className="w-4 h-4" />
                </button>
                
                <button className="bg-gray-700 text-white rounded-full p-2 hover:bg-gray-600 transition">
                  <FiPlus className="w-4 h-4" />
                </button>
                
                <button className="bg-gray-700 text-white rounded-full p-2 hover:bg-gray-600 transition">
                  <FiThumbsUp className="w-4 h-4" />
                </button>
              </div>
              
              <button
                onClick={handleMoreInfoClick}
                className="bg-gray-700 text-white rounded-full p-2 hover:bg-gray-600 transition"
              >
                <FiChevronDown className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <span className="text-green-400 font-bold">
                {getMatchPercentage()}% Match
              </span>
              <span>{getReleaseYear()}</span>
              <span className="border border-gray-400 px-1 text-xs">HD</span>
            </div>
            
            <p className="text-gray-300 text-sm mt-2 line-clamp-3">
              {movie.overview}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
