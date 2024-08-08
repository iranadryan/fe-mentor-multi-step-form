import { memo, useMemo } from 'react'
import { useForm } from '../../../hooks/useForm'

export const FourthStepComponent = () => {
  const { planInfo, addonsInfo } = useForm()
  const total = useMemo(() => {
    const billingMultiplier = planInfo.selectedBilling === 'monthly' ? 1 : 10
    const planTotal = planInfo.selectedPlan.monthPrice * billingMultiplier
    const addonsTotal = addonsInfo.reduce(
      (acc, curr) => acc + curr.monthPrice * billingMultiplier,
      0,
    )

    return planTotal + addonsTotal
  }, [addonsInfo, planInfo.selectedBilling, planInfo.selectedPlan.monthPrice])

  return (
    <div>
      <section className="rounded-lg bg-magnolia px-6 pb-6 pt-5">
        <div className="flex items-center justify-between">
          <div>
            <strong className="block font-medium text-marine-blue max-md:text-sm">
              {`${planInfo.selectedPlan.name} (${planInfo.selectedBilling})`}
            </strong>
            <button className="text-sm text-cool-gray underline underline-offset-2 hover:text-purplish-blue">
              Change
            </button>
          </div>
          <strong className="text-marine-blue max-md:text-sm">
            {planInfo.selectedBilling === 'monthly'
              ? `$${planInfo.selectedPlan.monthPrice}/mo`
              : `$${planInfo.selectedPlan.monthPrice * 10}/yr`}
          </strong>
        </div>

        <hr className="mb-4 mt-6 border-light-gray max-md:my-3" />

        <ul className="flex flex-col gap-4 max-md:gap-3">
          {addonsInfo.map((addon) => (
            <li key={addon.type} className="flex justify-between">
              <span className="text-sm text-cool-gray">{addon.name}</span>
              <span className="text-sm text-marine-blue">
                {planInfo.selectedBilling === 'monthly'
                  ? `+$${addon.monthPrice}/mo`
                  : `+$${addon.monthPrice * 10}/yr`}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <div className="mx-6 mt-5 flex items-center justify-between">
        <span className="text-sm text-cool-gray">
          Total{' '}
          {planInfo.selectedBilling === 'monthly'
            ? '(per month)'
            : '(per year)'}
        </span>
        <strong className="text-xl text-purplish-blue max-md:text-base">
          {planInfo.selectedBilling === 'monthly'
            ? `$${total}/mo`
            : `$${total}/yr`}
        </strong>
      </div>
    </div>
  )
}

export const FourthStep = memo(FourthStepComponent)
