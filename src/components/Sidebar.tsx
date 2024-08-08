import { memo } from 'react'
import { IStep } from '../types'

interface SidebarProps {
  activeStep: number
  steps: IStep[]
}

export const SidebarComponent = ({ steps, activeStep }: SidebarProps) => {
  return (
    <aside className="bg-sidebar-desktop max-md:bg-sidebar-mobile my-4 ml-4 flex w-68 flex-col gap-8 rounded-xl bg-cover px-8 py-10 max-md:my-0 max-md:ml-0 max-md:h-[172px] max-md:w-full max-md:flex-row max-md:justify-center max-md:rounded-none max-md:pt-8">
      {steps.map(({ label }, index) => (
        <div className="flex items-center gap-4 max-md:items-start" key={label}>
          <span
            data-active={activeStep === index}
            className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white text-sm font-bold text-white transition-all data-[active=true]:border-light-blue data-[active=true]:bg-light-blue data-[active=true]:text-marine-blue"
          >
            {index + 1}
          </span>
          <div className="flex flex-col max-md:hidden">
            <span className="text-xs text-pastel-blue">STEP {index + 1}</span>
            <strong className="text-sm font-bold uppercase tracking-widest text-white">
              {label}
            </strong>
          </div>
        </div>
      ))}
    </aside>
  )
}

export const Sidebar = memo(SidebarComponent)
