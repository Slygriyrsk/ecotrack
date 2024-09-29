'use client'

import { useState, useEffect } from 'react'
import { Icon, IconName } from './Icon'

interface WeatherState {
  temp: number;
  condition: string;
  icon: IconName;
}

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherState>({ temp: 0, condition: 'Clear', icon: 'Sun' })

  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      setWeather({ temp: 22, condition: 'Partly Cloudy', icon: 'Cloud' })
    }, 1000)
  }, [])

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Weather</h2>
      <div className="flex items-center justify-center">
        <Icon name={weather.icon} className="w-16 h-16 text-yellow-400 mr-4" />
        <div>
          <p className="text-3xl font-bold">{weather.temp}°C</p>
          <p className="text-gray-600 dark:text-gray-300">{weather.condition}</p>
        </div>
      </div>
    </div>
  )
}