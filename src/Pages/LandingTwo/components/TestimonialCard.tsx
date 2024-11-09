export interface CardProps {
  name: string
  position: string
  testimony: string
}

const TestimonialCard = ({ name, position, testimony }: CardProps) => {
  return (
    <div className="mx-6 h-96 bg-[#101010] flex flex-col justify-between w-full max-w-96 border-2 p-6 rounded-xl border-[#141414] hover:border-primary">
      <p>{testimony}</p>
      <div>
        <p>{name}</p>
        <p className="text-sm text-[#8a8a8a]">{position}</p>
      </div>
    </div>
  )
}
export default TestimonialCard
