import { ButtonHTMLAttributes, ReactElement } from 'react'
import { IconBaseProps } from 'react-icons/lib'
import { ButtonContainer } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
  icon: ReactElement<IconBaseProps>
  selected?: boolean
}

export default function Button({ children, icon, selected }: ButtonProps) {
  return (
    <ButtonContainer selected={selected}>
      {icon}
      {children}
    </ButtonContainer>
  )
}
