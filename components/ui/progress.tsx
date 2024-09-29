interface ProgressProps {
    value: number
    className?: string
  }
  
  export function Progress({ value, className = '' }: ProgressProps) {
    return (
      <div className={`w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 ${className}`}>
        <div
          className="bg-green-600 h-2.5 rounded-full"
          style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        ></div>
      </div>
    )
  }