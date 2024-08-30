import { Outlet } from 'react-router-dom'
import './index.css'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App
