import React from 'react'
import ExpensePieChart from '../components/ExpensePieChart'
import ComparisonChart from '../components/ComparisonChart'

const Analytics = () => {
  return (
    <div className='flex flex-row gap-6'>
        <ExpensePieChart/>
        <ComparisonChart />
    </div>
  )
}

export default Analytics