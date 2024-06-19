 "use client";
import Image from 'next/image';
import { useState } from 'react';
import EnquiryModal from './EnquiryModal.js';

const Brochure = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative font-mono flex   flex-col md:flex-row items-center h-screen pt-8 bg-teal-900 ">
      <div className="w-full bg-teal-900   md:w-1/2 pl-4   text-white">
        <h1 className="text-5xl font-bold">ARTISTIC INGENUITY</h1>
        <h2 className="mt-2 text-2xl">Meets Modern Spaces</h2>
        <p className="mt-4 text-lg leading-relaxed">
          With its iconic architecture, unwavering sustainability, and strategic placement, in the vibrant Sector 142 of Noida, spread across 15 acres, ONE FNG stands as an emblematic architectural marvel poised to reshape the cityscape and elevate Noida's essence to new heights.  Here, shopping, dining, and entertainment seamlessly come together to create a dynamic and inviting space.
        </p>
        <div className="mt-8">
          <h3 className="text-xl font-semibold">OFFICE SPACES</h3>
          <p className="mt-2">Tower A (SOUTH WING): G+37 Floors</p>
          <p>Tower B: G+15 Floors</p>
          <h3 className="mt-4 text-xl font-semibold">RETAIL SPACES</h3>
          <p className="mt-2">Hi-Street Retail: 5 Blocks Blocks F1-F5</p>
          <p>Tower Retail: G+Floor 1</p>
        </div>
        <div>
          <div className='mt-8 pb-4'>
            <button
              onClick={openModal}
              className="px-8 py-4  bg-orange-500 text-white rounded hover:bg-orange-300 hover:text-black"
            >
              DOWNLOAD BROCHURE
            </button>
          </div>
          <EnquiryModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
      </div>
      <div className="w-full md:w-1/2 h-full relative hidden md:block">
        <Image
          src="/brk.jpg"
          alt="One FNG Building"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="rounded-l-lg"
        />
      </div>
    </div>
  );
};

export default Brochure;
