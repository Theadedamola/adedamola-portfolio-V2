import { Outlet } from 'react-router-dom';
import './index.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';
import LoadLanding from './Pages/LoadLanding';
import { useEffect, useState } from 'react';

function App() {
  const [showLoadLanding, setShowLoadLanding] = useState(true); // State to control LoadLanding visibility

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoadLanding(false) 
    }, 6000)

    return () => clearTimeout(timer); 
  }, [])

  return (
    <>
      <div>
        <NavBar />
        <ScrollToTop />
        {showLoadLanding ? <LoadLanding /> : <Outlet />} {/* Render LoadLanding only once */}
        <Footer />
      </div>
    </>
  )
}

export default App;
