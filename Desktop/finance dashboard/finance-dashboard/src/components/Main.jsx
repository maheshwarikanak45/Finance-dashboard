import React from 'react'
import { useFinance } from '../context/FinanceContext'
import TransactionForm from './TransactionForm'
import SummaryCards from './SummaryCards'
import TransactionList from './TransactionList'

const Main = () => {

  const {state} = useFinance()
  console.log(state)

  return (
    <div className='p-6 flex justify-center'>
        <TransactionForm></TransactionForm>
        <SummaryCards></SummaryCards>
        <TransactionList></TransactionList>
    </div>
  )
}

export default Main