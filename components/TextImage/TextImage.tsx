import Image from 'next/image';

const TextImage = () => {
  return (
    <div className="flex flex-row h-screen">
      <div className="flex-1 flex justify-center items-center p-10">
        <h1 className="text-4xl font-bold text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h1>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Image alt="369"src="https://picsum.photos/800/600?random=6" width={1200} height={800} objectFit="cover" />
      </div>
    </div>
  )
};

export default TextImage;