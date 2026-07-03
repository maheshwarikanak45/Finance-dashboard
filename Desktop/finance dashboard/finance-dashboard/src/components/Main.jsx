import React from 'react'
import { useFinance } from '../context/FinanceContext'
import TransactionForm from './TransactionForm'

const Main = () => {

  const {state} = useFinance()
  console.log(state)

  return (
    <div className='p-6 flex justify-center'>
        Main
        <TransactionForm></TransactionForm>
    </div>
  )
}

export default Main