export function getEnergyData() {
  return {
    totalUsage: 250,
    usageChange: -5,
    totalCost: 75,
    costChange: -3,
    carbonFootprint: 100,
    carbonChange: -7,
    currentUsage: 3.5,
    hourlyUsage: [
      { time: '00:00', usage: 2 },
      { time: '04:00', usage: 1 },
      { time: '08:00', usage: 3 },
      { time: '12:00', usage: 5 },
      { time: '16:00', usage: 4 },
      { time: '20:00', usage: 3 },
    ],
    distribution: [
      { id: 'Lighting', value: 20 },
      { id: 'HVAC', value: 40 },
      { id: 'Appliances', value: 25 },
      { id: 'Electronics', value: 15 },
    ],
    comparison: [
      { category: 'Lighting',    'Your Usage': 20, 'Average Usage': 25 },
      { category: 'HVAC',        'Your Usage': 40, 'Average Usage': 35 },
      { category: 'Appliances',  'Your Usage': 25, 'Average Usage': 30 },
      { category: 'Electronics', 'Your Usage': 15, 'Average Usage': 10 },
    ],
    peakUsageTimes: [
      'Weekdays from 6 PM to 9 PM',
      'Weekends from 2 PM to 5 PM',
    ],
    savingOpportunities: [
      'Reduce AC usage during peak hours',
      'Use energy-efficient appliances',
      'Improve home insulation',
    ],
  }
}