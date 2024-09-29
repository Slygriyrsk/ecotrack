'use client'

import { useState } from 'react'
import { Progress } from './ui/progress'

export default function EnergyGoals() {
  const [goal, setGoal] = useState(300)
  const [currentUsage, setCurrentUsage] = useState(250)

  const progress = (currentUsage / goal) * 100

  const handleGoalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newGoal = parseInt(e.target.value)
    setGoal(newGoal)
    // Ensure current usage doesn't exceed the new goal
    if (currentUsage > newGoal) {
      setCurrentUsage(newGoal)
    }
  }

  const handleUsageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUsage = parseInt(e.target.value)
    setCurrentUsage(newUsage)
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Energy Goal</h2>
      <div className="space-y-4">
        <Progress value={progress} className="w-full" />
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {currentUsage} kWh / {goal} kWh
        </p>
        <div className="space-y-2">
          <label htmlFor="goalSlider" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Adjust Goal
          </label>
          <div className="flex items-center space-x-4">
            <input
              id="goalSlider"
              type="range"
              min="100"
              max="500"
              step="10"
              value={goal}
              onChange={handleGoalChange}
              className="w-full"
            />
            <span className="text-sm font-medium">{goal} kWh</span>
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="usageSlider" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Adjust Current Usage
          </label>
          <div className="flex items-center space-x-4">
            <input
              id="usageSlider"
              type="range"
              min="0"
              max={goal}
              step="10"
              value={currentUsage}
              onChange={handleUsageChange}
              className="w-full"
            />
            <span className="text-sm font-medium">{currentUsage} kWh</span>
          </div>
        </div>
      </div>
    </div>
  )
}