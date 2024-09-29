import { IconName, Icon } from './Icon'

interface Device {
  id: number
  name: string
  type: IconName
  usage: number
  status: 'on' | 'off'
}

interface DeviceListProps {
  devices: Device[]
}

export default function DeviceList({ devices }: DeviceListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {devices.map((device) => (
        <div key={device.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Icon name={device.type} className="w-6 h-6 mr-2 text-green-500" />
              <h3 className="text-lg font-semibold">{device.name}</h3>
            </div>
            <span className={`px-2 py-1 rounded ${device.status === 'on' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {device.status}
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-300">Usage: {device.usage} kWh</p>
        </div>
      ))}
    </div>
  )
}