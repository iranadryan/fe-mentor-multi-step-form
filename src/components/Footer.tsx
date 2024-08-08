import { ComponentProps } from 'react'
import { useForm } from '../hooks/useForm'
import { cn } from '../utils/cn'
import { Button } from './Button'

interface FooterProps {
  className?: ComponentProps<'button'>['className']
}

export function Footer({ className }: FooterProps) {
  const { activeStep, steps, concluded, handleDecreaseStep, handleSubmit } =
    useForm()

  if (concluded) {
    return null
  }

  return (
    <footer
      className={cn(
        'mt-auto flex items-center justify-between bg-white max-md:p-4',
        className,
      )}
    >
      {activeStep > 0 && (
        <Button type="button" onClick={handleDecreaseStep} texted>
          Go Back
        </Button>
      )}
      <Button
        type="submit"
        onClick={handleSubmit}
        className={cn(
          'ml-auto',
          activeStep === steps.length - 1 && 'bg-purplish-blue',
        )}
      >
        {activeStep === steps.length - 1 ? 'Confirm' : 'Next Step'}
      </Button>
    </footer>
  )
}
