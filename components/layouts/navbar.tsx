import supabase from "../../app/supabase"
import useUser from "../../hooks/useUser"
import Link from 'next/link'
import Loader from "../ui/loader";

export default function Navbar() {
  const user = supabase.auth.user()
  const { data, isLoading } = useUser({userId: user?.id})
  return (
    <div className="flex items-center justify-around py-6 bg-blue-500 text-white shadow">
      <Link href="/">
        <div className="text-2xl">
          Home
        </div>
      </Link>
      <div className="text-xl flex items-center space-x-4">
        <div>
          <Link href="/search">
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
      </div>
    </div>
  )
}