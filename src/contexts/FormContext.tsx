import { createContext, FormEvent, useRef, useState } from 'react'
import { IAddon, IPersonalInfo, IPlanInfo, IStep, IStepRef } from '../types'
import { IconArcade } from '../assets/icons/IconArcade'
import { FirstStep } from '../pages/Form/steps/FirstStep'
import { SecondStep } from '../pages/Form/steps/SecondStep'
import { ThirdStep } from '../pages/Form/steps/ThirdStep'
import { FourthStep } from '../pages/Form/steps/FourthStep'

interface FormProviderProps {
  children: React.ReactNode
}

export interface FormContextValue {
  personalInfo: IPersonalInfo
  planInfo: IPlanInfo
  addonsInfo: IAddon[]
  steps: IStep[]
  activeStep: number
  concluded: boolean
  setPersonalInfo: React.Dispatch<React.SetStateAction<IPersonalInfo>>
  setPlanInfo: React.Dispatch<React.SetStateAction<IPlanInfo>>
  setAddonsInfo: React.Dispatch<React.SetStateAction<IAddon[]>>
  handleDecreaseStep: () => void
  handleSubmit: (e: FormEvent) => void
}

const DEFAULT_VALUE: FormContextValue = {
  personalInfo: {
    name: '',
    emailAddress: '',
    phoneNumber: '',
  },
  planInfo: {
    selectedPlan: {
      type: 'arcade',
      name: 'Arcade',
      monthPrice: 9,
      icon: <IconArcade />,
    },
    selectedBilling: 'monthly',
  },
  addonsInfo: [
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
  ],
  steps: [],
  activeStep: 0,
  concluded: false,
  setPersonalInfo: () => {},
  setPlanInfo: () => {},
  setAddonsInfo: () => {},
  handleDecreaseStep: () => {},
  handleSubmit: () => {},
}

export const FormContext = createContext(DEFAULT_VALUE)

export function FormProvider({ children }: FormProviderProps) {
  const [personalInfo, setPersonalInfo] = useState<IPersonalInfo>(
    DEFAULT_VALUE.personalInfo,
  )
  const [planInfo, setPlanInfo] = useState<IPlanInfo>(DEFAULT_VALUE.planInfo)
  const [addonsInfo, setAddonsInfo] = useState<IAddon[]>(
    DEFAULT_VALUE.addonsInfo,
  )
  const [activeStep, setActiveStep] = useState(0)
  const [concluded, setConcluded] = useState(false)
  const firstStepRef = useRef<IStepRef>(null)
  const secondStepRef = useRef<IStepRef>(null)
  const thirdStepRef = useRef<IStepRef>(null)

  const steps: IStep[] = [
    {
      label: 'Your info',
      title: 'Personal info',
      subtitle: 'Please provide your name, email address, and phone number.',
      component: <FirstStep ref={firstStepRef} />,
    },
    {
      label: 'Select plan',
      title: 'Select your plan',
      subtitle: 'You have the option of monthly or yearly billing.',
      component: <SecondStep ref={secondStepRef} />,
    },
    {
      label: 'Add-ons',
      title: 'Pick add-ons',
      subtitle: 'Add-ons help enhance your gaming experience.',
      component: <ThirdStep ref={thirdStepRef} />,
    },
    {
      label: 'Summary',
      title: 'Finishing up',
      subtitle: 'Double-check everything looks OK before confirming.',
      component: <FourthStep />,
    },
  ]

  function handleDecreaseStep() {
    setActiveStep((prevState) => (prevState > 0 ? prevState - 1 : 0))
  }

  function handleSubmit(e: FormEvent) {
    try {
      e.preventDefault()

      if (firstStepRef.current) {
        firstStepRef.current.handleSubmit()
      }

      if (secondStepRef.current) {
        secondStepRef.current.handleSubmit()
      }

      if (thirdStepRef.current) {
        thirdStepRef.current.handleSubmit()
      }

      if (activeStep < steps.length - 1) {
        setActiveStep((prevStep) => prevStep + 1)
      } else {
        setConcluded(true)
      }
    } catch {}
  }

  return (
    <FormContext.Provider
      value={{
        personalInfo,
        planInfo,
        addonsInfo,
        steps,
        activeStep,
        concluded,
        setPersonalInfo,
        setPlanInfo,
        setAddonsInfo,
        handleDecreaseStep,
        handleSubmit,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}
