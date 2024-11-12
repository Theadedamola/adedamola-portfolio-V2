import { CaseStudyTypes } from '@/Types/caseTypes'
import { motion } from 'framer-motion'

const DesignDetails = ({
  thumbnail,
  name,
  subtext,
  process,
  solution,
}: CaseStudyTypes) => {
  return (
    <div>
      <div className="relative w-full h-screen bg-hero-bg px-6 md:px-16 flex flex-col items-center pt-[130px]">
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
            className="text-[#fff] sm:text-xl"
          >
            {subtext}
          </motion.p>
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
                <motion.img
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.2 }}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
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
