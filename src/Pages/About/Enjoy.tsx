import AudioPlayer from './components/AudioPlayer'
import { shirtData } from './components/shirtData'
import Marquee from 'react-fast-marquee'

const Enjoy = () => {
  return (
    <div className="w-full flex items-center justify-center max-w-[1440px]">
      <div className="flex flex-col gap-10">
        <h1 className="text-3xl font-reyka">When I'm not building products</h1>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl ">Learning spanish</h1>
          <p className="text-[#8a8a8a]">
            I've embarked on an exciting journey to learn Spanish in my free
            time. From being a complete beginner to now being an intermediate
            level speaker, it's been an incredible ride. I've been self-learning
            with the help of apps like Duolingo and Language Transfer, which
            have been instrumental in my progress. My goal is to become fluent
            as soon as possible, and I'm confident that with consistent practice
            and dedication, I'll get there soon.
          </p>
          <div className="flex flex-col gap-4 mt-6 p-6 bg-[#101010] bg-opacity-50 backdrop-blur-sm rounded-3xl border border-[#2a2a2a31]">
            <AudioPlayer />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl ">I'm in love with sports</h1>
          <p className="text-[#8a8a8a]">
            I'm a football fanatic and I live and breathe the game. I create
            engaging football content on TikTok and I'm also a fashion designer
            specializing in football jerseys. My ultimate goal is to make a
            significant impact in the world of sports fashion and the game at
            large. I'm confident that with my passion and dedication, I'll
            achieve this goal soon.
          </p>
          <div className="flex flex-col gap-4 mt-6 p-6 bg-[#101010] bg-opacity-50 backdrop-blur-sm rounded-3xl border border-[#2a2a2a31]">
            <p>Check out my my page</p>
            <div className="flex gap-4">
              <div className="p-2 w-fit text-sm text-[#8a8a8a] bg-[#1e1e1e] border-[0.5px] border-[#2b2b2b] rounded-full">
                <p>TikTok</p>
              </div>
              <div className="p-2 w-fit text-sm text-[#8a8a8a] bg-[#1e1e1e] border-[0.5px] border-[#2b2b2b] rounded-full">
                <p>Instagram</p>
              </div>
            </div>
            <Marquee gradient={false} pauseOnHover speed={50} className="h-60">
              {shirtData.map((shirt) => (
                <img
                  key={shirt.id}
                  src={shirt.image}
                  alt={`Skill ${shirt.id}`}
                  className="h-56 mx-4 rounded-lg hover:scale-105 transition-all duration-300"
                />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Enjoy
