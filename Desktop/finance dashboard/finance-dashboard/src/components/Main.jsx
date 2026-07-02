import React from 'react'
import { useFinance } from '../context/FinanceContext'

const Main = () => {

  const {state} = useFinance()
  console.log(state)

  return (
    <div className='p-6 flex justify-center'>
        Main
    </div>
  )
}

export default Main