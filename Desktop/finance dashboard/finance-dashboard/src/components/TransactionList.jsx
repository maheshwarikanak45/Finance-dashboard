import React from 'react'
import { useFinance } from '../context/FinanceContext'

const TransactionList = () => {

    const {state, dispatch} = useFinance()

  return (
    <div className='flex flex-col bg-white border rounded-2xl p-6'>
        <h2 className='text-xl font-semibold mb-3'>Recent Transactions:</h2>
        {state.transactions.length === 0 
        ? <p>No transactions yet</p>
        : [...state.transactions].reverse().map((transaction) => (
            <div className='py-2  text-lg flex flex-row justify-between' key={transaction.id}>
                    <div>
                    <p className='font-medium'>{transaction.title}</p>  
                    <p className='text-sm text-gray-650'>{transaction.category}</p>
                    </div>
                    <div className='flex items-center gap-4'>
                <span className={transaction.type === 'income' ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
                    {transaction.type === 'income' ? '+' : '-'}₹{transaction.amount}
                </span>
                <button className=' text-red-400 text-sm cursor-pointer'
                onClick={() => dispatch ({type: "DELETE_TRANSACTION", payload: transaction.id})} >
                    Delete
                </button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default TransactionList