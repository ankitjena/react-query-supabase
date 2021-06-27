import { useRouter } from "next/router"
import { useState } from "react"
import useLogin from "../../hooks/useLogin"
import useUser from "../../hooks/useUser"
import Loader from "../../components/ui/loader"

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {
    isFetching,
    data,
    error,
    isError,
    refetch
  } = useLogin({email, password})

  const {
    isSuccess,
    data: res
  } = useUser({
    userId: data?.user?.id
  })

  if(isSuccess) {
    router.push('/')
  }

  return (
    <div className="min-h-screen grid place-items-center text-xl">
      <div className="w-2/3 lg:w-1/3 shadow-lg flex flex-col items-center">
        <div className="mt-8 w-full lg:w-auto px-4">
          <p>Email</p>
          <input 
            type="text" 
            className="h-8 focus:outline-none shadow-sm border p-4 rounded mt-2 w-full lg:w-auto"
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="my-8 w-full lg:w-auto px-4">
          <p>Password</p>
          <input 
            className="h-8 focus:outline-none shadow-sm border p-4 rounded mt-2 w-full lg:w-auto"
            type="password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        {isError && <p className="text-sm mb-8 text-red-500">{error.message}</p>}
        <div className="mb-8 w-1/5">
          <button 
            className="bg-blue-500 text-white px-8 py-2 rounded w-full"
            onClick={() => refetch()}
          >
            {isFetching? 
              <span>
                <Loader 
                  height={30}
                  width={30}  
                />
              </span> :
            <span>Login</span>
            }
          </button>
        </div>
      </div>
    </div>
  )
}