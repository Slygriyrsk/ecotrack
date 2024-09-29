'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { motion } from 'framer-motion'
import DashboardCard from '../../components/DashboardCard'
import EnergyChart from '../../components/EnergyChart'
import DeviceStatus from '../../components/DeviceStatus'
import EnergyDistribution from '../../components/EnergyDistribution'
import LiveEnergyMeter from '../../components/LiveEnergyMeter'
import WeatherWidget from '../../components/WeatherWidget'
import EnergyComparison from '../../components/EnergyComparison'
import EnergyTips from '../../components/EnergyTips'
import { getEnergyData } from '../../lib/energyData'
import { getDevices } from '../../lib/deviceData'

export default function Dashboard() {
  const [energyData, setEnergyData] = useState(getEnergyData())
  const devices = getDevices()
  const dashboardRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.dashboard-card', {
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out'
      })
    }, dashboardRef)

    // Simulating real-time updates
    const interval = setInterval(() => {
      setEnergyData(prevData => ({
        ...prevData,
        totalUsage: prevData.totalUsage + Math.random() * 0.1,
        totalCost: prevData.totalCost + Math.random() * 0.05,
        currentUsage: prevData.currentUsage + (Math.random() - 0.5) * 0.2,
      }))
    }, 5000)

    return () => {
      ctx.revert()
      clearInterval(interval)
    }
  }, [])

  return (
    <motion.div 
      ref={dashboardRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardCard
          title="Total Energy Usage"
          value={`${energyData.totalUsage.toFixed(2)} kWh`}
          change={energyData.usageChange}
          icon="Zap"
        />
        <DashboardCard
          title="Energy Cost"
          value={`$${energyData.totalCost.toFixed(2)}`}
          change={energyData.costChange}
          icon="DollarSign"
          noAnimation={true}
        />
        <DashboardCard
          title="Carbon Footprint"
          value={`${energyData.carbonFootprint} kg CO2`}
          change={energyData.carbonChange}
          icon="Leaf"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <EnergyChart data={energyData.hourlyUsage} />
        <EnergyDistribution data={energyData.distribution} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <LiveEnergyMeter currentUsage={energyData.currentUsage} />
        <WeatherWidget />
        <DeviceStatus devices={devices} />
      </div>
      <EnergyComparison data={energyData.comparison} />
      <EnergyTips />
    </motion.div>
  )
}