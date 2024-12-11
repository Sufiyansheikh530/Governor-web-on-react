import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import programmingFundamentals from '../../../public/programming_fundamentals.jpg';
import nextjsCourse from '../../../public/nextjs.jpg';
import EarnAsYouLearn from '../../../public/earn_as_you_learn.jpg';

const Compulsory = () => {
  return (
    <div className="xl:w-[1300px] lg:w-[90%] w-[95%] m-auto mt-10 mb-10">                          
      <h1 className="lg:text-4xl sm:text-4xl text-2xl sm:text-left text-center text-blue-900 font-extrabold mt-10">
        Core Courses Sequence
      </h1>

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-10 gap-5 mt-10">
        
        <Link href="/compulsory/1" className="hover:scale-105 duration-200 transition-all">
          <div className="overflow-hidden h-fit shadow-lg rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
            <div>
              <Image
                alt="Programming Fundamentals"
                src={programmingFundamentals}
                className="object-cover w-full"
                height={300}
              />
            </div>
            <div className="px-4 flex justify-center items-center h-[70px]">
              Programming Fundamentals
            </div>
          </div>
        </Link>

        
        <Link href="/compulsory/2" className="hover:scale-105 duration-200 transition-all">
          <div className="overflow-hidden h-fit shadow-lg rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
            <div>
              <Image
                alt="Web2 Using Next.js"
                src={nextjsCourse}
                className="object-cover w-full"
                height={300}
              />
            </div>
            <div className="px-4 flex justify-center items-center h-[70px]">
              Web2 Using Next.js
            </div>
          </div>
        </Link>

    
        <Link href="/compulsory/3" className="hover:scale-105 duration-200 transition-all">
          <div className="overflow-hidden h-fit shadow-lg rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
            <div>
              <Image
                alt="Earn as You Learn"
                src={EarnAsYouLearn}
                className="object-cover w-full"
                height={300}
              />
            </div>
            <div className="px-4 flex justify-center items-center h-[70px]">
              Earn as You Learn
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Compulsory;
