'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface LiveEnergyMeterProps {
  currentUsage: number
}

export default function LiveEnergyMeter({ currentUsage }: LiveEnergyMeterProps) {
  const [usage, setUsage] = useState(currentUsage)

  useEffect(() => {
    const interval = setInterval(() => {
      setUsage(prev => prev + (Math.random() - 0.5) * 0.5)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const percentage = (usage / 10) * 100

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Live Energy Meter</h2>
      <div className="relative h-40 w-40 mx-auto">
        <svg viewBox="0 0 100 100" className="transform -rotate-90">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#e0e0e0"
            strokeWidth="10"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#10B981"
            strokeWidth="10"
            strokeDasharray="282.7"
            initial={{ strokeDashoffset: 282.7 }}
            animate={{ strokeDashoffset: 282.7 - (percentage / 100) * 282.7 }}
            transition={{ duration: 1 }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold">{usage.toFixed(2)} kW</span>
        </div>
      </div>
    </div>
  )
}