import { motion } from 'framer-motion'
import workWithImg from '@/assets/work-with-me.png'
import Button from '@/Components/Button'
import arrowRight from '@/assets/vuesax/linear/arrow-right.svg'
import { Link } from 'react-router-dom'

const Connect = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
      }}
    >
      <div className="w-full p-10 flex flex-col items-center justify-between lg:flex-row bg-[#101010] bg-opacity-50 backdrop-blur-sm rounded-3xl border border-[#2a2a2a31]">
        <div>
          <img src={workWithImg} alt="work with me" className="w-80" />
        </div>
        <div className="flex flex-col gap-4 items-center lg:items-start">
          <h1 className="text-center lg:text-start">
            Ready to kickstart your project
          </h1>
          <p className="text-[#8a8a8a] max-w-[32rem] text-center lg:text-start">
            Available to work on your ideas, imaginations and business, you
            bring the idea, I'll bring my wealth of experiences
          </p>
          <Link to="https://api.whatsapp.com/send/?phone=2347067276819&text&type=phone_number&app_absent=0">
            <Button className="w-fit flex gap-2">
              Reach out <img src={arrowRight} alt="arrow-icon" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
export default Connect
