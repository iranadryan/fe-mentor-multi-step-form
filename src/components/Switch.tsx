interface SwitchProps {
  checked: boolean
  onChange: () => void
}

export function Switch({ checked, onChange }: SwitchProps) {
  return (
    <label className="inline-flex cursor-pointer items-center">
      <input
        type="checkbox"
        value=""
        className="peer sr-only"
        checked={checked}
        onChange={onChange}
      />
      <div className="peer relative h-5 w-[38px] rounded-full bg-marine-blue after:absolute after:start-[4px] after:top-[4px] after:h-3 after:w-3 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-marine-blue peer-checked:after:translate-x-[18px] peer-focus:outline-none"></div>
    </label>
  )
}
