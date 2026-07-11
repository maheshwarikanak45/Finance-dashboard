import React from 'react'
import { useFinance } from '../context/FinanceContext'
import {Wallet, TrendingUp, TrendingDown} from 'lucide-react'

const SummaryCards = () => {

    const {state} = useFinance()

    const totalIncome = state.transactions
    .filter(t => t.type === 'income')
    .reduce((total, t) => total + t.amount, 0)

    const totalExpense = state.transactions
    .filter(t => t.type === 'expense')
    .reduce((total, t) => total + t.amount, 0)

    const totalBalance = totalIncome - totalExpense

  return (
    <div className='flex flex-row px-10 h-40 gap-10'>
    <div className='py-8 px-15 border border-gray-400 rounded-2xl w-65'>
        <h3 className="flex items-center gap-2 text-lg">
            <Wallet size={20} className="text-gray-500"/>
            <span>Total balance</span>
        </h3>

        <h1 className='font-semibold text-3xl'>
            ₹{totalBalance}
        </h1>

        <p className='text-sm text-gray-700'>
            Updated just now
        </p>
    </div>

        <div className='py-8 px-15 border border-gray-400 rounded-2xl w-65'>
            <h3 className="flex items-center gap-2 text-lg">
            <TrendingUp size={20} />
            <span>Total income</span>
            </h3>

            <h1 className='font-semibold text-3xl text-green-800'>
                ₹{totalIncome}
            </h1>

            <p className='text-sm text-gray-700'>
                Salary + freelance
            </p>
        </div>

        <div className='py-8 px-15 border border-gray-400 text-lg rounded-2xl w-65'>
            <h3 className="flex items-center gap-2 text-lg">
            <TrendingDown size={20} />
            <span>Total expense</span>
            </h3>

            <h1 className='font-semibold text-3xl text-red-800'>
                ₹{totalExpense}
            </h1>

            <p className='text-sm text-gray-700'>
                8 categories
            </p>
        </div>

    </div>
  )
}

export default SummaryCards