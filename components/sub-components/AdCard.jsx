import Image from "next/image"

const AdCard = () => {
  return (
    <div className="flex flex-col w-[98%] h-[98%] bg-red-200 p-7 gap-5">
        {/* <Image src="./file.svg" width={100} height={100} alt="poster" className="absolute "/> */}
        <div className="lg:text-3xl font-bold">Heading</div>
        <div className="lg:text-2xl">Title</div>
        <div className="w-[100px] h-[30px] bg-white text-black rounded-sm flex items-center justify-center cursor-pointer">Order Now</div>
    </div>
  )
}

export default AdCard