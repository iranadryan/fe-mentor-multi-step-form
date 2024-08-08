import {
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
  useState,
} from 'react'
import { Input } from '../../../components/Input'
import { formErrorsType, IStepRef } from '../../../types'
import { useForm } from '../../../hooks/useForm'
import { handleChange } from '../../../utils/handleChange'
import { InputMask } from '../../../components/InputMask'
import { firstStepSchema } from '../schemas/firstStepSchema'
import { formatZodIssues } from '../../../utils/formatZodIssue'

export const FirstStepComponent = forwardRef<IStepRef>((_props, ref) => {
  const [formErrors, setFormErrors] = useState<formErrorsType>({})
  const { personalInfo, setPersonalInfo } = useForm()

  const handleSubmit = useCallback(() => {
    setFormErrors({})
    const response = firstStepSchema.safeParse(personalInfo)

    if (!response.success) {
      setFormErrors(formatZodIssues(response.error.issues))
      throw new Error('Validation failed')
    }
  }, [personalInfo])

  useImperativeHandle(
    ref,
    () => ({
      handleSubmit,
    }),
    [handleSubmit],
  )

  return (
    <div className="flex flex-col gap-6">
      <Input
        label="Name"
        name="name"
        placeholder="e.g. Stephen King"
        autoFocus
        value={personalInfo.name}
        onChange={(e) => handleChange(setPersonalInfo, 'name', e.target.value)}
        error={formErrors.name}
      />
      <Input
        type="email"
        label="Email Address"
        name="emailAddress"
        placeholder="e.g. stephenking@lorem.com"
        value={personalInfo.emailAddress}
        onChange={(e) =>
          handleChange(setPersonalInfo, 'emailAddress', e.target.value)
        }
        error={formErrors.emailAddress}
      />
      <InputMask
        mask={'+1 000 000 000'}
        label="Phone Number"
        name="phoneNumber"
        placeholder="e.g. +1 234 567 890"
        value={personalInfo.phoneNumber}
        onAccept={(value) =>
          handleChange(setPersonalInfo, 'phoneNumber', value)
        }
        inputMode="tel"
        error={formErrors.phoneNumber}
      />
    </div>
  )
})

FirstStepComponent.displayName = 'FirstStepComponent'

export const FirstStep = memo(FirstStepComponent)
