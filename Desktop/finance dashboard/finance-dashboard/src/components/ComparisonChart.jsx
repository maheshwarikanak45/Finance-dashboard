import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts'
import { useFinance } from '../context/FinanceContext'
import { format, parseISO } from 'date-fns'


const ComparisonChart = () => {

    const {state} = useFinance();
    const data = state.transactions
    .reduce((acc, t) => {
    const month = format(parseISO(t.date), 'MMM')
    const existing = acc.find(item => item.month === month)
    if (existing) {
        if (t.type === 'income') existing.income += t.amount
        else existing.expense += t.amount
    } 
    else {
        acc.push({
        month,
        income: t.type === 'income' ? t.amount : 0,
        expense: t.type === 'expense' ? t.amount : 0
        })
    }
    return acc
    }, [])


  return (
    <div>
        <h2 className='text-lg font-semibold mb-7'>Monthly Overview</h2>
        <BarChart width={400} height={250} data={data}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey= "month" />
            <YAxis/>
            <Tooltip />
            <Legend />
            <Bar dataKey= "income" fill='#1d9e75' />
            <Bar dataKey= "expense" fill='#e24b4a' />
        </BarChart>
    </div>
  )
}

export default ComparisonChart