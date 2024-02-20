import React from 'react'

function Square(props) {
  return (
    <div 
     onClick={props.onClick}
     className='w-[100px] h-[100px] flex justify-center items-center bg-[#1f3540] border-4 border-solid border-[#0f1b21] rounded-[12px]'>
        <h5 className='text-[#70ee9c] font-bold text-3xl'>{props.value}</h5>
    </div>
  )
}

export default Square