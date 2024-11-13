interface Props {
  image: string
}
const PreviewCard = ({ image }: Props) => {
  return (
    <div className="w-full h-fit flex gap-3 px-4">
      <img
        src={image}
        alt="project image"
        className="w-80 h-56 object-cover rounded-xl hover:scale-105 transition-all duration-300"
      />
    </div>
  )
}
export default PreviewCard
