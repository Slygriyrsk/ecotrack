import { IconName, Icon } from './Icon'

interface Device {
  id: number
  name: string
  type: IconName
  usage: number
  status: 'on' | 'off'
}

interface DeviceStatusProps {
  devices: Device[]
}

export default function DeviceStatus({ devices }: DeviceStatusProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Device Status</h2>
      <div className="space-y-4">
        {devices.slice(0, 4).map((device) => (
          <div key={device.id} className="flex items-center justify-between">
            <div className="flex items-center">
              <Icon name={device.type} className="w-6 h-6 mr-2" />
              <span>{device.name}</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">{device.usage} kWh</span>
              <div
                className={`w-3 h-3 rounded-full ${
                  device.status === 'on' ? 'bg-green-500' : 'bg-red-500'
                }`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}