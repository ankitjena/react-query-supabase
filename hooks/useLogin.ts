import { useQuery } from 'react-query'
import supabase from '../app/supabase'

const login = async ({email, password}) => {
  const { data, error } = await supabase.auth.signIn({
    email, 
    password
  })

  if(error) {
    console.log(error.message)
    throw new Error(error.message)
  }

  return data
}

export default function useLogin({ email, password }) {
  return useQuery('login', () => login({email, password}), {
    enabled: false,
    retry: 0
  })
}