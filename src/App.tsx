import { Outlet } from 'react-router-dom'
import './index.css'
import NavBar from './Components/NavBar'

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Outlet />
      </div>
    </>
  )
}

export default App
