'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

// ✅ Schema
const userSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  age: z.coerce.number().min(0, 'Age must be positive'),
})

// ✅ Type from schema
type UserFormData = z.infer<typeof userSchema>

export default function UserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: '',
      age: 0,
    },
  })

  const onSubmit = (data: UserFormData) => {
    console.log('✅ Form submitted:', data)
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
        Save
      </button>
    </form>
  )
}
