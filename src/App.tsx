import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import './index.css'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import ScrollToTop from './Components/ScrollToTop'
import LoadLanding from './Pages/LoadLanding'
import { SelectedPathProvider } from './Components/PathContext'
import LocationListener from './Components/LocationListener'

function App() {
  const [showLoadLanding, setShowLoadLanding] = useState(true) // State to control LoadLanding visibility

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoadLanding(false)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <SelectedPathProvider>
        <LocationListener />
        <NavBar />
        <ScrollToTop />
        {showLoadLanding ? <LoadLanding /> : <Outlet />}
        <Footer />
      </SelectedPathProvider>
    </>
  )
}

export default App
