import { useQuery } from 'react-query'
import supabase from '../app/supabase'

const getUser = async (userId) => {
  const { data, error } = await supabase
    .from('users')
    .select()
    .eq('id', userId)
    .single()

  if(error) {
    throw new Error(error.message)
  }

  if(!data) {
    throw new Error("User not found")
  }

  return data
}

export default function useUser() {
  const user = supabase.auth.user()
  return useQuery('user', () => getUser(user?.id))
}