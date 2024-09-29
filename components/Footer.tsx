'use client'

import { useEffect, useState } from 'react'

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(new Date().getFullYear())
    }, 60000) // Check every minute

    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-4 text-center">
      <p className="text-gray-600 dark:text-gray-400">
        &copy; {currentYear} EcoTrack by Saharsh. All rights reserved.
      </p>
    </footer>
  )
}