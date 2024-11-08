import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import LoadingCounter from './LandingTwo/components/LoadingCounter'

const LoadLanding = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeInOut' },
    },
  }
  return (
    <div className="relative w-full h-screen bg-hero-bg bg-cover bg-no-repeat px-6 md:px-16 flex flex-col items-center py-[130px]">
      <div className="z-10 absolute left-0 top-0 w-full h-screen bg-black bg-opacity-20 backdrop-blur-xl"></div>
      <div className="z-40 mt-8 xs:mt-16 md:mt-32 lg:mt-16 flex flex-col items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center space-y-4">
          <motion.h1
            ref={ref}
            className="text-4xl lg:text-5xl font-reyka text-white text-center"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.5,
                },
              },
            }}
          >
            {/* Split the text into words */}
            {'Hello, I`m Adedamola'.split(' ').map((word, index) => (
              <motion.span key={index} variants={wordVariants}>
                {word}{' '}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            ref={ref}
            className="text-4xl lg:text-5xl font-reyka text-white"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 1,
                },
              },
            }}
          >
            {'Ux Engineer'.split(' ').map((word, index) => (
              <motion.span key={index} variants={wordVariants}>
                {word}{' '}
              </motion.span>
            ))}
          </motion.p>
          <motion.p
            ref={ref}
            className="text-white text-center sm:w-[420px] text-wrap"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={wordVariants}
          >
            "The purpose of design is to make things better, not just look
            better." - Vitaly Friedman
          </motion.p>
          <LoadingCounter />
        </div>
      </div>
    </div>
  )
}
export default LoadLanding
