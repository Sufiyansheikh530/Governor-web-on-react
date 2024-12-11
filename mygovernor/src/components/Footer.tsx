import React from 'react'
import { FaFacebook , FaYoutube , FaTwitter , FaInstagram, FaTiktok   } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Link from 'next/link';
const Footer = () => {
  return (
    <div>
      <footer  className='bg-gray-100 py-8 px-10 text-gray-800 flex justify-around'>
<div className=' mt-9 mb-9container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
<div>
    <h3 className='text-xl font-bold mb-4'> Core Courses</h3>
    <ul className='space-y-2 text-lg'>
      <li>Programming Fundamentals</li>
      <li>Web2 Using NextJS</li>
      <li>Earn as You Learn</li>
    </ul>
</div>

<div>
<h3 className='text-xl font-bold mb-4'> Advanced Courses</h3>
    <ul className='space-y-2 text-lg'>
      <li>Web 3 and Metaverse</li>
      <li>Cloud-Native Computing</li>
      <li>Artificial Intelligence (AI) and Deep Learning</li>
      <li>Ambient Computing and IoT</li>
      <li>Network Programmability and Automation</li>
      </ul>
    </div>

<div>
<h3 className='text-xl font-bold mb-4'>Social Links</h3>
  <div className='flex space-x-4 mb-4'>
   <Link href="#"><FaFacebook /></Link>
   <Link  href="#"><FaYoutube /></Link>
   <Link  href="#"><FaTwitter /></Link>
   <Link  href="#"><FaInstagram /></Link>
   <Link  href="#"><FaTiktok /></Link>
  </div>

  <div>
    <a href="mailto:education@governorsindh.com" className='text-blue-800 underline flex items-center gap-2 '>
    <AiOutlineMail />


      education@governorsindh.com</a>
  </div>

</div>

    
</div>
      </footer>
    </div>
  )
}

export default Footer
