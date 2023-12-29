import React from 'react'

export const Card = () => {
  return (
    <div className=' bg-white cursor-pointer w-56 h-60 ' >
        <figure className=' relative mb-2 w-full h-4/5 ' >
            <span className=' absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 ' > Electronics </span>
            <img className=' w-full h-full object-cover rounded-lg ' src="https://media.istockphoto.com/id/1284067986/es/foto/auriculares-3d-rendering-yellow-aislados-sobre-fondo-azul.webp?s=1024x1024&w=is&k=20&c=0YOmLaU-Jll8hR4qu66ZTDo3IH5mTaj-eA-FWvcn1e0=" alt="headphones" />
            <div className=' absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6  rounded-full m-2 p-1'  >+</div>
        </figure>
        <p className=' flex justify-between ' >
            <span className=' text-sm font-light ' >Headphones</span>
            <span  className=' text-lg font-medium ' >$50</span>
        </p>
    </div>
  )
}
