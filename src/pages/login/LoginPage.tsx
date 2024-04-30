import { Typography } from '@material-tailwind/react'
import { useState } from 'react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useCountries } from 'use-react-countries'

import { AppRoutePath } from '@/app/appRoutePath'
import { Button } from '@/atoms/Button/Button'
import { InputSelect } from '@/atoms/InputSelect/InputSelect'
import { InputText } from '@/atoms/InputText/InputText'
import { country } from '@/types/CountryType'

export const LoginPage = () => {
  return (
    <div className="h-full min-h-[100vh] w-full max-w-[100vw]">
      {/* Field Input Section */}
      <header className="flex justify-center border-b border-[#EBEBF0] p-4 pl-6">
        <a href={AppRoutePath.HOME()}>
          <img src="/main_logo.svg" />
        </a>
      </header>
      <section className="py-[48px]">
        <div className="mx-auto w-full max-w-[520px] px-6">
          <Typography className="text-[32px] font-semibold leading-[48px] text-[#0a0b0d] max-sm:text-[24px]">
            Login
          </Typography>
          <Typography className="text-[16px] font-normal leading-6 text-[#7F8992] max-sm:text-[14px]">
            Enter your email and password to continue
          </Typography>
          <form className="mt-10 flex flex-col gap-4" action="/api/test">
            <InputText
              type="email"
              name="email"
              label="Email"
              placeholder="Enter your email"
              className="w-full"
            />
            <InputText
              type="password"
              name="password"
              label="Password"
              placeholder="Enter your password"
              className="w-full"
            />
            <div className="mt-8 flex items-center justify-end">
              <Button type="primary" submit>
                Log in
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
