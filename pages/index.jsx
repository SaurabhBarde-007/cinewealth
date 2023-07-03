import MainPage from '@/components/FrontPage';
import { Main } from 'next/document';
import { Comfortaa } from 'next/font/google'
import React from "react";

const comfort = Comfortaa({ subsets: ['latin'] })


export default function Home() {
  return (
    <div className={`bg-transparent h-fit w-screen flex flex-col items-center justify-center ${comfort.className}`}>
      <MainPage />
    </div>
  )

}
