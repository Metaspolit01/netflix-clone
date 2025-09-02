import { NextResponse } from 'next/server';

const TMDB_API_KEY = process.env.TMDB_API_KEY as string;
if (!TMDB_API_KEY) {
  throw new Error('TMDB_API_KEY is not defined in environment variables');
}
const BASE_URL = 'https://api.themoviedb.org/3';

export async function GET(request: Request) {
  try {
    // Get the endpoint from query parameter
    const { searchParams } = new URL(request.url);
    const endpoint = searchParams.get('endpoint');

    if (!endpoint) {
      return NextResponse.json({ error: 'No endpoint provided' }, { status: 400 });
    }

    // Make the request to TMDB API
    const url = new URL(`${BASE_URL}${endpoint}`);
    url.searchParams.append('api_key', TMDB_API_KEY);
    
    const response = await fetch(url.toString(), {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    return NextResponse.json(data);

  } catch (error) {
    console.error('TMDB API Error:', error);
    return NextResponse.json({ error: 'Failed to fetch from TMDB' }, { status: 500 });
  }
}
