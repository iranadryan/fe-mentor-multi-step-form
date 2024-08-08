import { useContext } from 'react'
import { FormContext } from '../contexts/FormContext'

export const useForm = () => useContext(FormContext)
