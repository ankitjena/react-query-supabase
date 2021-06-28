import Loader from "./ui/loader"
import { useRouter } from 'next/router'
import useUser from "../hooks/useUser"

export default function ProtectedWrapper({children}) {
  const router = useRouter()
  const { isLoading, isError } = useUser()
  if(isLoading) {
    return (
      <div className="h-screen grid place-items-center">
        <Loader height={200} width={200}/>
      </div>
    )
  }

  if(isError) {
    router.push('/auth/login')
    return (
      <div className="h-screen grid place-items-center">
        <Loader height={200} width={200}/>
      </div>
    )
  }

  return (
    <div>
      {children}
    </div>
  )
}