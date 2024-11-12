import Button from '@/Components/Button'
import { FrontendTypes } from '@/Types/frontendTypes'
import { motion } from 'framer-motion'
const FrontendDetails = ({
  thumbnail,
  name,
  subtext,
  website,
  github,
  process,
  solution,
}: FrontendTypes) => {
  return (
    <div>
      <div className="relative w-full h-screen px-6 md:px-16 flex flex-col pt-[130px]">
        <div className="z-10 absolute left-0 top-0 w-full h-screen bg-black bg-opacity-50 backdrop-blur-xl"></div>
        <div className="">
          <img
            className="z-11 absolute left-0 top-0 w-full h-screen"
            src={thumbnail}
            alt="project-thumbnail"
          />
        </div>
        <div className="z-40 my-24 sm:my-auto flex flex-col space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1,
              duration: 0.5,
              ease: 'easeInOut',
            }}
            className="text-white text-[42px] sm:text-7xl font-reyka"
          >
            {name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.5,
              duration: 0.5,
              ease: 'easeInOut',
            }}
            className="text-white sm:text-xl"
          >
            {subtext}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 2,
              duration: 0.5,
              ease: 'easeInOut',
            }}
            className="flex gap-4"
          >
            <Button onClick={() => window.open(website, '_blank')}>
              View Website
            </Button>
            {github && (
              <Button
                variant="secondary"
                onClick={() => window.open(github, '_blank')}
              >
                View Github
              </Button>
            )}
          </motion.div>
        </div>
      </div>
      <div className="p-6 md:p-16 flex flex-col gap-16">
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl sm:text-6xl font-reyka my-3">Process</h1>
          {process.map((item, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h1 className="uppercase font-medium text-xl">{item.heading}</h1>
              <p className="text-[#757474]" style={{ whiteSpace: 'pre-line' }}>
                {item.content}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl sm:text-6xl font-reyka my-3">Solution</h1>
          {solution.map((item, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h1 className="uppercase font-medium text-xl">{item.heading}</h1>
              <p className="text-[#757474]">{item.content}</p>
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
export default FrontendDetails
