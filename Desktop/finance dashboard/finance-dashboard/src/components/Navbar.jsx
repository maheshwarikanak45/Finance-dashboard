import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between items-center border-b text-2xl px-6 py-4'>
        <h3>Finance dashboard</h3>
        <div className='flex flex-row gap-5'>
            <p>June 2026</p>
            <p className=' px-2 w-8 h-8 flex items-center justify-center rounded-full bg-[#bbdefb]'>K</p>
        </div>
    </div>
  )
}

export default Navbar