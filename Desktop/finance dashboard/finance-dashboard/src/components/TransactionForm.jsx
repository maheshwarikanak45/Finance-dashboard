import React, { use, useEffect, useState } from 'react'
import { useFinance } from '../context/FinanceContext'

const TransactionForm = () => {

    const {state, dispatch} = useFinance()

    useEffect(() => {
        if (state.editingTransaction) {
            setformData(state.editingTransaction)
        }
    }, [state.editingTransaction])


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.title || !formData.amount || !formData.date) {
            alert("Please fill all fields")
            return
        }
        if (state.editingTransaction) {
            dispatch ({
            type: "EDIT_TRANSACTION",
            payload: {
                ...formData,
                amount: Number(formData.amount)
            }
            })
            dispatch({type: "SET_EDITING", payload: null})
            setformData({
            title: '',
            amount: '',
            type: 'income',
            category: 'food',
            date: ''
        });
            return;
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
    <div className='bg-white rounded-2xl p-6   border  border border-gray-400'>
        <h2 className='text-lg font-semibold mb-4'>Add Transaction</h2>
        <form onSubmit={handleSubmit} className='grid grid-cols-3 gap-4'>
            <div className='flex flex-col gap-1'>
            <label>Title</label>
            <input className='w-34'
            type='text'
            value={formData.title}
            onChange={(e) => {
                setformData({...formData, title: e.target.value})
            }} 
            placeholder='e.g. Salary' />
            </div>
            
            <div className='flex flex-col gap-1'>
            <label>Amount</label>
            <input className='w-34'
            type='number'
            value={formData.amount}
            onChange={(e) => {
                setformData({...formData, amount: e.target.value})
            }}
            placeholder='e.g. 40000' />
            </div>

            <div className='flex flex-col gap-1'>
            <label>Type</label>
            <select className='w-34'
            value={formData.type}
            onChange={(e) => {
                setformData({...formData, type: e.target.value})
            }}
            >
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>
            </div>

            <div className='flex flex-col gap-1'>
            <label>Category</label>
            <select className='w-34'
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
            </div>

            <div className='flex flex-col gap-1'>
            <label>Date</label>
            <input className='w-34'
            type='date'
            value={formData.date}
            onChange={(e) => {
                setformData({...formData, date: e.target.value})
            }}
            />
            </div>
            
            <button className='col-span-3 border border-gray-400 p-3 rounded-2xl cursor-pointer'>
                {state.editingTransaction ? 'Update Transaction' : 'Add Transaction'}                
                </button>
        </form>
        
    </div>
  )
}

export default TransactionForm