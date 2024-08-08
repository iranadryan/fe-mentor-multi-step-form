export interface IStep {
  label: string
  title: string
  subtitle: string
  component: React.ReactNode
}

export interface IStepRef {
  handleSubmit: () => void
}

export interface IPersonalInfo {
  name: string
  emailAddress: string
  phoneNumber: string
}

export type planType = 'arcade' | 'advanced' | 'pro'

export type billingType = 'monthly' | 'yearly'

export interface IPlan {
  type: planType
  name: string
  monthPrice: number
  icon: React.ReactNode
}

export interface IPlanInfo {
  selectedPlan: IPlan
  selectedBilling: billingType
}

export type addonType =
  | 'onlineService'
  | 'largerStorage'
  | 'customizableProfile'

export interface IAddon {
  type: addonType
  name: string
  description: string
  monthPrice: number
}

export type formErrorsType = { [key: string]: string }
