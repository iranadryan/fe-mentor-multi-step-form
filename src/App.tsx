import { FormProvider } from './contexts/FormContext'
import { Form } from './pages/Form'

export function App() {
  return (
    <FormProvider>
      <Form />
    </FormProvider>
  )
}
