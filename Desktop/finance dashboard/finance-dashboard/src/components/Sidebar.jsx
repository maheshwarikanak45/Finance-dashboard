import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='flex flex-col w-70 border-r border-gray-400 min-h-screen py-6 gap-4 items-start px-4'>
        <NavLink to='/' className={({isActive}) => isActive ? 'bg-[#bbdefb] px-3 py-1 rounded-xl' : 'px-3 py-1'}>
         Dashboard
        </NavLink>
        <NavLink to='/transactions' className={({isActive}) => isActive ? 'bg-[#bbdefb] px-3 py-1 rounded-xl' : 'px-3 py-1'}>
          Transactions
        </NavLink>
        <NavLink to='/analytics' className={({isActive}) => isActive ? 'bg-[#bbdefb] px-3 py-1 rounded-xl' : 'px-3 py-1'}>
          Analytics
        </NavLink>
        <NavLink to='/goals' className={({isActive}) => isActive ? 'bg-[#bbdefb] px-3 py-1 rounded-xl' : 'px-3 py-1'}>
          Goals
        </NavLink>
        <NavLink to='/settings' className={({isActive}) => isActive ? 'bg-[#bbdefb] px-3 py-1 rounded-xl' : 'px-3 py-1'}>
          Settings
        </NavLink>
    </div>
  )
}

export default Sidebar