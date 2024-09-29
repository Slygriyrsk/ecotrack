import Link from 'next/link'
import { Menu } from 'react-feather'

interface HeaderProps {
  onMenuClick: () => void
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <button onClick={onMenuClick} className="mr-4 md:hidden">
            <Menu className="w-6 h-6" />
          </button>
          <Link href="/" className="text-2xl font-bold text-green-500">
            EcoTrack
          </Link>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <Link href="/settings" className="text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400">
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
// import { Icon } from './Icon'

// interface HeaderProps {
//   onMenuClick: () => void
// }

// export default function Header({ onMenuClick }: HeaderProps) {
//   return (
//     <header className="bg-white dark:bg-gray-800 shadow-md">
//       <div className="container mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center">
//             <button onClick={onMenuClick} className="text-gray-500 focus:outline-none lg:hidden">
//               <Icon name="Menu" className="h-6 w-6" />
//             </button>
//             <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200 ml-4">EcoTrack</h1>
//           </div>
//           <div className="flex items-center">
//             {/* Add any additional header items here */}
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }