import React from 'react'
import { useFinance } from '../context/FinanceContext'

const TransactionList = () => {

    const {state, dispatch} = useFinance()

  return (
    <div>
        {state.transactions.length === 0 
        ? <p>No transactions yet</p>
        : [...state.transactions].reverse().map((transaction) => (
            <div key={transaction.id}>
                <button onClick={() => dispatch ({type: "DELETE_TRANSACTION", payload: transaction.id})} >
                    Delete
                </button>
                {transaction.title}
                {transaction.amount}
            </div>
        ))}
    </div>
  )
}

export default TransactionList