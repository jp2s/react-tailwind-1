import { cx } from '../../../utils/utils.ts'

export const Button = ({
  label,
  isNav = false,
  onClick,
  href,
}: {
  label: string
  isNav?: boolean
  onClick?: () => void
  href?: string
}) => {
  const commonProps = {
    className: cx([
      'border-4',
      'p-4',
      'border-black',
      'bg-rose-100',
      'text-black',
      'text-xl',
      'transition-transform',
      'hover:scale-105',
      'transition duration-300',
      'hover:cursor-pointer',
    ]),
  }

  return isNav ? (
    <a href={`#${href}`} {...commonProps}>
      {label}
    </a>
  ) : (
    <button onClick={onClick} {...commonProps}>
      {label}
    </button>
  )
}
