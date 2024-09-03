import { Outlet } from 'react-router-dom'
import './index.css'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import ScrollToTop from './Components/ScrollToTop'

function App() {
  return (
    <>
      <div>
        <NavBar />
        <ScrollToTop />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App
