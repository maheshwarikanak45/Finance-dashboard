import React from 'react'
import { useFinance } from '../context/FinanceContext'
import { useState } from 'react'
import {Utensils,House,Film,ShoppingBag,Car,HeartPulse,Briefcase} from "lucide-react";

const TransactionList = () => {

    const categoryIcons = {
    food: <Utensils size={18} className="text-orange-500" />,
    rent: <House size={18} className="text-blue-500" />,
    entertainment: <Film size={18} className="text-purple-500" />,
    shopping: <ShoppingBag size={18} className="text-pink-500" />,
    transport: <Car size={18} className="text-cyan-500" />,
    health: <HeartPulse size={18} className="text-red-500" />,
    salary: <Briefcase size={18} className="text-green-500" />,
    other: <ShoppingBag size={18} className="text-gray-500" />,
    };

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
    <div className='flex flex-col bg-white  border border-gray-400 rounded-2xl p-6'>
        <h2 className='text-xl font-semibold mb-3'>Recent Transactions</h2>

                    <div className='flex gap-4 py-5 justify-between items-center flex-wrap'>
                    <input className='w-45 border border-gray-400 px-2 rounded'
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

                    <div className="flex items-center gap-3">

    {categoryIcons[transaction.category] || categoryIcons.other}

        <div>
            <p className="font-medium capitalize">
                {transaction.title}
            </p>

            <p className="text-sm text-gray-500 capitalize">
                {transaction.category} •{" "}
                {new Date(transaction.date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                })}
            </p>
        </div>

    </div>

                    <div className='flex items-center gap-4'>
                <span className={transaction.type === 'income' ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
                    {transaction.type === 'income' ? '+' : '-'}₹{transaction.amount}
                </span>
                <button className=' text-red-400 text-sm cursor-pointer'
                onClick={() => dispatch ({type: "DELETE_TRANSACTION", payload: transaction.id})} >
                    Delete
                </button>
                <button className=' text-black text-sm cursor-pointer'
                onClick={() => {
                    dispatch ({type: "SET_EDITING", payload: transaction})
                    window.scrollTo({top: 0, behavior: 'smooth'})
                    }} >
                    Edit
                </button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default TransactionList