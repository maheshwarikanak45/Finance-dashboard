import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Analytics from './pages/Analytics';
import Goals from './pages/Goals';
import Settings from './pages/Settings';

const App = () => {
  return (
    <BrowserRouter>
    <div className='flex flex-col'>
      <Navbar />
      <div className='flex flex-row'>
        <Sidebar />
        <main className='flex-1'>
          <Routes >
            <Route path='/' element = {<Dashboard />} />
            <Route path='/transactions' element = {<Transactions />} />
            <Route path='/analytics' element = {<Analytics />} />
            <Route path='/goals' element = {<Goals />} />
            <Route path='/settings' element = {<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App