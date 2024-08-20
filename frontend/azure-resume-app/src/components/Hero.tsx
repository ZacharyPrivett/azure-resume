import React from 'react'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import Counter from './Counter'

const Hero = () => {
  return (
    <div className='pb-20 pt-28'>
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <TextGenerateEffect 
            className='text-center text-[40px] md:text-5xl lg:text-6xl'
            words='Hello! My Name is Zachary Privett'
          />
          <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
            Aspiring Cloud / .Net Developer
          </p>
          <Counter />
        </div>
      </div>
    </div>
  )
}

export default Hero