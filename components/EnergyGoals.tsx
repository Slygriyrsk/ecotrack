'use client'

import { useState } from 'react'
import { Progress } from './ui/progress'

export default function EnergyGoals() {
  const [goal, setGoal] = useState(300)
  const [currentUsage, setCurrentUsage] = useState(250)

  const progress = (currentUsage / goal) * 100

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Energy Goal</h2>
      <div className="space-y-4">
        <Progress value={progress} className="w-full" />
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {currentUsage} kWh / {goal} kWh
        </p>
        <div className="flex items-center space-x-4">
          <input
            type="range"
            min="100"
            max="500"
            step="10"
            value={goal}
            onChange={(e) => setGoal(parseInt(e.target.value))}
            className="w-full"
          />
          <span className="text-sm font-medium">{goal} kWh</span>
        </div>
      </div>
    </div>
  )
}