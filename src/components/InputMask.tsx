import { ComponentProps } from 'react'
import { IMaskInput } from 'react-imask'

interface InputProps {
  label?: string
  error?: string
}

type MaskProps = ComponentProps<typeof IMaskInput>

export function InputMask({
  label,
  error,
  name,
  ...props
}: InputProps & MaskProps) {
  return (
    <div>
      <div className="flex items-center justify-between">
        {label && (
          <label
            htmlFor={name}
            className="block text-sm text-marine-blue max-md:text-xs"
          >
            {label}
          </label>
        )}
        {error && (
          <span className="block text-sm font-bold text-strawberry-red max-md:text-xs">
            {error}
          </span>
        )}
      </div>
      <IMaskInput
        name={name}
        id={name}
        aria-invalid={!!error}
        className="mt-1 h-12 w-full appearance-none rounded-lg px-4 font-medium text-marine-blue outline outline-1 outline-light-gray transition-all placeholder:text-cool-gray hover:outline-purplish-blue focus:outline-purplish-blue aria-[invalid=true]:outline-strawberry-red max-md:h-10 max-md:rounded max-md:tracking-tight"
        {...props}
      />
    </div>
  )
}
