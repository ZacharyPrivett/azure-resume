import React from 'react'

const CurrentPojects = () => {
  return (
    <div className='pt-10'>
      <div>
        <h1 className='text-lg'>
          Developer Profile (this web app)
        </h1>
        <p className='text-sm font-light pt-2 pb-2'>
          Designed for the purpose of showing off my work and introducing myself
        </p>
        <p className='underline decoration-solid font-light text-sm'><a href="https://github.com/ZacharyPrivett/azure-resume">Developer Profile Repo</a></p>

        <div className='flex flex-wrap pt-3'>
          <p className='mt-2 font-light text-sm pr-2'>Created with:</p>  
          <img src="/c--4.svg" alt="" />
          <img src="/dot-net-core-7.svg" alt="" />
          <img src="/azure-2.svg" alt="" />
          <img src="/next.svg" alt="" />
          <img src="/tail.svg" alt="" />
          <img src="/ts.svg" alt="" />
          <img src="/git.svg" alt="" />
        </div>
      </div>
      <div className='text-lg pt-10'>
        <h1>
          Charlotte Book Exchange Web App
        </h1>
        <p className='text-sm font-light pt-2 pb-2'>
          My goal is to build a web application that gives local Charlotte residents the ability to commuicate and exchange books with other local residents, and to continue progessing my knowledge and skills with the .Net development cycle as well as using Azure resources.
        </p>
        <p className='text-sm font-light pb-2'>
          Checkout my progress:
        </p>
        <p className='underline decoration-solid font-light text-sm'><a href="https://github.com/ZacharyPrivett/book_exchange_web_app">Charlotte Book Exchange Repo</a></p>
      </div>
    </div>
  )
}

export default CurrentPojects