import Link from 'next/link'
import { Icon, IconName } from './Icon'
import { motion } from 'framer-motion'

interface SidebarProps {
  isOpen: boolean
}

const menuItems: Array<{ href: string; icon: IconName; label: string }> = [
  { href: '/dashboard', icon: 'Home', label: 'Dashboard' },
  { href: '/devices', icon: 'Smartphone', label: 'Devices' },
  { href: '/insights', icon: 'BarChart2', label: 'Insights' },
  { href: '/settings', icon: 'Settings', label: 'Settings' },
]

export default function Sidebar({ isOpen }: SidebarProps) {
  return (
    <aside className={`bg-white dark:bg-gray-800 w-72 min-h-screen p-6 ${isOpen ? '' : 'hidden'} lg:block`}>
      <nav>
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <motion.li key={item.href} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href={item.href} className="flex items-center space-x-4 p-3 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                <Icon name={item.icon} className="w-6 h-6" />
                <span className="text-lg font-medium">{item.label}</span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}