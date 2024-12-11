import React from 'react';
import Link from 'next/link'; // 'link' should be lowercase
import Image from 'next/image';
import AI from '../../../public/AI.jpg';
import Metaverse from '../../../public/metaverse.jpg';
import CloudComputing from '../../../public/cloudcomputing.jpg';
import IOT from '../../../public/iot.jpg';
import Automation from '../../../public/automation.jpg';

const Advance = () => {
  return (
    <div className="xl:w-[1300px] lg:w-[90%] m-auto mt-20 mb-10">
      <h1 className="lg:text-4xl sm:text-4xl text-2xl sm:text-left text-center text-blue-800 font-extrabold mt-10">
        Advance Courses
      </h1>
      <div className="grid xl-lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 xl-lg:gap-10 gap-5 mt-10">

        {/* AI Section */}
        <Link href="/track/ai/4" className="hover:scale-105 duration-200 transition-all">
          <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
            <div>
              <Image alt="Artificial Intelligence" src={AI} className="object-cover w-full" height={300} />
            </div>
            <div className="px-4 flex justify-center items-center h-[70px]">
              Artificial Intelligence
            </div>
          </div>
        </Link>

        {/* Web 3 and Metaverse Section */}
        <Link href="/track/wmd/4" className="hover:scale-105 duration-200 transition-all">
          <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
            <div>
              <Image alt="Web 3 and Metaverse" src={Metaverse} className="object-cover w-full" height={300} />
            </div>
            <div className="px-4 flex justify-center items-center h-[70px]">
              Web 3 and Metaverse
            </div>
          </div>
        </Link>

        {/* Cloud-Native Computing Section */}
        <Link href="/track/cnc/4" className="hover:scale-105 duration-200 transition-all">
          <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
            <div>
              <Image alt="Cloud-Native Computing" src={CloudComputing} className="object-cover w-full" height={300} />
            </div>
            <div className="px-4 flex justify-center items-center h-[70px]">
              Cloud-Native Computing
            </div>
          </div>
        </Link>

        {/* Genomics Section */}
        <Link href="/track/genomics/4" className="hover:scale-105 duration-200 transition-all">
          <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
            <div>
              <Image alt="Genomics and Bioinformatics" src={IOT} className="object-cover w-full" height={300} />
            </div>
            <div className="px-4 flex justify-center items-center h-[70px]">
              Genomics and Bioinformatics
            </div>
          </div>
        </Link>

        {/* Network Programmability and Automation Section */}
        <Link href="/track/automation/4" className="hover:scale-105 duration-200 transition-all">
          <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
            <div>
              <Image alt="Network Programmability and Automation" src={Automation} className="object-cover w-full" height={300} />
            </div>
            <div className="px-4 flex justify-center items-center h-[70px]">
              Network Programmability and Automation
            </div>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default Advance;
