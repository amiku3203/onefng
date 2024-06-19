// components/Home.js

import Image from 'next/image';

const Home = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <Image 
          src="/background.jpg" 
          alt="One FNG Background" 
          layout="fill" 
          objectFit="cover" 
          quality={100} 
          className="z-[-1]" 
        />
      </div>
      <div className="relative z-10 flex flex-col items-end justify-center h-full text-center p-4">
        <h1 className="text-4xl font-bold  text-center flex justify-center  ">ONE FNG</h1>
        <p className="mt-4 text-sm text-yellow max-w-lg font-semibold">
          THERE'S ONLY ONE PLACE THAT CAN MATCH THE MOVEMENT, MAGIC AND MOMENTUM YOU BRING TO THE TABLE. ONLY ONE SPACE WHERE YOU AND THE SELECT FEW JUST LIKE YOU GATHER.
        </p>
      </div>
    </div>
  );
};

export default Home;
