import cn from 'classnames'
import { useLocation, useNavigate } from 'react-router-dom'

import { AppRoutePath } from '@/app/appRoutePath'
import { IconChevron } from '@/assets/Icons'
import { Button } from '@/atoms/Button/Button'

interface IHeader {
  className?: string
}

// TODO: Add header dropdown menu
export const Header = ({ className }: IHeader) => {
  const navigate = useNavigate()
  const location = useLocation()

  // const handleOnSignUpClick = () => {
  //   navigate(AppRoutePath.())
  // }

  return (
    <header
      className={cn(
        'flex items-center justify-between border-b border-[#F0F0F0] p-3 pl-6',
        className
      )}
    >
      <a href="/">
        <img src="/main_logo.svg" alt="DigVault" />
      </a>
      <div className="flex items-center gap-4 max-sm:hidden">
        <a
          href={AppRoutePath.CLOUD()}
          className={cn(
            'rounded-[40px] px-4 py-2 text-sm font-semibold leading-6 text-[#909499]',
            location.pathname === AppRoutePath.CLOUD() &&
              'rounded-[40px] bg-[#F4F8FD] !text-[#000]'
          )}
        >
          Cloud Mining
        </a>
        <a
          href="#"
          className="rounded-[40px] px-4 py-2 text-sm font-semibold leading-6 text-[#909499]"
        >
          Miner Rental
        </a>
        <a
          href="#"
          className="rounded-[40px] px-4 py-2 text-sm font-semibold leading-6 text-[#909499]"
        >
          Bitcoin Miners
        </a>
        <a
          href="#"
          className="flex items-center gap-1 text-sm font-semibold leading-6 text-[#909499]"
        >
          Company <IconChevron size={16} />
        </a>
      </div>
      <div className="flex items-center gap-2">
        <Button type="secondary">Log In</Button>
        <Button type="primary">Sign Up</Button>
      </div>
    </header>
  )
}
