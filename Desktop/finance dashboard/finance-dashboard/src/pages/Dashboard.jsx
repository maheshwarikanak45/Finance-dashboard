import React from 'react'
import TransactionForm from '../components/TransactionForm'
import SummaryCards from '../components/SummaryCards'
import TransactionList from '../components/TransactionList'
import ExpensePieChart from '../components/ExpensePieChart'
import ComparisonChart from '../components/ComparisonChart'

const Dashboard = () => {
  return (
    <div className='p-6 flex flex-col gap-6'>
        <TransactionForm />
        <SummaryCards />
        <div className='flex flex-row gap-6'>
            <ExpensePieChart />
            <ComparisonChart />
        </div>
        <TransactionList />
    </div>
  )
}

export default Dashboard