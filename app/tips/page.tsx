import TipCard from '../../components/TipCard'
import { IconName } from '../../components/Icon'

const tips: { tip: string; icon: IconName }[] = [
  {
    tip: "Use LED bulbs instead of traditional incandescent bulbs to save up to 75% energy on lighting.",
    icon: "Zap"
  },
  {
    tip: "Set your thermostat a few degrees lower in the winter and a few degrees higher in the summer.",
    icon: "Thermometer"
  },
  {
    tip: "Use natural light when possible and turn off lights when leaving a room.",
    icon: "Sun"
  },
  {
    tip: "Unplug electronics and appliances when not in use to avoid phantom energy consumption.",
    icon: "Power"
  },
  {
    tip: "Use cold water for laundry whenever possible to save energy on water heating.",
    icon: "Droplet"
  }
]

export default function Tips() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-6">Energy Saving Tips</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tips.map((tip, index) => (
          <TipCard key={index} tip={tip.tip} icon={tip.icon} />
        ))}
      </div>
    </div>
  )
}