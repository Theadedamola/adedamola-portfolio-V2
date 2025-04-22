import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import LoadingCounter from './LandingTwo/components/LoadingCounter'
import profileMe from '../assets/profile-me.png'
import gridLayers from '../assets/Grid-layers.svg'

const services = [
  'Ui Design',
  'Web Development',
  'Mobile Development',
  'Ux Design',
]

const LoadLanding = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [serviceIndex, setServiceIndex] = useState(0)

  // Cycle through services
  useEffect(() => {
    const interval = setInterval(() => {
      setServiceIndex((prevIndex) => (prevIndex + 1) % services.length)
    }, 1500)

    return () => clearInterval(interval)
  }, [])

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeInOut' },
    },
  }

  const serviceVariants = {
    enter: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  }

  return (
    <div className="relative w-full h-screen min-h-[844px] bg-[#101010] px-6 md:px-16 flex flex-col items-center justify-center overflow-hidden">
      <img
        src={gridLayers}
        className="absolute inset-0 w-full h-screen object-contain"
        alt="grid background"
      />
      <div className="z-40 flex flex-col items-center justify-center w-full max-w-6xl mx-auto gap-16">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="w-fit h-[280px] overflow-hidden ">
            <img
              src={profileMe}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
          <motion.h1
            ref={ref}
            className="text-3xl lg:text-3xl font-reyka text-white text-center"
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
        </div>
        <div className="flex gap-2 w-full items-center">
          <div className="relative w-full h-[72px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.h3
                key={serviceIndex}
                className="text-[#FF4D4D] font-reyka text-3xl md:text-5xl absolute left-0"
                variants={serviceVariants}
                initial="enter"
                animate="visible"
                exit="exit"
                transition={{
                  duration: 0.6,
                  ease: 'easeInOut',
                }}
              >
                {services[serviceIndex]}
              </motion.h3>
            </AnimatePresence>
          </div>
          <LoadingCounter />
        </div>
      </div>
    </div>
  )
}
export default LoadLanding
