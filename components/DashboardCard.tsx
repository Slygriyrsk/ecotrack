'use client'

import { useEffect, useRef } from 'react'
import { Icon, IconName } from './Icon'
import gsap from 'gsap'

interface DashboardCardProps {
  title: string
  value: string
  change: number
  icon: IconName
  noAnimation?: boolean
}

export default function DashboardCard({ title, value, change, icon, noAnimation = false }: DashboardCardProps) {
  const cardRef = useRef(null)

  useEffect(() => {
    if (!noAnimation) {
      gsap.to(cardRef.current, {
        duration: 0.5,
        y: 0,
        opacity: 1,
        ease: 'power3.out'
      })
    }
  }, [noAnimation])

  return (
    <div
      ref={cardRef}
      className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md ${
        noAnimation ? '' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <Icon name={icon} className="w-6 h-6 text-green-500" />
      </div>
      <div className="text-3xl font-bold mb-2">{value}</div>
      <div className={`flex items-center ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
        <Icon name={change >= 0 ? 'TrendingUp' : 'TrendingDown'} className="w-4 h-4 mr-1" />
        <span>{Math.abs(change)}%</span>
      </div>
    </div>
  )
}