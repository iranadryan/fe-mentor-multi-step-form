import { ComponentProps } from 'react'
import { cn } from '../utils/cn'

interface ButtonProps extends ComponentProps<'button'> {
  texted?: boolean
}

export function Button({ children, className, texted, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'flex h-12 w-[123px] items-center justify-center rounded-lg bg-marine-blue font-medium text-white outline-none transition-all hover:brightness-150 focus:brightness-150 max-md:h-10 max-md:w-[97px] max-md:rounded max-md:text-sm',
        texted &&
          'bg-transparent h-auto rounded-none p-0 text-cool-gray hover:text-marine-blue hover:brightness-100 focus:text-marine-blue focus:brightness-100',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
