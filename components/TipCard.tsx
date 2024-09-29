import { Icon, IconName } from './Icon'

interface TipCardProps {
  tip: string
  icon: IconName
}

export default function TipCard({ tip, icon }: TipCardProps) {
  return (
    <div className="bg-blue-100 dark:bg-blue-900 p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-2">
        <Icon name={icon} className="w-6 h-6 mr-2 text-blue-500" />
        <h3 className="text-lg font-semibold">Energy Saving Tip</h3>
      </div>
      <p className="text-blue-800 dark:text-blue-200">{tip}</p>
    </div>
  )
}