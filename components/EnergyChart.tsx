'use client'

import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface EnergyChartProps {
  data: { time: string; usage: number }[]
}

export default function EnergyChart({ data }: EnergyChartProps) {
  const [timeRange, setTimeRange] = useState('day')

  const filteredData = data.slice(0, timeRange === 'day' ? 24 : 7)

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Energy Usage Over Time</h2>
        <div className="flex space-x-2">
          <button
            className={`px-3 py-1 rounded ${
              timeRange === 'day' ? 'bg-green-500 text-white' : 'bg-gray-200 dark:bg-gray-700'
            }`}
            onClick={() => setTimeRange('day')}
          >
            Day
          </button>
          <button
            className={`px-3 py-1 rounded ${
              timeRange === 'week' ? 'bg-green-500 text-white' : 'bg-gray-200 dark:bg-gray-700'
            }`}
            onClick={() => setTimeRange('week')}
          >
            Week
          </button>
        </div>
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={filteredData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="usage" stroke="#34D399" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}