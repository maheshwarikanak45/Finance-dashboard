import React from 'react'
import { useFinance } from '../context/FinanceContext'
import { useState } from 'react'

const TransactionList = () => {

    const {state, dispatch} = useFinance()

    const [search, setSearch] = useState('')
    const [typeFilter, setTypeFilter] = useState('all')
    const [categoryFilter, setCategoryFilter] = useState('all')

    const filtered = [...state.transactions]
    .reverse()
    .filter(t => t.title.toLowerCase().includes(search.toLowerCase()))
    .filter(t => typeFilter === 'all' || t.type === typeFilter)
    .filter(t => categoryFilter === 'all' || t.category === categoryFilter)

  return (
    <div className='flex flex-col bg-white border rounded-2xl p-6'>
        <h2 className='text-xl font-semibold mb-3'>Recent Transactions:</h2>

                    <div className='flex gap-4 py-5 justify-between items-center flex-wrap'>
                    <input className='w-45 border px-2 rounded'
                    type='text' 
                    placeholder='Search transactions'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    />

                    <div className='gap-10'>
                    <button className={typeFilter === 'all' ? 'px-3 rounded-2xl bg-blue-300' : 'px-3 rounded-2xl'}
                    onClick={() => setTypeFilter('all')}>All</button>
                    <button className={typeFilter === 'income' ? 'px-3 rounded-2xl bg-blue-300' : 'px-3 rounded-2xl'}
                    onClick={() => setTypeFilter('income')}>Income</button>
                    <button className={typeFilter === 'expense' ? 'px-3 rounded-2xl bg-blue-300' : 'px-3 rounded-2xl'}
                    onClick={() => setTypeFilter('expense')}>Expense</button>

                    <select onChange={(e) => setCategoryFilter(e.target.value)}>
                        <option value="all">All categories</option>
                        <option value="food">Food</option>
                        <option value="rent">Rent</option>
                        <option value="shopping">Shopping</option>
                        <option value="health">Health</option>
                        <option value="salary">Salary</option>
                        <option value="transport">Transport</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                </div>

        {filtered.length === 0 
        ? <p>No transactions yet</p>
        : [...filtered].map((transaction) => (
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