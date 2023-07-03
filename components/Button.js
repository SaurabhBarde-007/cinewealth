"use client"
import Link from "next/link";
import React from "react";

const Button = ({ href="", text, className = "", setModelOpen = "", disable = false, onClick = "" }) => {
    return (
        <Link href={href}>
            <button 
                className={`py-2 md:py-3 px-3 md:px-8 hover:scale-105 transition-transform ease-in-out bg-[#66CDFA] font-bold border-2 border-[#0d0d0d] text-black rounded-xl ${className} disabled:opacity-25 text-xs md:text-lg`}
                onClick={() => setModelOpen ? setModelOpen(true) : ""}
                disabled={disable}
            >
                {text}
            </button>
        </Link>
    );
};

export default Button;
