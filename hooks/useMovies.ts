import { useQuery } from 'react-query'

const searchMovies = async (query) => {
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&query=${query}&language=en-US&page=1`)

  if(!response.ok) {
    throw new Error('Error searching movies')
  }

  return response.json()
}

export default function useMovies({ query }) {
  return useQuery('movies', () => searchMovies(query), {
    enabled: false
  })
}