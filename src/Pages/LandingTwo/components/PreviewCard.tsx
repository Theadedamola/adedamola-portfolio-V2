import { motion } from "framer-motion"

interface Props {
  image: string
  projectName: string
}
const PreviewCard = ({ image, projectName }: Props) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1 }}
      transition={{ duration: 0.4 }}
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
      }}
      className="relative w-full h-fit overflow-hidden rounded-2xl group"
    >
      <img
        src={image}
        alt="project image"
        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
        <h3 className="text-white text-2xl font-semibold">{projectName}</h3>
      </div>
    </motion.div>
  )
}
export default PreviewCard
