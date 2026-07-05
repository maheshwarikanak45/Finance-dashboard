import React from 'react'
import { useFinance } from '../context/FinanceContext'
import TransactionForm from './TransactionForm'
import SummaryCards from './SummaryCards'
import TransactionList from './TransactionList'
import ExpensePieChart from './ExpensePieChart'

const Main = () => {

  const {state} = useFinance()
  console.log(state)

  return (
    <div className='p-6 flex justify-center'>
        <TransactionForm></TransactionForm>
        <SummaryCards></SummaryCards>
        <TransactionList></TransactionList>
        <ExpensePieChart></ExpensePieChart>
    </div>
  )
}

export default Main