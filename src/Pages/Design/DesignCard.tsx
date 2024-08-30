import { Link } from 'react-router-dom'
import { CardTypes } from '@/Types/caseTypes'
import arrowRight from '@/assets/vuesax/linear/arrow-right.svg'

const DesignCard = ({
  thumbnail,
  name,
  onNextProject,
  onPreviousProject,
}: CardTypes) => {
  return (
    <div className="relative w-full h-screen px-6 md:px-16 flex flex-col items-center pt-[160px]">
      <div className="z-10 absolute left-0 top-0 w-full h-screen bg-black bg-opacity-20 backdrop-blur-xl"></div>
      <div className="">
        <img
          className="z-11 absolute left-0 top-0 w-full h-screen"
          src={thumbnail}
          alt="project-thumbnail"
        />
      </div>
      <Link to={`/work/design/${name}`}>
        <img
          className="z-40 relative mt-14 lg:mt-8 w-[320px] h-[265px] md:w-[350px] md:h-[285px] rounded-3xl"
          src={thumbnail}
          alt="project-thumbnail"
        />
      </Link>
      <div className="z-40 relative mt-6 px-7 py-2 md:px-10 md:py-6 flex flex-col items-center space-y-6 bg-black bg-opacity-25 backdrop-blur-sm rounded-3xl border border-[#2a2a2a31]">
        <Link to={`/work/design/${name}`}>
          <h1
            className={`text-white text-xl md:text-2xl w-[300px] md:w-[400px] h-[50px] text-center delay-300 `}
          >
            {name}
          </h1>
        </Link>
        <div className="flex space-x-4">
          <button
            onClick={onPreviousProject}
            className="bg-[#cfcaca6e] bg-opacity-10 backdrop-blur-3xl rounded-full p-2"
          >
            <img className="rotate-180" src={arrowRight} alt="" />
          </button>
          <button
            onClick={onNextProject}
            className="bg-[#cfcaca6e] bg-opacity-10 backdrop-blur-3xl rounded-full p-2"
          >
            <img src={arrowRight} alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}
export default DesignCard
