'use client'

import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const userSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  age: z.coerce.number().min(0, 'Age must be positive'),
})

// Use the schema *input* type so useForm and zodResolver agree
type UserFormInput = z.input<typeof userSchema>
type UserParsed = z.infer<typeof userSchema>

export default function UserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormInput>({
    defaultValues: {
      name: '',
      age: '', // raw input (coercion will handle conversion)
    },
    resolver: zodResolver(userSchema),
  })

  // accept the raw input type, then parse/coerce to the final shape
  const onSubmit: SubmitHandler<UserFormInput> = (data) => {
    const parsed: UserParsed = userSchema.parse(data) // will coerce age -> number
    console.log('✅ Form submitted:', parsed)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-3">
      <input
        {...register('name')}
        placeholder="Name"
        className="border rounded p-2 w-full"
      />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}

      <input
        type="number"
        {...register('age', { valueAsNumber: true })}
        placeholder="Age"
        className="border rounded p-2 w-full"
      />
      {errors.age && <p className="text-red-500">{errors.age.message}</p>}

      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
        Submit
      </button>
    </form>
  )
}