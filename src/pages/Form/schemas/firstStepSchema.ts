import { z } from 'zod'

export const firstStepSchema = z.object({
  name: z.string().min(1, {
    message: 'This field is required',
  }),
  emailAddress: z
    .string()
    .email({
      message: 'Insert a valid email',
    })
    .min(1, {
      message: 'This field is required',
    }),
  phoneNumber: z.string().min(14, {
    message: 'This field is required',
  }),
})
