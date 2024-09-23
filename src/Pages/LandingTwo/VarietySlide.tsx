import { motion } from 'framer-motion'

const VarietySlide = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
      }}
    >
      <div className="w-full h-72 bg-black bg-opacity-50 backdrop-blur-sm rounded-3xl border border-[#2a2a2a31]"></div>
    </motion.div>
  )
}
export default VarietySlide
