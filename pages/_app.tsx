import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { useEffect } from 'react'
import supabase from '../app/supabase'
import { useRouter } from 'next/router'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0
    }
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  
  useEffect(() => {
    const user = supabase.auth.user()
    if(!user) {
      router.push('/auth/login')
    }
  }, [])
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
export default MyApp
