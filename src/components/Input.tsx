import { InputProps } from '@/types'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['700'],
  subsets: ['latin'],
})

export function Input({ label, className, ...rest }: InputProps) {
  return (
    <fieldset className="flex flex-col gap-2 w-full">
      <label className={`font-bold ${roboto.className}`} htmlFor={rest.id}>
        {label}
      </label>
      <input
        className={`rounded-md border-0 bg-gray-900 border-gray-300 text-gray-300 p-4 placeholder:text-gray-500 ${className}`}
        {...rest}
      />
    </fieldset>
  )
}
