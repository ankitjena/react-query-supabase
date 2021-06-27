import Navbar from "../components/layouts/navbar"
import Search from "../components/search"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto">
        <Search />
      </div>
    </div>
  )
}
