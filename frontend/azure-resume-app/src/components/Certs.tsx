import React from 'react'

const Certs = () => {
  return (
    <div className='pt-6 grid-cols-2 grid-template-columns: repeat(2, minmax(0, 1fr))'>
      <div className='col-span-1'>
        <h1>Microsoft Certified: Azure Fundamentals</h1>
        <h2>Earned: July 2024</h2>
        <p className='underline decoration-solid'><a href="https://learn.microsoft.com/api/credentials/share/en-us/ZachPrivett-9212/9858BE47A00C82FF?sharingId=287902CED4A7E86C">View certification</a></p>
      </div>
      <div className='col-span-1'>
        <h1 className='pt-6'>AZ-204 in progress...</h1>
      </div>
    </div>
  )
}

export default Certs