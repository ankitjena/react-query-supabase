import Navbar from "../components/layouts/navbar"
import Search from "../components/search"
import ProtectedWrapper from "../components/Protected"

export default function Home() {
  return (
    <ProtectedWrapper>
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto">
          <Search />
        </div>
      </div>
    </ProtectedWrapper>
  )
}
