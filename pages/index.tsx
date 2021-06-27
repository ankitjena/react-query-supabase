import Navbar from "../components/layouts/navbar"
import Recommendations from "../components/recommendations"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto">
        <Recommendations />
      </div>
    </div>
  )
}
