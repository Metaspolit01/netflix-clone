const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
if (!API_KEY) {
  throw new Error('NEXT_PUBLIC_TMDB_API_KEY is not defined in environment variables');
}
const BASE_URL = 'https://api.themoviedb.org/3';

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
  adult: boolean;
  original_language: string;
  original_title: string;
  popularity: number;
  video: boolean;
  vote_count: number;
}

export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface MovieDetails extends Movie {
  genres: Genre[];
  runtime: number;
  budget: number;
  revenue: number;
  status: string;
  tagline: string;
  production_countries: { iso_3166_1: string; name: string }[];
  production_companies: { id: number; name: string; logo_path: string | null }[];
  spoken_languages: { english_name: string; iso_639_1: string; name: string }[];
}

export interface VideoResponse {
  id: number;
  results: Video[];
}

export interface Video {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  official: boolean;
  published_at: string;
  site: string;
  size: number;
  type: string;
}

export const fetchMovies = async (endpoint: string): Promise<MovieResponse> => {
  try {
    const response = await fetch(`/api/tmdb?endpoint=${encodeURIComponent(endpoint)}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export const fetchMovieDetails = async (movieId: number): Promise<MovieDetails> => {
  try {
    const response = await fetch(`/api/tmdb?endpoint=/movie/${movieId}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

export const fetchMovieVideos = async (movieId: number): Promise<VideoResponse> => {
  try {
    const response = await fetch(`/api/tmdb?endpoint=/movie/${movieId}/videos`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movie videos:', error);
    throw error;
  }
};

export const searchMovies = async (query: string): Promise<MovieResponse> => {
  try {
    const response = await fetch(`/api/tmdb?endpoint=/search/movie&query=${encodeURIComponent(query)}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
};

export const getImageUrl = (path: string, size: string = 'w500'): string => {
  return `https://image.tmdb.org/t/p/${size}${path}`;
};

export const getBackdropUrl = (path: string, size: string = 'original'): string => {
  return `https://image.tmdb.org/t/p/${size}${path}`;
};
