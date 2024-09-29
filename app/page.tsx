'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Icon, IconName } from '../components/Icon'

const features: { title: string; description: string; icon: IconName }[] = [
  {
    title: 'Real-time Monitoring',
    description: 'Track your energy usage in real-time with our advanced monitoring system.',
    icon: 'Activity'
  },
  {
    title: 'Smart Device Integration',
    description: 'Connect and control your smart devices for optimal energy efficiency.',
    icon: 'Smartphone'
  },
  {
    title: 'Personalized Insights',
    description: 'Receive tailored recommendations to reduce your energy consumption and costs.',
    icon: 'Lightbulb'
  },
  {
    title: 'Historical Data Analysis',
    description: 'Analyze your energy usage patterns over time to identify areas for improvement.',
    icon: 'BarChart2'
  },
  {
    title: 'Carbon Footprint Tracking',
    description: 'Monitor and reduce your carbon footprint with our eco-friendly features.',
    icon: 'Leaf'
  },
  {
    title: 'Energy Saving Challenges',
    description: 'Participate in fun challenges to save energy and earn rewards.',
    icon: 'Award'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-200 dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-green-800 dark:text-green-200">
            Welcome to EcoTrack
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
            Empower your home with smart energy management
          </p>
          <Link
            href="/dashboard"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300"
          >
            Get Started
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <Icon name={feature.icon} className="w-12 h-12 text-green-500 mb-4" />
              <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{feature.title}</h2>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}