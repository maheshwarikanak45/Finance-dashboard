import React from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'
import { useFinance } from '../context/FinanceContext'

const ExpensePieChart = () => {

    const {state} = useFinance();
    const data = state.transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, t) => {
        const existing = acc.find(item => item.name === t.category)
        if (existing) {
            existing.value += t.amount
        }
        else {
            acc.push({name: t.category, value: t.amount})
        }
        return acc
    }, [])

    const colors = ['#E24B4A', '#1D9E75', '#378ADD', '#BA7517', '#7F77DD', '#5DCAA5', '#D85A30']

  return (
    <div>
        <PieChart width = {300} height = {300}>
            <Pie data = {data} dataKey = "value" nameKey = "name">
                {data.map((entry, index) => (
                    <Cell key = {index} fill = {colors[index]} />
                ))}
            </Pie>
            <Tooltip />
            <Legend />
        </PieChart>        
    </div>
  )
}

export default ExpensePieChart