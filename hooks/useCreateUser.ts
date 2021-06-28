import { useMutation, useQueryClient } from "react-query"
import supabase from "../app/supabase"

interface User {
  name: string;
  email: string;
  username: string;
  password: string;
}

const createUser = async (user: User) => {
  const { data: userWithUsername } = await supabase
    .from('users')
    .select('*')
    .eq('username', user.username)
    .single()

  if(userWithUsername) {
    throw new Error('User with username exists')
  }

  const { data, error: signUpError } = await supabase.auth.signUp({
    email: user.email,
    password: user.password
  })

  if(signUpError) {
    throw signUpError
  }

  return data
}

export default function useCreateUser(user: User) {
  return useMutation(() => createUser(user), {
    onSuccess: async(data) => {
      const { data: insertData, error: insertError } = await supabase
        .from('users')
        .insert({
          name: user.name,
          username: user.username,
          id: data.user.id
        })

      if(insertError) {
        throw insertError
      }

      return insertData
    }
  })
}