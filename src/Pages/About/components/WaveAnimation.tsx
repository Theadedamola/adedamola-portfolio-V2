const WaveAnimation = () => {
  return (
    <div className="flex justify-center items-center space-x-2">
      {Array.from({ length: 10 }, (_, index) => (
        <div
          key={index}
          className={`w-7 h-[150px] bg-red-400 rounded-md animate-wave`}
          style={{ animationDelay: `${index * 0.1}s` }}
        />
      ))}
    </div>
  )
}

export default WaveAnimation
