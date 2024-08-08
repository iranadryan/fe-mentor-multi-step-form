import { forwardRef, memo, useImperativeHandle } from 'react'
import { IconAdvanced } from '../../../assets/icons/IconAdvanced'
import { IconArcade } from '../../../assets/icons/IconArcade'
import { IconPro } from '../../../assets/icons/IconPro'
import { Switch } from '../../../components/Switch'
import { IPlan, IStepRef } from '../../../types'
import { useForm } from '../../../hooks/useForm'
import { handleChange } from '../../../utils/handleChange'

const plans: IPlan[] = [
  {
    type: 'arcade',
    name: 'Arcade',
    monthPrice: 9,
    icon: <IconArcade />,
  },
  {
    type: 'advanced',
    name: 'Advanced',
    monthPrice: 12,
    icon: <IconAdvanced />,
  },
  {
    type: 'pro',
    name: 'Pro',
    monthPrice: 15,
    icon: <IconPro />,
  },
]

export const SecondStepComponent = forwardRef<IStepRef>((_props, ref) => {
  const { planInfo, setPlanInfo } = useForm()

  function handleToggleBilling() {
    setPlanInfo((prevState) => ({
      ...prevState,
      selectedBilling:
        prevState.selectedBilling === 'monthly' ? 'yearly' : 'monthly',
    }))
  }

  useImperativeHandle(
    ref,
    () => ({
      handleSubmit: () => {},
    }),
    [],
  )

  return (
    <div className="flex flex-col gap-8 max-md:gap-6">
      <section className="flex justify-between max-md:flex-col max-md:gap-3">
        {plans.map((plan) => (
          <button
            key={plan.type}
            type="button"
            data-active={planInfo.selectedPlan.type === plan.type}
            onClick={() => handleChange(setPlanInfo, 'selectedPlan', plan)}
            className="flex w-34 flex-col gap-10 rounded-md border border-light-gray px-4 py-5 transition-all duration-300 data-[active=true]:border-purplish-blue data-[active=true]:bg-magnolia max-md:w-full max-md:flex-row max-md:items-center max-md:gap-[14px] max-md:p-4"
          >
            {plan.icon}
            <footer className="flex flex-col items-start">
              <strong className="font-medium text-marine-blue">
                {plan.name}
              </strong>
              <span className="text-sm text-cool-gray">
                {planInfo.selectedBilling === 'monthly'
                  ? `$${plan.monthPrice}/mo`
                  : `$${plan.monthPrice * 10}/yr`}
              </span>
              {planInfo.selectedBilling === 'yearly' && (
                <span className="mt-1 text-xs text-marine-blue">
                  2 months free
                </span>
              )}
            </footer>
          </button>
        ))}
      </section>

      <div className="flex h-12 items-center justify-center gap-6 rounded-md bg-magnolia">
        <span
          data-active={planInfo.selectedBilling === 'monthly'}
          className="text-sm font-medium text-cool-gray data-[active=true]:text-marine-blue"
        >
          Monthly
        </span>
        <Switch
          checked={planInfo.selectedBilling === 'yearly'}
          onChange={handleToggleBilling}
        />
        <span
          data-active={planInfo.selectedBilling === 'yearly'}
          className="text-sm font-medium text-cool-gray data-[active=true]:text-marine-blue"
        >
          Yearly
        </span>
      </div>
    </div>
  )
})

SecondStepComponent.displayName = 'SecondStep'

export const SecondStep = memo(SecondStepComponent)
