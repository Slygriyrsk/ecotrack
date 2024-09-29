import { IconName } from '../components/Icon'

export interface Device {
  id: number
  name: string
  type: IconName
  usage: number
  status: 'on' | 'off'
}

export function getDevices(): Device[] {
  return [
    { id: 1, name: 'Living Room AC', type: 'Wind', usage: 2.5, status: 'on' },
    { id: 2, name: 'Kitchen Fridge', type: 'Box', usage: 1.2, status: 'on' },
    { id: 3, name: 'Bedroom TV', type: 'Tv', usage: 0.8, status: 'off' },
    { id: 4, name: 'Office Computer', type: 'Monitor', usage: 0.5, status: 'on' },
    { id: 5, name: 'Washing Machine', type: 'Droplet', usage: 1.0, status: 'off' },
    { id: 6, name: 'Water Heater', type: 'Thermometer', usage: 3.0, status: 'on' },
  ]
}