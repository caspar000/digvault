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

export const SignUpPage = () => {
  const { countries } = useCountries()

  const countryOptions = countries
    .filter(
      (country: country) =>
        country.name === 'Germany' || country.name === 'Georgia'
    )
    .map((country: country) => ({
      icon: country.flags.svg,
      name: country.countryCallingCode,
      value: country.countryCallingCode
    }))

  // const [signUpStep, setSignUpStep] = useState('personal_information')
  const [signUpStep, setSignUpStep] = useState('security_and_password')

  return (
    <div className="h-full min-h-[100vh] w-full max-w-[100vw]">
      {/* Field Input Section */}
      <header className="flex justify-center border-b border-[#EBEBF0] p-4 pl-6">
        <a href={AppRoutePath.HOME()}>
          <img src="/main_logo.svg" />
        </a>
      </header>
      {signUpStep === 'personal_information' && (
        <section className="py-[48px]">
          <div className="mx-auto w-full max-w-[520px] px-6">
            <Typography className="text-[32px] font-semibold leading-[48px] text-[#0a0b0d] max-sm:text-[24px]">
              Personal Information
            </Typography>
            <Typography className="text-[16px] font-normal leading-6 text-[#7F8992] max-sm:text-[14px]">
              Please, as a first step provide personal information below
            </Typography>
            <form className="mt-10 flex flex-col gap-4" action="/api/test">
              <div className="flex items-center gap-4">
                <InputText
                  name="first_name"
                  label="First name"
                  placeholder="Enter your name"
                  className="w-full"
                />
                <InputText
                  name="last_name"
                  label="Last name"
                  placeholder="Enter your last name"
                  className="w-full"
                />
              </div>
              <InputText
                name="email"
                label="Email"
                placeholder="Enter your email"
                className="w-full"
              />
              <div className="flex items-center gap-4">
                <InputSelect
                  name="countryCode"
                  label="Country"
                  options={countryOptions}
                  className="border-[#EBEBF0]"
                />
                <InputText
                  name="phone"
                  label="Phone"
                  placeholder="000 000 000"
                  className="w-full"
                />
              </div>
              <div className="mt-8 flex items-center justify-between">
                <Button type="secondary" submit>
                  Cancel
                </Button>
                <Button type="primary" submit>
                  Continue
                </Button>
              </div>
            </form>
          </div>
        </section>
      )}
      {signUpStep === 'security_and_password' && (
        <section className="py-[48px]">
          <div className="mx-auto w-full max-w-[520px] px-6">
            <Typography className="text-[32px] font-semibold leading-[48px] text-[#0a0b0d] max-sm:text-[24px]">
              Security and Password
            </Typography>
            <Typography className="text-[16px] font-normal leading-6 text-[#7F8992] max-sm:text-[14px]">
              Please set the secured password
            </Typography>
            <form className="mt-10 flex flex-col gap-4" action="/api/test">
              <InputText
                type="password"
                name="password"
                label="Password"
                placeholder="Enter your password"
                className="w-full"
              />
              <InputText
                type="password"
                name="password_repeat"
                label="Repeat Password"
                placeholder="Enter your password"
                className="w-full"
              />
              <div className="mt-8 flex items-center justify-between">
                <Button type="secondary" submit>
                  Cancel
                </Button>
                <Button type="primary" submit>
                  Continue
                </Button>
              </div>
            </form>
          </div>
        </section>
      )}
    </div>
  )
}
