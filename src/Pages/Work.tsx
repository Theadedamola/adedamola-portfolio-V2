import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

const Work = () => {
  const [selected, setSelected] = useState<string>('design')

  const handleSelected = (selected: string) => {
    setSelected(selected)
  }
  return (
    <div className="relative">
      <div className="z-40 absolute flex justify-between w-full pt-[130px] px-6 md:px-16">
        <Link onClick={() => handleSelected('design')} to="/work">
          <h1
            className={`text-4xl lg:text-5xl font-reyka text-white ${
              selected === 'design' ? 'border-b-2 border-b-white' : ''
            }`}
          >
            Design.
          </h1>
        </Link>
        <Link onClick={() => handleSelected('frontend')} to="/work/frontend">
          <h1
            className={`text-4xl lg:text-5xl font-reyka text-white ${
              selected === 'frontend' ? 'border-b-2 border-b-white' : ''
            }`}
          >
            Frontend.
          </h1>
        </Link>
      </div>
      <Outlet />
    </div>
  )
}
export default Work
