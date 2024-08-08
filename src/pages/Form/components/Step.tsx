import { memo } from 'react'
import { IStep } from '../../../types'

interface StepProps {
  steps: IStep[]
  activeStep: number
}

const StepComponent = ({ steps, activeStep }: StepProps) => {
  return steps[activeStep].component
}

export const Step = memo(StepComponent)
