import { ExperienceTypes } from './ExperienceData'

const ExperienceCard = ({
  duration,
  position,
  skill,
  summary,
}: ExperienceTypes) => {
  return (
    <div className="flex flex-col gap-4 mb-8">
      <div className="flex flex-col md:flex-row justify-between">
        <h1 className="text-xl">{position}</h1>
        <p className="text-[#8a8a8a]">{duration}</p>
      </div>
      <p className="text-[#8a8a8a]">{summary}</p>
      <div className="flex gap-2 flex-wrap">
        {skill.map((s, index) => (
          <div
            key={index}
            className="p-2 w-fit text-xs text-[#8a8a8a] bg-[#1e1e1e] border-[0.5px] border-[#2b2b2b] rounded-full"
          >
            {s}
          </div>
        ))}
      </div>
      <hr className='border-1 border-[#131313]'/>
    </div>
  )
}
export default ExperienceCard
