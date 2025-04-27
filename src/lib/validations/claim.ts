
import * as z from "zod"

export const claimFormSchema = z.object({
  fullName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  policyNumber: z.string().min(5, {
    message: "Policy number is required and must be at least 5 characters.",
  }),
  incidentDate: z.string().min(1, {
    message: "Please select a date.",
  }),
  incidentType: z.string().min(1, {
    message: "Please select an incident type.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
})

export type ClaimFormValues = z.infer<typeof claimFormSchema>
