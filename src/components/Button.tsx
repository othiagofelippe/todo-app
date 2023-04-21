import { ButtonProps } from '@/types'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['700'],
  subsets: ['latin'],
})

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      className={`border-0 rounded-md h-[3.125rem] bg-green-500 text-white font-bold py-0 px-6 cursor-pointer disabled:opacity-5 disabled:cursor-not-allowed hover:bg-green-700 transition-all ${className} ${roboto.className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
