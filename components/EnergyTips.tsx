'use client'

import { useState } from 'react'
import { Icon, IconName } from './Icon'

interface Tip {
  title: string
  description: string
  icon: IconName
}

const tips: Tip[] = [
  { 
    title: "Unplug Devices",
    description: "Unplug devices when not in use to save on standby power consumption.",
    icon: "Power"
  },
  {
    title: "Use LED Bulbs",
    description: "Replace traditional bulbs with LED bulbs to save up to 75% on lighting costs.",
    icon: "Sun"
  },
  {
    title: "Optimize Thermostat",
    description: "Set your thermostat a few degrees lower in winter and higher in summer to save on HVAC costs.",
    icon: "Thermometer"
  },
  {
    title: "Use Natural Light",
    description: "Open curtains and use natural light when possible to reduce artificial lighting needs.",
    icon: "Sunrise"
  },
  {
    title: "Efficient Appliances",
    description: "Use energy-efficient appliances and run them during off-peak hours.",
    icon: "Zap"
  }
]

export default function EnergyTips() {
  const [currentTip, setCurrentTip] = useState(0)

  const nextTip = () => {
    setCurrentTip((prev) => (prev + 1) % tips.length)
  }

  const prevTip = () => {
    setCurrentTip((prev) => (prev - 1 + tips.length) % tips.length)
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Energy Saving Tips</h2>
      <div className="flex items-center justify-between">
        <button onClick={prevTip} className="text-green-500 hover:text-green-600">
          <Icon name="ChevronLeft" className="w-6 h-6" />
        </button>
        <div className="text-center">
          <Icon name={tips[currentTip].icon} className="w-12 h-12 text-green-500 mx-auto mb-2" />
          <h3 className="text-xl font-semibold mb-2">{tips[currentTip].title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{tips[currentTip].description}</p>
        </div>
        <button onClick={nextTip} className="text-green-500 hover:text-green-600">
          <Icon name="ChevronRight" className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}