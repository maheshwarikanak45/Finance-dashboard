import React, { useState } from 'react'
import { useFinance } from '../context/FinanceContext'

const TransactionForm = () => {

    const {dispatch} = useFinance()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.title || !formData.amount || !formData.date) {
            alert("Please fill all fields")
            return
        }
        dispatch ({
            type: "ADD_TRANSACTION",
            payload: {
                ...formData,
                id: Date.now(),
                amount: Number(formData.amount)
            }
        })
        setformData({
            title: '',
            amount: '',
            type: 'income',
            category: 'food',
            date: ''
        });
    }

    const [formData, setformData] = useState({
    title: '',
    amount: '',
    type: 'income',
    category: 'food',
    date: ''
    })

  return (
    <div>
        <h2>Add Transaction</h2>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input 
            type='text'
            value={formData.title}
            onChange={(e) => {
                setformData({...formData, title: e.target.value})
            }} 
            placeholder='e.g. Salary' />
            
            <label>Amount</label>
            <input
            type='number'
            value={formData.amount}
            onChange={(e) => {
                setformData({...formData, amount: e.target.value})
            }}
            placeholder='e.g. 40000' />

            <label>Type</label>
            <select
            value={formData.type}
            onChange={(e) => {
                setformData({...formData, type: e.target.value})
            }}
            >
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>

            <label>Category</label>
            <select
            value={formData.category}
            onChange={(e) => {
                setformData({...formData, category: e.target.value})
            }}
            >
                <option value="food">Food</option>
                <option value="rent">Rent</option>
                <option value="shopping">Shopping</option>
                <option value="health">Health</option>
                <option value="salary">Salary</option>
                <option value="transport">Transport</option>
                <option value="entertainment">Entertainment</option>
                <option value="other">Other</option>
            </select>

            <label>Date</label>
            <input 
            type='date'
            value={formData.date}
            onChange={(e) => {
                setformData({...formData, date: e.target.value})
            }}
            />
            
            <button>Add Transaction</button>
        </form>
        
    </div>
  )
}

export default TransactionForm