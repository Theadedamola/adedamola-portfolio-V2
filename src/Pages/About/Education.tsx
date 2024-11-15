import Button from '@/Components/Button'
import docImg from '@/assets/docImg.png'
import { Link } from 'react-router-dom'

const Education = () => {
  return (
    <div className="w-full flex items-center justify-center max-w-[1440px]">
      <div className="flex flex-col gap-10 p-6 bg-[#101010] bg-opacity-50 backdrop-blur-sm rounded-3xl border border-[#2a2a2a31]">
        <h1 className="text-2xl ">Education</h1>
        <p className="text-[#8a8a8a]">
          After graduating in Food Engineering from the University of Ilorin, I
          ventured into tech and acquired multiple certifications in design and
          engineering. I hold a Google UX design certification and completed a
          product design internship with Zuri, earning a certificate.
        </p>
        <div className="flex flex-col gap-4 p-6 w-fit text-sm text-[#8a8a8a] bg-[#101010] border-[0.5px] border-[#2b2b2b] rounded-2xl">
          <p>Download my resumé here</p>
          <img src={docImg} alt="" className="w-40" />
          <Link to="https://drive.google.com/file/d/1Fg20XKv6_n8dLE99HLVMx5Uk7X6uRzjd/view?usp=sharing">
            <Button variant="secondary" className="w-fit">
              Download Resumé
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Education
