import React from 'react'

const Sidebar = () => {
  return (
    <div className='flex flex-col w-48 border-r h-screen py-6 gap-4 items-start px-4'>
        <button className='bg-[#bbdefb] w-22 rounded-xl'>Dashboard</button>
        <button>Transactions</button>
        <button>Analytics</button>
        <button>Goals</button>
        <button>Settings</button>
    </div>
  )
}

export default Sidebar