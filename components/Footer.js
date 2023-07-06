import React from 'react';
// import {BsInstagram, BsFacebook, BsLinkedin, BsTwitter} from "react-icons/bs"
import Button from './Button'
import Link from 'next/link';
import Logo from './../public/Cine.svg'
import { AiFillFacebook,AiFillInstagram,AiFillLinkedin,AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
    return (
        <div className='w-full bg-[#222] flex flex-col p-5'>
            <div className='w-full text-[#aaa] font-semibold py-3 px-5 flex justify-between items-center'>
                <div className="w-[50px] md:w-[95px]">
                    {/* <img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fecb1278b46458a7815b3e71c0488b5a6.cdn.bubble.io%2Ff1636184695667x802640047404033800%2Foie_lqQgz0LCLzXi.png?w=128&h=88&auto=compress&fit=crop&dpr=1.25" alt="error" /> */}
                    <Logo/>
                </div>
            </div>
            <div className='flex justify-start md:justify-between flex-wrap'>
                <div className="py-5 md:py-5 text-[#aaa]  flex flex-col gap-10">
                    <div className=' flex justify-start content-center gap-6 md-[20px]'>
                        <a href='#'><AiFillLinkedin className='w-[25px] h-[25px] '/></a>
                        <a href='#'><AiFillInstagram className='w-[25px] h-[25px] '/></a>
                        <a href='#'><AiFillFacebook className='w-[25px] h-[25px] '/></a>
                        <a href='#'><AiFillTwitterCircle className='w-[25px] h-[25px] '/></a>
                    </div>
                    &#169; CineWealth. All rights reserved. Built in India
                </div>
                <div className='text-[#aaa] flex gap-[80px] justify-start md:justify-center items-start md:items-start flex-wrap mt-2 '>
                    <div className='text-md font-extrabold flex flex-col gap-3 cursor-pointer'>
                        <div className='mb-5 '>FOR INVESTORS</div>
                        <Link href={"#ff"} className='text-white text-[14px] font-bold hover:underline'>Home</Link>
                        <Link href={"#offer"}  className='text-white text-[14px] font-bold hover:underline'>Offerings</Link>
                        <Link href={"#faqs"} className='text-white text-[14px] font-bold hover:underline'>Cardano</Link>
                        <Link href={"#faqs"} className='text-white text-[14px] font-bold hover:underline'>FAQs</Link>
                        {/* <div className='text-white font-bold hover:underline'>Blog</div>
                        <div className='text-white font-bold hover:underline'>Risk disclosure</div> */}
                    </div>
                    <div className='text-md font-extrabold flex flex-col gap-3 cursor-pointer'>
                        <div className='mb-5'>COMPANY</div>
                        <div className='text-white text-[14px] font-bold hover:underline'>About Us</div>
                        <div className='text-white text-[14px] font-bold hover:underline'>Contact us</div>
                    </div>
                    <div className='text-md font-extrabold flex flex-col gap-3 cursor-pointer'>
                        <div className='mb-5'>LEGAL</div>
                        <div className='text-white text-[14px] font-bold hover:underline'>Terms of use</div>
                        <div className='text-white text-[14px] font-bold hover:underline'>Privacy policy</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer