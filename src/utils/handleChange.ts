export function handleChange<T, K extends keyof T>(
  setData: React.Dispatch<React.SetStateAction<T>>,
  name: K,
  value: T[K],
) {
  setData((prevState) => ({ ...prevState, [name]: value }))
}
