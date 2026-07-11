import React from 'react'
import ExpensePieChart from '../components/ExpensePieChart'
import ComparisonChart from '../components/ComparisonChart'
import { useFinance } from '../context/FinanceContext'
import { format, parseISO } from 'date-fns'

const Analytics = () => {

  const {state} = useFinance()

  if (state.transactions.length === 0) {
    return <div className='p-6'><p>No transactions yet — add some to see analytics!</p></div>
  }

  const totalTransactions = state.transactions

  const biggestExpense = state.transactions
  .filter(t => t.type === 'expense')
  .reduce((max, t) => t.amount > max.amount ? t:max, {amount : 0})

  const categoryData = state.transactions
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

  const mostSpentCategory = categoryData.reduce((max, item) => 
  item.value > max.value ? item : max, {value:0})    
  
  const totalExpense = state.transactions
  .filter(t => t.type === 'expense')
  .reduce((total, t) => total + t.amount, 0)

  const uniqueDays = new Set(
    state.transactions
    .filter(t => t.type === 'expense')
    .map(t => t.date)
  ).size

  const avgDailySpend = uniqueDays > 0 ? Math.round(totalExpense/uniqueDays) : 0

    const uniqueMonths = new Set(
    state.transactions
    .map(t => format(parseISO(t.date), 'MMM yyyy'))
  ).size

  const totalMonths = uniqueMonths > 0 ? Math.round(uniqueMonths) : 0

  return (

    <div className='flex flex-col gap-6'>
      
      <div className='flex flex-row gap-6'>
        <ExpensePieChart/>
        <ComparisonChart />
      </div>
        <div className=' flex flex-col px-4 border border-gray-400 rounded-2xl py-2 m-4'>
          <h1 className='mb-4 text-xl font-semibold'>Statistics</h1>

          <p className='text-medium text-gray-600'>Total number of transaction  </p>
          <p className='text-lg font-semibold text-gray-800 mb-4'>{totalTransactions.length}</p>

          <p className='text-medium text-gray-600'>Biggest expense </p>
          <p className='text-lg text-gray-800 font-semibold mb-4'> {biggestExpense.amount} ({biggestExpense.title.charAt(0).toUpperCase() + biggestExpense.title.slice(1)}) </p>

          <p className='text-medium text-gray-600'>Most spent category </p>
          <p className='text-lg font-semibold text-gray-800 mb-4'>{mostSpentCategory.name.charAt(0).toUpperCase() + mostSpentCategory.name.slice(1)} (₹{mostSpentCategory.value})</p>

          <p className='text-medium text-gray-600'>Average daily spend </p>
          <p className='text-lg font-semibold text-gray-800 mb-4'>{avgDailySpend}</p>

          <p className='text-medium text-gray-600'>Total months tracked </p>
          <p className='text-lg font-semibold text-gray-800 mb-4'>{totalMonths}</p>

        </div>


    </div>
  )
}

export default Analytics