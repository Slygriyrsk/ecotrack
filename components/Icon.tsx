import { LucideProps } from 'lucide-react'
import * as LucideIcons from 'lucide-react'

export type IconName = keyof typeof LucideIcons

export interface ExtendedIconProps extends LucideProps {
  name: IconName
}

export function Icon({ name, ...props }: ExtendedIconProps) {
  const IconComponent = LucideIcons[name] as React.ComponentType<LucideProps>
  return <IconComponent {...props} />
}