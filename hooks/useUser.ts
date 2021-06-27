import { useQuery } from 'react-query'
import supabase from '../app/supabase'

const getUser = async ({userId}) => {
  const { data, error } = await supabase
    .from('users')
    .select()
    .eq('id', userId)

  if(error) {
    throw new Error(error.message)
  }

  if(!data.length) {
    throw new Error("User not found")
  }

  return data[0]
}

export default function useUser({ userId }) {
  return useQuery('user', () => getUser({userId}), {
    enabled: !!userId,
    refetchOnMount: false,
    refetchOnWindowFocus: false
  })
}