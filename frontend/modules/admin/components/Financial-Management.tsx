import React from 'react'
import StatCard from './statCard'
import { CreditCard, DollarSign, TrendingUp } from 'lucide-react'
import TransactionHistory from './Transaction-History'
import Payout from './Payout'

const FinancialManagement = () => {
  return (
    <>
    <div className="space-y-6">
      {/* Financial Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Revenue" 
          value="₹28.5L" 
          icon={DollarSign} 
          change={15.2}
          color="bg-green-500"
        />
        <StatCard 
          title="Total Commission" 
          value="₹4.2L" 
          icon={TrendingUp} 
          change={12.8}
          color="bg-blue-500"
        />
        <StatCard 
          title="Total Payouts" 
          value="₹24.3L" 
          icon={CreditCard} 
          change={18.5}
          color="bg-purple-500"
        />
        <StatCard 
          title="Current Balance" 
          value="₹1.8L" 
          icon={DollarSign} 
          change={-5.2}
          color="bg-yellow-500"
        />
      </div>

      {/* Initiate Payout */}
      <Payout />

      {/* Transaction History */}
      <TransactionHistory />
    </div>
    </>
  )
}

export default FinancialManagement