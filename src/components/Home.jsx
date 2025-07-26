import Header from "./Header"
import { useNavigate } from "react-router-dom"

function Home() {
  const navigate = useNavigate()
  return (
    <>
      <Header />
      <h1>My Basic Web App</h1>
      <div className="card">
        <button onClick={() => navigate('/about')}>
          Learn More
        </button>
        <p>
          Click to learn more about LYDMD
        </p>
      </div>
    </>
  )
}

export default Home