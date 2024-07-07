import React from 'react'

function Nav() {
  return (
    <nav className='w-90vw p-4 bg-black font-serif h-16 flex justify-around'>
        <div className='flex content-center'>
            <div className="w-11 h-14"><img src="https://flowbite.com/docs/images/logo.svg" alt="" /></div>
            <div className='font-extrabold text-2xl text-white'>GeekFoods</div>
        </div>
        <div className='text-white'>
            <a href="" className='mr-10 hover:text-blue-300'>Home</a>
            <a href="" className='mr-10 hover:text-blue-300'>Food</a>
            <a href="" className='mr-10 hover:text-blue-300'>Quota</a>
            <a href="" className='mr-10 hover:text-blue-300'>Returants</a>
            <a href="" className='mr-10 hover:text-blue-300'>Contacts</a>
        </div>
        <div><button className='bg-blue-600 text-white font-bold p-2 rounded-xl hover:bg-slate-400 transition : 2s'>Get Started</button></div>
    </nav>
  )
}

export default Nav
