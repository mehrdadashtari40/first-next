
'use client'
import Image from 'next/image'

import { useState } from "react";
import Navbar from './UI/navbar.tsx';

export default function Home() {
  const [numberValue, setNumberValue] = useState(0);
 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <Navbar />

  
      <h1>
        here my tests {numberValue}
        <div>
          <button onMouseOver={()=>setNumberValue(numberValue+1)}> click here to add number</button>
        </div>
      </h1>
    </main>
  )
}
