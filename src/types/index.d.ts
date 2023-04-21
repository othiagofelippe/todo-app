import { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  label: string
}
