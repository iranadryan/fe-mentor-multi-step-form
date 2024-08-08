import { Sidebar } from '../../components/Sidebar'
import { Step } from './components/Step'
import { useForm } from '../../hooks/useForm'
import { ConcludedScreen } from './components/ConcludedScreen'
import { Footer } from '../../components/Footer'

export function Form() {
  const { steps, activeStep, concluded, handleSubmit } = useForm()

  return (
    <div className="flex h-full max-h-xl w-full max-w-4xl rounded-2xl bg-white shadow-2xl shadow-marine-blue/25 max-md:max-h-none max-md:flex-col max-md:rounded-none max-md:bg-magnolia">
      <Sidebar steps={steps} activeStep={activeStep} />

      <main className="flex flex-1 flex-col bg-white px-25 pb-8 pt-14 max-md:mx-4 max-md:-mt-16 max-md:flex-initial max-md:rounded-lg max-md:px-6 max-md:pt-7 max-md:shadow-2xl max-md:shadow-marine-blue/15">
        {concluded ? (
          <ConcludedScreen />
        ) : (
          <>
            <h1 className="text-4xl font-bold text-marine-blue max-md:text-2xl">
              {steps[activeStep].title}
            </h1>
            <p className="mt-1 text-cool-gray max-md:mt-2">
              {steps[activeStep].subtitle}
            </p>

            <form
              onSubmit={handleSubmit}
              noValidate
              className="mt-9 flex flex-1 flex-col max-md:mt-5"
            >
              <Step steps={steps} activeStep={activeStep} />

              <Footer className="max-md:hidden" />
            </form>
          </>
        )}
      </main>
      <Footer className="md:hidden" />
    </div>
  )
}
