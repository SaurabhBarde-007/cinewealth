"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Button from './Button';
import LoginSignUp from './LoginSignUp';
import supabase from '@/config/supabaseClient';
import Logo from "./../public/Cine.svg"



const Navbar = () => {
    const [modelOpen, setModelOpen] = useState(false);
    useEffect(() => console.log(modelOpen), [modelOpen]);
    const [userLogged, setUserLogged] = useState(false);
    useEffect(() => {
        (async () => {
            const user = await supabase.auth.getUser();
            if (user) {
                setUserLogged(user?.data?.user);
            }
        })()
    }, [modelOpen])
    console.log(userLogged);

    const[active,setActive] = useState(false);


    return (
        <>
            <div className='fixed  top-0 left-0 w-full   text-[#aaa] font-semibold  z-[1200] kanit '>
                <div className='py-[2px] lg:py-0 px-6 flex justify-between  mt-5 rounded-xl items-center w-[95%] mx-auto bg-[#18181893]  backdrop-blur-md relative'>

                    <div className="w-[50px] md:w-[100px] ">
                        {/* <img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fecb1278b46458a7815b3e71c0488b5a6.cdn.bubble.io%2Ff1636184695667x802640047404033800%2Foie_lqQgz0LCLzXi.png?w=128&h=88&auto=compress&fit=crop&dpr=1.25" alt="error" /> */}
                        <Logo/>
                    </div>
                    <div className="hidden sm:flex gap-3 md:gap-10 text-md justify-center items-center">
                        <Link href={"#ff"} className='text-[#fff] text-xs md:text-lg'>Home</Link>
                        <Link href={"#about"} className='text-xs md:text-lg'>About</Link>
                        <Link href={"#offer"} className='text-xs md:text-lg'>Offerings</Link>
                        <Link href={"#faqs"} className='text-xs md:text-lg'>Cardano</Link>
                        <Link href={"#faqs"} className='text-xs md:text-lg'>FAQ&apos;s</Link>
                        {userLogged ? <Button href={"/asset"} className='text-xs md:text-lg px-2 py-2 md:px-3 md:py-3 bg-blue-300 text-[#1B1B1B] rounded-2xl text-center hover:scale-110 transition-transform ease-in-out cursor-pointer' text="Dashboard"/> : <Button text={"Login"} setModelOpen={setModelOpen} />}
                    </div>
                    <button className='flex flex-col sm:hidden ' onClick={()=>{
                        setActive(!active);
                    }}>
                        <span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </span>
                        {active && 
                        <div className='absolute flex flex-col justify-center content-center w-[95vw] rounded-lg h-[87vh] top-[60px] bg-black left-0 gap-6'>
                            <Link href={"#ff"} className='text-[#fff] text-[24px]'>Home</Link>
                            <Link href={"#about"} className='text-[24px]'>About</Link>
                            <Link href={"#offer"} className='text-[24px]'>Offerings</Link>
                            <Link href={"#faqs"} className='text-[24px]'>Cardano</Link>
                            <Link href={"#faqs"} className='text-[24px]'>FAQ&apos;s</Link>
                            {userLogged ? <Button href={"/asset"} className='text-[20px] px-2 py-2 md:px-3 md:py-3 bg-blue-300 text-[#1B1B1B] rounded-2xl text-center hover:scale-110 transition-transform ease-in-out cursor-pointer' text="Dashboard"/> : <Button text={"Login"} setModelOpen={setModelOpen} />}
                        </div>}

                    </button>
                </div>
            </div>
            {modelOpen && (
                <LoginSignUp setModelOpen={setModelOpen} />
            )}


                
        </>
    )
}

export default Navbar