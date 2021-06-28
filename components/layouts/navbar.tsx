import useUser from "../../hooks/useUser"
import Link from 'next/link'
import Loader from "../ui/loader";
import useLogOut from "../../hooks/useLogOut";
import { useRouter } from "next/router";

export default function Navbar() {
  const logoutMutation = useLogOut()
  const router = useRouter()
  const { data, isLoading } = useUser()

  if(logoutMutation.isSuccess) {
    router.push('/auth/login')
  }

  return (
    <div className="flex items-center justify-around py-6 bg-blue-500 text-white shadow">
      <Link href="/">
        <div className="text-2xl cursor-pointer">
          Home
        </div>
      </Link>
      <div className="text-xl flex items-center space-x-4">
        <div>
          <Link href="/search ">
            Search
          </Link>
        </div>
        <div>
          {isLoading ? 
            <span>
              <Loader 
                height={30}
                width={30}
              />
            </span>
          : data?.username}
        </div>
        <div
          className="cursor-pointer"
          onClick={() => logoutMutation.mutate()}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="feather feather-log-out"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
        </div>
      </div>
    </div>
  )
}