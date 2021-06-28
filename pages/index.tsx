import Navbar from "../components/layouts/navbar"
import Recommendations from "../components/recommendations"
import ProtectedWrapper from "../components/Protected"

export default function Home() {
  return (
    <ProtectedWrapper>
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto">
          <Recommendations />
        </div>
      </div>
    </ProtectedWrapper>
  )
}
