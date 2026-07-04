import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import SummaryCards from './components/SummaryCards';

const App = () => {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <div className='flex flex-row'>
        <Sidebar />
        <Main  />
      </div>
    </div>
  )
}

export default App