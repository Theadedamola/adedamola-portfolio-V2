import meImg from '@/assets/me.jpeg'
import nameImg from '@/assets/name.png'
import meImg1 from '@/assets/me1.jpg'

const Me = () => {
  return (
    <div className="w-full flex items-center justify-center max-w-[1440px]">
      <div className="flex flex-col gap-14">
        <h1 className="text-4xl text-white font-reyka font-bold">
          Hello I'm{' '}
          <span>
            <img src={nameImg} alt="" />
          </span>
        </h1>
        <p className="text-[#8a8a8a] text-2xl">
          When I'm not sipping juice or binge-watching my favorite shows, I'm a
          UI/UX designer and frontend engineer extraordinaire! I live for
          crafting digital experiences that make people go "wow, this is
          awesome!" As a master of making things look cool and work smoothly,
          I've spent the last three years perfecting my skills in product design
          and frontend magic. I'm all about teamwork, good vibes, and getting
          projects done on time and within budget. Let's make something amazing
          together!
        </p>
        <div className="flex flex-col md:flex-row w-full h-full gap-4">
          <img src={meImg} alt="" className="rounded-xl w-96 h-96" />
          <img src={meImg1} alt="" className="rounded-xl w-96 h-96" />
        </div>
      </div>
    </div>
  )
}
export default Me
