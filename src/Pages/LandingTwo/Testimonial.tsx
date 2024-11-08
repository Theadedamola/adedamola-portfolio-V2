import TestimonialCard from './components/TestimonialCard'
import { testimonialData } from './components/TestimonyData'
import { motion } from 'framer-motion'
import Marquee from 'react-fast-marquee'

const Testimonial = () => {
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
      <div className="w-full flex flex-col gap-8">
        <div>
          <h1 className="text-2xl">Testimonials</h1>
          <p className="text-[#8a8a8a]">
            Words from amazing people I've been privileged to work with
          </p>
        </div>
        <Marquee gradient={false} pauseOnHover speed={50} className="">
          {testimonialData.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </Marquee>
      </div>
    </motion.div>
  )
}
export default Testimonial
