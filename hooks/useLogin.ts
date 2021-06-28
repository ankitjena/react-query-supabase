import { useMutation } from 'react-query'
import supabase from '../app/supabase'

const login = async ({email, password}) => {
  const { data, error } = await supabase.auth.signIn({
    email, 
    password
  })

  if(error) {
    throw new Error(error.message)
  }

  return data
}

export default function useLogin({ email, password }) {
  return useMutation('login', () => login({email, password}))
}