import DeviceList from '../../components/DeviceList'
import { getDevices } from '../../lib/deviceData'

export default function Devices() {
  const devices = getDevices()

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-6">Connected Devices</h1>
      <DeviceList devices={devices} />
    </div>
  )
}