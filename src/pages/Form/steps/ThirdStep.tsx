import { forwardRef, memo, useImperativeHandle } from 'react'
import { IconCheck } from '../../../assets/icons/IconCheck'
import { addonType, IAddon, IStepRef } from '../../../types'
import { useForm } from '../../../hooks/useForm'

const addons: IAddon[] = [
  {
    type: 'onlineService',
    name: 'Online service',
    description: 'Access to multiplayer games',
    monthPrice: 1,
  },
  {
    type: 'largerStorage',
    name: 'Larger storage',
    description: 'Access to multiplayer games',
    monthPrice: 2,
  },
  {
    type: 'customizableProfile',
    name: 'Customizable Profile',
    description: 'Custom theme on your profile',
    monthPrice: 2,
  },
]

export const ThirdStepComponent = forwardRef<IStepRef>((_props, ref) => {
  const { planInfo, addonsInfo, setAddonsInfo } = useForm()

  function handleToggleAddon(addon: IAddon) {
    const addonIndex = addonsInfo.findIndex((item) => item.type === addon.type)

    if (addonIndex === -1) {
      setAddonsInfo((prevState) => prevState.concat(addon))
    } else {
      setAddonsInfo((prevState) =>
        prevState.filter((item) => item.type !== addon.type),
      )
    }
  }

  function handleCheckAddon(addonType: addonType) {
    return addonsInfo.some((item) => item.type === addonType)
  }

  useImperativeHandle(
    ref,
    () => ({
      handleSubmit: () => {},
    }),
    [],
  )

  return (
    <div className="flex flex-col gap-4">
      {addons.map((addon) => (
        <button
          key={addon.type}
          type="button"
          data-active={handleCheckAddon(addon.type)}
          onClick={() => handleToggleAddon(addon)}
          className="group flex items-center justify-between rounded-md border border-light-gray px-6 py-4 outline-none transition-all duration-300 hover:border-purplish-blue focus:border-purplish-blue data-[active=true]:border-purplish-blue data-[active=true]:bg-magnolia max-md:px-4 max-md:py-3"
        >
          <div className="flex items-center gap-6 max-md:gap-4">
            <div className="flex h-5 w-5 items-center justify-center rounded border border-light-gray group-data-[active=true]:border-purplish-blue group-data-[active=true]:bg-purplish-blue">
              {handleCheckAddon(addon.type) && <IconCheck />}
            </div>
            <div className="flex flex-col items-start">
              <strong className="font-medium text-marine-blue max-md:text-sm">
                {addon.name}
              </strong>
              <span className="text-sm text-cool-gray max-md:text-xs">
                {addon.description}
              </span>
            </div>
          </div>
          <span className="text-sm text-purplish-blue max-md:text-xs">
            {planInfo.selectedBilling === 'monthly'
              ? `+$${addon.monthPrice}/mo`
              : `+$${addon.monthPrice * 10}/yr`}
          </span>
        </button>
      ))}
    </div>
  )
})

ThirdStepComponent.displayName = 'ThirdStepComponent'

export const ThirdStep = memo(ThirdStepComponent)
