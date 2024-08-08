import { ZodIssue } from 'zod'
import { formErrorsType } from '../types'

export function formatZodIssues(issues: ZodIssue[]) {
  const formattedIssues: formErrorsType = {}

  issues.forEach((issue) => {
    formattedIssues[issue.path.join('.')] = issue.message
  })

  return formattedIssues
}
