import { getEnergyData } from '../../lib/energyData'

export default function Insights() {
  const energyData = getEnergyData()

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Energy Insights</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Peak Usage Times</h2>
          <ul>
            {energyData.peakUsageTimes.map((time, index) => (
              <li key={index} className="mb-2">{time}</li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Energy-Saving Opportunities</h2>
          <ul>
            {energyData.savingOpportunities.map((opportunity, index) => (
              <li key={index} className="mb-2">{opportunity}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}