import { IconThankYou } from '../../../assets/icons/IconThankYou'

export function ConcludedScreen() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center max-md:pb-12 max-md:pt-[52px]">
      <IconThankYou className="max-md:hidden" />
      <IconThankYou className="hidden max-md:block" size={56} />
      <h1 className="mt-[26px] text-center text-4xl font-bold text-marine-blue max-md:mt-5 max-md:text-2xl">
        Thank you!
      </h1>
      <p className="mt-[10px] text-center leading-[25px] text-cool-gray max-md:mt-2">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  )
}
