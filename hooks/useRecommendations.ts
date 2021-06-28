import { useQuery } from 'react-query'
import supabase from '../app/supabase'

const fetchRecommendations = async (user_id) => {
  const { data, error } = await supabase
    .from('recommendations')
    .select(`
      movies (
        *
      )
    `)
    .eq('user_id', user_id)

  if(error) {
    throw new Error(error.message)
  }

  return data
}

export default function useRecommendations() {
  const user = supabase.auth.user()
  return useQuery('recommendations', () => fetchRecommendations(user?.id))
}