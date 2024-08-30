import { CaseStudyTypes } from '@/Types/caseTypes'

const DesignDetails = ({
  thumbnail,
  name,
  subtext,
  process,
  solution,
}: CaseStudyTypes) => {
  return (
    <div>
      <div className="relative w-full h-screen px-6 md:px-16 flex flex-col items-center pt-[130px]">
        <div className="z-10 absolute left-0 top-0 w-full h-screen bg-black bg-opacity-20 backdrop-blur-xl"></div>
        <div className="">
          <img
            className="z-11 absolute left-0 top-0 w-full h-screen"
            src={thumbnail}
            alt="project-thumbnail"
          />
        </div>
        <div className="z-40 my-24 sm:my-auto flex flex-col space-y-6">
          <h1 className="text-white text-[42px] sm:text-7xl font-reyka">
            {name}
          </h1>
          <p className="text-white sm:text-xl">{subtext}</p>
        </div>
      </div>
      <div className="p-6 md:p-16 flex flex-col gap-16">
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl sm:text-6xl font-reyka my-3">Process</h1>
          {process.map((item, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h1 className="uppercase font-bold">{item.heading}</h1>
              <p className="text-[#4F4F4F]">{item.content}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl sm:text-6xl font-reyka my-3">Solution</h1>
          {solution.map((item, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h1 className="uppercase font-bold">{item.heading}</h1>
              <p className="text-[#4F4F4F]">{item.content}</p>
              {item.image && (
                <img
                  className="w-full h-full object-contain"
                  src={item.image}
                  alt={item.heading}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default DesignDetails
