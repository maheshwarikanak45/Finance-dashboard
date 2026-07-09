import React from 'react'
import { useFinance } from '../context/FinanceContext'
import TransactionForm from './TransactionForm'
import SummaryCards from './SummaryCards'
import TransactionList from './TransactionList'
import ExpensePieChart from './ExpensePieChart'
import ComparisonChart from './ComparisonChart'

const Main = () => {

  const {state} = useFinance()
  console.log(state)

  return (
    <div className='p-6 flex flex-col gap-6 justify-center'>
        <TransactionForm />
        <SummaryCards />
        <div className='flex flex-row gap-18 py-8'>
        <ExpensePieChart />
        <ComparisonChart />
        </div>
        <TransactionList />
    </div>
  )
}

export default Main