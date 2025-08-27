import Hero from '@/components/Hero'
import MovieRow from '@/components/MovieRow'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen bg-netflix-black">
      <Navbar />
      <Hero />
      <div className="pb-20">
        <MovieRow title="Trending Now" endpoint="/trending/movie/week" />
        <MovieRow title="Popular Movies" endpoint="/movie/popular" />
        <MovieRow title="Top Rated" endpoint="/movie/top_rated" />
        <MovieRow title="Action Movies" endpoint="/discover/movie?with_genres=28" />
        <MovieRow title="Comedy Movies" endpoint="/discover/movie?with_genres=35" />
        <MovieRow title="Horror Movies" endpoint="/discover/movie?with_genres=27" />
        <MovieRow title="Romance Movies" endpoint="/discover/movie?with_genres=10749" />
        <MovieRow title="Documentaries" endpoint="/discover/movie?with_genres=99" />
      </div>
    </main>
  )
}
