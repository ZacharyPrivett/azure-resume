"use client"

import React, { useEffect, useState } from 'react'
import { VisitCount } from '@/data/types'

const Counter: React.FC = () => {
  const [count, setCount] = useState<VisitCount | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('https://getresumewebappvisitcount.azurewebsites.net/api/GetResumeCounter?')
      .then((res) => res.json())
      .then((count) => {
        setCount(count)
        setLoading(false);
      })
      .catch((err) => console.log('Fetch error:', err));

  }, []);

  console.log(count);

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )  
  }
  
  return (
    <div>
      <h1>
        This site have been viewed {count?.count} times
      </h1>
    </div>
  )
}

export default Counter