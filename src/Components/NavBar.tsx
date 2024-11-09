import adedamolaslogo from '../assets/adedamolaslogo.svg'
import { Link } from 'react-router-dom'
import Button from './Button'
import useMediaQuery from './useMediaQuery'
import { useSelectedPath } from './PathContext'
import { MenuIcon } from './Menu'
import { useState } from 'react'

const NavBar = () => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 800px)')
  const { selectedPath } = useSelectedPath()
  const [isOpen, setIsOpen] = useState(false)
const toggleMenu = () => {
  setIsOpen((prev) => !prev)
}
  return (
    <div className="fixed w-full z-50">
      <div className="fixed z-50 w-[90%] md:w-[85%] lg:w-[90%] h-20 my-6 mx-6 md:mx-16 flex justify-between items-center py-4 sm:py-10 2xl:w-[95%]">
        <Link to="/">
          <div className="flex items-center space-x-4 p-4 bg-black bg-opacity-40 backdrop-blur-xl rounded-3xl">
            <img
              className="w-8 sm:w-10"
              src={adedamolaslogo}
              alt="adedamola's logo"
            />
            <p className="text-white font-reyka text-xl sm:text-2xl">
              adedamola
            </p>
          </div>
        </Link>
        <div className="p-4 bg-black bg-opacity-40 backdrop-blur-xl rounded-3xl">
          {isAboveMediumScreens && (
            <ul className="flex gap-6 items-center">
              <li
                className={`hover:text-primary transition-all duration-300 ${
                  selectedPath === '/' && 'text-primary font-semibold'
                }`}
              >
                <Link to="/">home.</Link>
              </li>
              <li
                className={`hover:text-primary transition-all duration-300 ${
                  selectedPath === '/about' && 'text-primary font-semibold'
                }`}
              >
                <Link to="/about">about me.</Link>
              </li>
              <li
                className={`hover:text-primary transition-all duration-300 ${
                  selectedPath === '/work' && 'text-primary font-semibold'
                }`}
              >
                <Link to="/work">work.</Link>
              </li>
              <Button>Contact me</Button>
            </ul>
          )}
          {!isAboveMediumScreens && (
            <div onClick={toggleMenu} className="">
              <MenuIcon />
            </div>
          )}
        </div>
      </div>
      {!isAboveMediumScreens && isOpen && (
        <ul className="absolute left-0 top-0 px-6 flex flex-col gap-6 items-center justify-center h-screen w-full bg-[#090909]">
          <li
            className={`hover:text-primary text-3xl transition-all duration-300 ${
              selectedPath === '/' && 'text-primary font-semibold'
            }`}
            onClick={() => setIsOpen(false)}
          >
            <Link to="/">home.</Link>
          </li>
          <li
            className={`hover:text-primary text-3xl transition-all duration-300 ${
              selectedPath === '/about' && 'text-primary font-semibold'
            }`}
            onClick={() => setIsOpen(false)}
          >
            <Link to="/about">about me.</Link>
          </li>
          <li
            className={`hover:text-primary text-3xl transition-all duration-300 ${
              selectedPath === '/work' && 'text-primary font-semibold'
            }`}
            onClick={() => setIsOpen(false)}
          >
            <Link to="/work">work.</Link>
          </li>
          <Button>Contact me</Button>
        </ul>
      )}
    </div>
  )
}
export default NavBar
