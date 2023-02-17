import React from 'react'
import Typewriter from "typewriter-effect";


const Type = () => {
  return (
    <div className='font-bold bg-[#839788] p-2 text-white'>
      <Typewriter
        options={{
          strings: ["Hi, I'm Klaudia! "],
          autoStart: true,
          loop: true,
          deleteSpeed: 50
        }}
      />
    </div>
  )
}

export default Type