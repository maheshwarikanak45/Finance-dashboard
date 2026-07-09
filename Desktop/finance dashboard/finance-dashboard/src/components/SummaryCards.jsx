import React from 'react'
import { useFinance } from '../context/FinanceContext'

const SummaryCards = () => {

    const {state} = useFinance()

    const totalIncome = state.transactions
    .filter(t => t.type === 'income')
    .reduce((total, t) => total + t.amount, 0)

    const totalExpense = state.transactions
    .filter(t => t.type === 'expense')
    .reduce((total, t) => total + t.amount, 0)

    const totalBalace = totalIncome - totalExpense

  return (
    <div className='flex flex-row px-10 h-40 gap-10'>
        <div className='py-8 px-15 border text-lg rounded-2xl w-58'>
            <h3>Total balance</h3>
            <h1 className='font-semibold text-3xl text-green-800'>₹{totalBalace}</h1>
            <p className='text-sm'>+x% this month</p>
        </div>

        <div className='py-8 px-15 border text-lg rounded-2xl w-58'>
            <h3>Total income</h3>
            <h1 className='font-semibold text-3xl'>₹{totalIncome}</h1>
            <p className='text-sm'>Salary + freelance</p>
        </div>

        <div className='py-8 px-15 border text-lg rounded-2xl w-58'>
            <h3>Total expense</h3>
            <h1 className='font-semibold text-3xl text-red-800'>₹{totalExpense}</h1>
            <p className='text-sm'>7 categories</p>
        </div>

    </div>
  )
}

export default SummaryCards