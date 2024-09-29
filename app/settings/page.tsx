'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Settings() {
  const [notifications, setNotifications] = useState(true)
  const [currency, setCurrency] = useState('USD')
  const [energyGoal, setEnergyGoal] = useState(300)
  const [notificationFrequency, setNotificationFrequency] = useState('daily')
  const [comparisonEnabled, setComparisonEnabled] = useState(false)
  const { theme, setTheme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Load settings from localStorage
    const savedSettings = localStorage.getItem('ecoTrackSettings')
    if (savedSettings) {
      const parsedSettings = JSON.parse(savedSettings)
      setNotifications(parsedSettings.notifications)
      setCurrency(parsedSettings.currency)
      setEnergyGoal(parsedSettings.energyGoal)
      setNotificationFrequency(parsedSettings.notificationFrequency)
      setComparisonEnabled(parsedSettings.comparisonEnabled)
    }
  }, [])

  const saveSettings = () => {
    const settings = {
      notifications,
      currency,
      energyGoal,
      notificationFrequency,
      comparisonEnabled,
      theme
    }
    localStorage.setItem('ecoTrackSettings', JSON.stringify(settings))
    toast.success('Settings saved successfully!')
  }

  if (!mounted) return null

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">Preferences</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label htmlFor="notifications" className="flex items-center cursor-pointer">
                <span className="mr-2">Enable notifications</span>
                <div className="relative">
                  <input
                    type="checkbox"
                    id="notifications"
                    className="sr-only"
                    checked={notifications}
                    onChange={() => setNotifications(!notifications)}
                  />
                  <div className={`block w-14 h-8 rounded-full ${notifications ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                  <div className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${notifications ? 'transform translate-x-6' : ''}`}></div>
                </div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <label htmlFor="theme" className="mr-2">Theme</label>
              <select
                id="theme"
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="system">System</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <label htmlFor="currency" className="mr-2">Currency</label>
              <select
                id="currency"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="INR">INR</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <label htmlFor="notificationFrequency" className="mr-2">Notification Frequency</label>
              <select
                id="notificationFrequency"
                value={notificationFrequency}
                onChange={(e) => setNotificationFrequency(e.target.value)}
                className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <label htmlFor="comparisonEnabled" className="flex items-center cursor-pointer">
                <span className="mr-2">Enable household comparison</span>
                <div className="relative">
                  <input
                    type="checkbox"
                    id="comparisonEnabled"
                    className="sr-only"
                    checked={comparisonEnabled}
                    onChange={() => setComparisonEnabled(!comparisonEnabled)}
                  />
                  <div className={`block w-14 h-8 rounded-full ${comparisonEnabled ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                  <div className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${comparisonEnabled ? 'transform translate-x-6' : ''}`}></div>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Energy Goal</h2>
          <div className="flex items-center space-x-4">
            <input
              type="range"
              min="100"
              max="500"
              step="10"
              value={energyGoal}
              onChange={(e) => setEnergyGoal(parseInt(e.target.value))}
              className="w-full"
            />
            <span>{energyGoal} kWh/month</span>
          </div>
        </div>
        <button 
          onClick={saveSettings}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
        >
          Save Settings
        </button>
      </div>
      <ToastContainer />
    </div>
  )
}