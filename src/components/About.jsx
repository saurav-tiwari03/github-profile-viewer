import React from 'react'
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";



export const About = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='border-2 border-black w-[500px] p-4 text-4xl flex justify-evenly items-center'>
        <p><a href="https://twitter.com/itZsauravT" target='_blank' rel='noreferrer'><FaGithubSquare/></a></p>
        <p><a href="https://linkedin.com/in/saurav-tiwari03/" target='_blank' rel='noreferrer'><FaLinkedin/></a></p>
        <p><a href="https://leetcode.com/sauravt_5625/" target='_blank' rel='noreferrer'><SiLeetcode/></a></p>
        <p><a href="https://twitter.com/itZsauravT" target='_blank' rel='noreferrer'><BsTwitterX/></a></p>
      </div>
    </div>
  )
}
