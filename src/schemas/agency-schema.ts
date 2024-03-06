import { z } from 'zod';

export const AgencySchema = z.object({
  name: z.string().min(2, { message: 'Name is too short' }),
  company: z.string().min(1),
  companyEmail: z.string().email(),
  companyPhone: z.string(),
  whiteLabel: z.boolean(),
  address: z.string().min(1),
  city: z.string().min(1),
  state: z.string().min(1),
  zipCode: z.string().min(1),
  country: z.string().min(1),
  agencyLogo: z.string().min(1),
});
