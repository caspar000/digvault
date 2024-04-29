import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography
} from '@material-tailwind/react'

import { IconCheckFill } from '@/assets/Icons'
import { Button } from '@/atoms/Button/Button'
import { Container } from '@/atoms/Container/Container'
import { FAQComponent } from '@/components/FAQList/FAQList'
import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { BenefitsAndCoreValuesMock } from '@/mocks/HomePageMocks'

// TODO: Cleanup Code

export const HomePage = () => {
  return (
    <>
      <Header />
      <section className="bg-[#0967E9]">
        {/* Hero */}
        <Container>
          <div className="grid grid-cols-2 gap-[80px] py-[80px]">
            <Typography className="text-[56px] font-semibold leading-[72px] text-[#fff]">
              Simplified Mining, Automated Earning.
            </Typography>
            <div>
              <Typography className="text-[16px] font-normal leading-6 text-[#fff]">
                DigVault constitutes a Bitcoin mining environment equipped with
                diverse tools facilitating the accrual of rewards from
                cryptocurrency assets. Start earning already today,
              </Typography>
              <div className="mt-8 flex items-center gap-2">
                <button className="rounded-[32px] bg-[#FFD915] px-4 py-2 text-sm font-semibold leading-6 text-[#1a212a] hover:bg-[#ffe044] active:bg-[#e5c313]">
                  Start Now
                </button>
                <button className="rounded-[32px] bg-[#3885EE] px-4 py-2 text-sm font-semibold leading-6 text-[#fff] hover:bg-[#5f9df1] active:bg-[#3277d6]">
                  How it Works?
                </button>
              </div>
            </div>
          </div>
          <img src="/home-page__banner.png" />
          <div className="py-[80px]">
            <Typography className="text-center text-[16px] font-normal leading-6 text-[#fff]/75">
              Teaming up with industry giants elevates our products and services
              to new heights.
            </Typography>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-16">
              <img src="/logos/binance.svg" alt="" />
              <img src="/logos/binance-pool.svg" alt="" />
              <img src="/logos/aws.svg" alt="" />
              <img src="/logos/canaan.svg" alt="" />
              <img src="/logos/kpmg.svg" alt="" />
              <img src="/logos/mercuryo.svg" alt="" />
              <img src="/logos/transak.svg" alt="" />
              <img src="/logos/via-btc.svg" alt="" />
            </div>
          </div>
        </Container>
        {/* Benefits and Core Values */}
        <Container className="py-[80px]">
          <h2 className="text-center text-[56px] font-semibold leading-[72px] text-[#fff]">
            Benefits and core values
          </h2>
          <p className="text-center text-[16px] font-normal leading-[24px] text-[#fff]">
            What makes us your most reliable partner
          </p>
          <div className="my-[64px] grid grid-cols-3 gap-[40px] max-sm:grid-cols-1 max-sm:gap-8 max-sm:px-8">
            {BenefitsAndCoreValuesMock.map(({ icon, title, desc }, index) => (
              <div
                key={index}
                className="flex flex-col gap-6 max-sm:items-center max-sm:text-center"
              >
                <img src={icon} className="h-[48px] w-[48px]" />
                <div>
                  <p className="font-medium leading-6 text-[#fff]">{title}</p>
                  <p className="mt-2 text-sm leading-[20px] text-[#fff]/75">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button className="rounded-[32px] bg-[#3885EE] px-4 py-2 text-sm font-semibold leading-6 text-[#fff] hover:bg-[#5f9df1] active:bg-[#3277d6]">
              Start Mining
            </button>
          </div>
        </Container>
      </section>
      {/* Info Cards Section */}
      <Container className="grid grid-cols-2 gap-[80px] py-[80px]">
        <div className="my-auto">
          <Typography className="text-[24px] font-semibold leading-[32px] text-[#000]">
            Mining Farm
          </Typography>
          <Typography className="mt-4 text-[16px] font-normal leading-6 text-[#000]">
            DigVault offers a comprehensive turn-key solution for initiating
            Bitcoin mining operations, providing a fully managed platform that
            simplifies the process from start to finish.
          </Typography>
          <div className="my-[40px] flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <IconCheckFill className="text-[#01A76A]" />
              <Typography className="text-sm font-semibold leading-6 text-[#7f8992]">
                Full service from production to set-up
              </Typography>
            </div>
            <div className="flex items-center gap-2">
              <IconCheckFill className="text-[#01A76A]" />
              <Typography className="text-sm font-semibold leading-6 text-[#7f8992]">
                Daily mining rewards
              </Typography>
            </div>
            <div className="flex items-center gap-2">
              <IconCheckFill className="text-[#01A76A]" />
              <Typography className="text-sm font-semibold leading-6 text-[#7f8992]">
                24/7 service and maintenance
              </Typography>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button type="primary">Try Now</Button>
            <button className="rounded-[32px] bg-[#F3FAFF] px-4 py-2 text-sm font-semibold leading-6 text-[#0667EA] hover:bg-[#fafdff] active:bg-[#F3FAFF]">
              Learn more
            </button>
          </div>
        </div>
        <img src="/home-page__card01.png" />
      </Container>
      <Container className="grid grid-cols-2 gap-[80px] py-[80px]">
        <div className="order-2 my-auto">
          <Typography className="text-[24px] font-semibold leading-[32px] text-[#000]">
            Cloud Mining
          </Typography>
          <Typography className="mt-4 text-[16px] font-normal leading-6 text-[#000]">
            In the past, cryptocurrency mining required purchasing equipment and
            subsequently recovering its investment. However, DigVault enables
            immediate mining initiation with minimal upfront costs.
          </Typography>
          <div className="my-[40px] flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <IconCheckFill className="shrink-0 text-[#01A76A]" />
              <Typography className="text-sm font-semibold leading-6 text-[#7f8992]">
                Minimum start-up package
              </Typography>
            </div>
            <div className="flex items-center gap-2">
              <IconCheckFill className="shrink-0 text-[#01A76A]" />
              <Typography className="text-sm font-semibold leading-6 text-[#7f8992]">
                Mining is one of the easiest ways to get BTC
              </Typography>
            </div>
            <div className="flex items-center gap-2">
              <IconCheckFill className="shrink-0 text-[#01A76A]" />
              <Typography className="text-sm font-semibold leading-6 text-[#7f8992]">
                The best strategy is HODL (don&apos;t sell, build up mining
                capacity, optimize contracts and equipment, reinvest funds).
              </Typography>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button type="primary">Try Now</Button>
            <button className="rounded-[32px] bg-[#F3FAFF] px-4 py-2 text-sm font-semibold leading-6 text-[#0667EA] hover:bg-[#fafdff] active:bg-[#F3FAFF]">
              Learn more
            </button>
          </div>
        </div>
        <img src="/home-page__card02.png" className="order-1" />
      </Container>
      {/* Order Mining Farm Section */}
      <Container className="py-[80px]">
        <Typography className="text-center text-[56px] font-semibold leading-[72px] text-[#000]">
          Create and order your mining farm
        </Typography>
        <Typography className="mt-1 text-center text-[16px] font-normal leading-6 text-[#000]">
          Set the farm properties and estimate its efficiency!
        </Typography>
        <section className="mt-[80px] grid grid-cols-2 gap-2">
          <div className="flex items-center justify-center rounded-[16px] border border-[#F3F3F3] p-4">
            <img src="/home-page__miner01.png" />
          </div>
          <div className="flex flex-col justify-between rounded-[16px] bg-[#F4F8FD] p-4">
            {/* Inner Flex */}
            <div className="flex items-center gap-4">
              {/* Dropdown 1 */}
              <div className="flex w-full flex-col gap-2">
                <Typography className="ml-4 text-sm font-medium leading-4">
                  Device
                </Typography>
                <Menu>
                  <MenuHandler>
                    <Button className="flex items-center justify-between rounded-[12px] border border-[#70809433] bg-[#fff] px-4 py-[10px] text-base font-medium leading-6 text-[#000] shadow-[0_1px_2px_0_rgba(112,128,148,0.10)]">
                      Bitman Antminer S19k Pro 110TH/s
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M7.99984 8.78092L11.2997 5.48111L12.2425 6.42392L7.99984 10.6666L3.7572 6.42392L4.70002 5.48111L7.99984 8.78092Z"
                          fill="#909499"
                        />
                      </svg>
                    </Button>
                  </MenuHandler>
                  <MenuList>
                    <MenuItem>Menu Item 1</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                    <MenuItem>Menu Item 3</MenuItem>
                  </MenuList>
                </Menu>
              </div>
              {/* Dropdown 2 */}
              <div className="flex w-full max-w-[120px] flex-col gap-2">
                <Typography className="ml-4 text-sm font-medium leading-4">
                  Quantity
                </Typography>
                <Menu>
                  <MenuHandler>
                    <Button className="flex items-center justify-between rounded-[12px] border border-[#70809433] bg-[#fff] px-4 py-[10px] text-base font-medium leading-6 text-[#000] shadow-[0_1px_2px_0_rgba(112,128,148,0.10)]">
                      1
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M7.99984 8.78092L11.2997 5.48111L12.2425 6.42392L7.99984 10.6666L3.7572 6.42392L4.70002 5.48111L7.99984 8.78092Z"
                          fill="#909499"
                        />
                      </svg>
                    </Button>
                  </MenuHandler>
                  <MenuList>
                    <MenuItem>Menu Item 1</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                    <MenuItem>Menu Item 3</MenuItem>
                  </MenuList>
                </Menu>
              </div>
            </div>
            {/* BTC Forecast */}
            <div className="flex w-full flex-col gap-2">
              <Typography className="ml-4 text-sm font-medium leading-4">
                BTC Forecast
              </Typography>
              <div className="flex items-center gap-2 rounded-[12px] border border-[#70809433] bg-[#fff] px-4 py-[10px] text-base font-medium leading-6 text-[#000] shadow-[0_1px_2px_0_rgba(112,128,148,0.10)]">
                <span className="text-base font-medium leading-6 text-[#909499]">
                  $
                </span>
                90 0000
              </div>
            </div>
          </div>
          <article className="flex flex-col justify-between gap-2 rounded-[16px] bg-[#F4F8FD] p-4">
            {/* Item 1 */}
            <div className="flex items-center gap-2 rounded-[8px] bg-[#fff] p-[12px] shadow-[0_1px_2px_0_rgba(112,128,148,0.20)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M17.0851 4.93522L9.99998 0.833344L2.91492 4.93522L9.99998 9.03709L17.0851 4.93522ZM2.08331 6.37959V14.5833L9.16665 18.6843V10.4804L2.08331 6.37959ZM10.8333 18.6843L17.9166 14.5833V6.37959L10.8333 10.4804V18.6843Z"
                  fill="#0667EA"
                />
              </svg>
              <Typography className="text-sm font-medium leading-6 text-[#000]">
                Hosting at ECOS Mining Farm
              </Typography>
            </div>
            {/* Item 2 */}
            <div className="flex items-center justify-between rounded-[8px] bg-[#fff] p-[12px] shadow-[0_1px_2px_0_rgba(112,128,148,0.20)]">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M4.58333 1.66667C4.16307 1.66667 3.80857 1.97962 3.75643 2.39665L2.50643 12.3967C2.50215 12.4309 2.5 12.4654 2.5 12.5V17.5C2.5 17.9603 2.8731 18.3333 3.33333 18.3333H16.6667C17.1269 18.3333 17.5 17.9603 17.5 17.5V12.5C17.5 12.4654 17.4978 12.4309 17.4936 12.3967L16.2436 2.39665C16.1914 1.97962 15.8369 1.66667 15.4167 1.66667H4.58333ZM4.16667 13.3333H15.8333V16.6667H4.16667V13.3333ZM12.5 14.1667H14.1667V15.8333H12.5V14.1667ZM10.8333 14.1667H9.16667V15.8333H10.8333V14.1667Z"
                    fill="#0667EA"
                  />
                </svg>
                <Typography className="text-sm font-medium leading-6 text-[#000]">
                  Model
                </Typography>
              </div>
              <Typography className="text-sm font-semibold leading-6 text-[#000]">
                Bitmain Antminer S19k Pro 110TH/s
              </Typography>
            </div>
            {/* Item 3 */}
            <div className="flex items-center justify-between rounded-[8px] bg-[#fff] p-[12px] shadow-[0_1px_2px_0_rgba(112,128,148,0.20)]">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M3.33697 5.34738L0.634766 2.64518L1.81327 1.46667L4.51547 4.16887H17.2169C17.6772 4.16887 18.0502 4.54197 18.0502 5.00221C18.0502 5.08331 18.0384 5.16398 18.0152 5.24167L16.0152 11.9083C15.9094 12.2608 15.5849 12.5022 15.2169 12.5022H5.00363V14.1689H14.1703V15.8356H4.1703C3.71006 15.8356 3.33697 15.4624 3.33697 15.0023V5.34738ZM4.58697 19.1689C3.89661 19.1689 3.33697 18.6093 3.33697 17.9189C3.33697 17.2285 3.89661 16.6689 4.58697 16.6689C5.27733 16.6689 5.83697 17.2285 5.83697 17.9189C5.83697 18.6093 5.27733 19.1689 4.58697 19.1689ZM14.587 19.1689C13.8966 19.1689 13.337 18.6093 13.337 17.9189C13.337 17.2285 13.8966 16.6689 14.587 16.6689C15.2773 16.6689 15.837 17.2285 15.837 17.9189C15.837 18.6093 15.2773 19.1689 14.587 19.1689Z"
                    fill="#0667EA"
                  />
                </svg>
                <Typography className="text-sm font-medium leading-6 text-[#000]">
                  Quantity
                </Typography>
              </div>
              <Typography className="text-sm font-semibold leading-6 text-[#000]">
                1 Unit
              </Typography>
            </div>
            {/* Item 4 */}
            <div className="flex items-center justify-between rounded-[8px] bg-[#fff] p-[12px] shadow-[0_1px_2px_0_rgba(112,128,148,0.20)]">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10.8333 8.33333H16.6666L9.16665 19.1667V11.6667H3.33331L10.8333 0.833328V8.33333Z"
                    fill="#0667EA"
                  />
                </svg>
                <Typography className="text-sm font-medium leading-6 text-[#000]">
                  Total Mining Power
                </Typography>
              </div>
              <Typography className="text-sm font-semibold leading-6 text-[#000]">
                0.11 PH\s
              </Typography>
            </div>
          </article>
          <article className="flex flex-col justify-between gap-2 rounded-[16px] bg-[#F4F8FD] p-4">
            {/* Item 1 */}
            <div className="flex items-center justify-between rounded-[8px] bg-[#fff] p-[12px] shadow-[0_1px_2px_0_rgba(112,128,148,0.20)]">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M9.99996 18.3333C14.6023 18.3333 18.3333 14.6023 18.3333 9.99999C18.3333 5.39761 14.6023 1.66666 9.99996 1.66666C5.39758 1.66666 1.66663 5.39761 1.66663 9.99999C1.66663 14.6023 5.39758 18.3333 9.99996 18.3333ZM13.9212 8.80332C13.7769 9.68066 13.3171 10.1095 12.6958 10.2608C13.5225 10.7236 13.9205 11.426 13.4948 12.6581C12.9655 14.2033 11.7805 14.3435 10.211 14.0442L9.80696 15.675L8.89504 15.449L9.29913 13.8182C9.19596 13.7907 9.09196 13.7666 8.98804 13.7424C8.84471 13.7091 8.69663 13.6746 8.55013 13.6325L8.14605 15.2634L7.23579 15.0378L7.63984 13.4069L5.82658 12.9131L6.27728 11.7599C6.27728 11.7599 6.96168 11.9482 6.95107 11.9363C7.20492 11.9981 7.32903 11.8207 7.37988 11.6966L8.02693 9.08207L8.49788 7.22381C8.51821 7.02296 8.45529 6.76018 8.08438 6.66021C8.10963 6.64541 7.41668 6.49474 7.41668 6.49474L7.68671 5.40189L9.55554 5.86504L9.95129 4.26756L10.8928 4.5009L10.497 6.09837C10.7401 6.15125 10.9759 6.21551 11.2187 6.27723L11.6145 4.67975L12.5305 4.90677L12.1244 6.54613C13.2798 6.97005 14.112 7.59813 13.9212 8.80332ZM9.67179 9.12857C10.2193 9.29307 11.8425 9.78091 12.116 8.69474C12.3706 7.66223 10.964 7.3468 10.3105 7.20026C10.2335 7.18298 10.1669 7.16806 10.1147 7.15457L9.62613 9.11482L9.67179 9.12857ZM8.82638 12.3119L8.90571 12.3354C9.58021 12.5361 11.4941 13.1053 11.7537 12.0272C12.0211 10.989 10.3005 10.5847 9.53021 10.4037C9.44579 10.3838 9.37271 10.3667 9.31504 10.3517L8.82638 12.3119Z"
                    fill="#E9973D"
                  />
                </svg>
                <Typography className="text-sm font-medium leading-6 text-[#000]">
                  Yearly Mining Reward
                </Typography>
              </div>
              <Typography className="text-sm font-semibold leading-6 text-[#000]">
                0,06 BTC
              </Typography>
            </div>
            {/* Item 2 */}
            <div className="flex items-center justify-between rounded-[8px] bg-[#fff] p-[12px] shadow-[0_1px_2px_0_rgba(112,128,148,0.20)]">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10.0041 18.3356C5.40174 18.3356 1.67078 14.6047 1.67078 10.0023C1.67078 5.39992 5.40174 1.66896 10.0041 1.66896C14.6065 1.66896 18.3375 5.39992 18.3375 10.0023C18.3375 14.6047 14.6065 18.3356 10.0041 18.3356ZM7.08744 11.6689V13.3356H9.17079V15.0023H10.8375V13.3356H11.6708C12.8214 13.3356 13.7541 12.4029 13.7541 11.2523C13.7541 10.1017 12.8214 9.16892 11.6708 9.16892H8.33746C8.10733 9.16892 7.92078 8.98242 7.92078 8.75225C7.92078 8.52217 8.10733 8.33559 8.33746 8.33559H12.9208V6.66896H10.8375V5.00229H9.17079V6.66896H8.33746C7.18685 6.66896 6.25411 7.60169 6.25411 8.75225C6.25411 9.90292 7.18685 10.8356 8.33746 10.8356H11.6708C11.9009 10.8356 12.0875 11.0222 12.0875 11.2523C12.0875 11.4824 11.9009 11.6689 11.6708 11.6689H7.08744Z"
                    fill="#357A30"
                  />
                </svg>
                <Typography className="text-sm font-medium leading-6 text-[#000]">
                  Yearly Mining Reward
                </Typography>
              </div>
              <Typography className="text-sm font-semibold leading-6 text-[#000]">
                5,637 USD
              </Typography>
            </div>
            {/* Item 3 */}
            <div className="flex items-center justify-between rounded-[8px] bg-[#fff] p-[12px] shadow-[0_1px_2px_0_rgba(112,128,148,0.20)]">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M9.99996 18.3333C14.6023 18.3333 18.3333 14.6023 18.3333 10C18.3333 5.39763 14.6023 1.66667 9.99996 1.66667C5.39758 1.66667 1.66663 5.39763 1.66663 10C1.66663 14.6023 5.39758 18.3333 9.99996 18.3333ZM13.9212 8.80334C13.7769 9.68067 13.3171 10.1095 12.6958 10.2608C13.5225 10.7236 13.9205 11.426 13.4948 12.6581C12.9655 14.2033 11.7805 14.3435 10.211 14.0442L9.80696 15.675L8.89504 15.449L9.29913 13.8182C9.19596 13.7907 9.09196 13.7666 8.98804 13.7424C8.84471 13.7091 8.69663 13.6746 8.55013 13.6325L8.14605 15.2634L7.23579 15.0378L7.63984 13.4069L5.82658 12.9131L6.27728 11.7599C6.27728 11.7599 6.96168 11.9482 6.95107 11.9363C7.20492 11.9981 7.32903 11.8208 7.37988 11.6966L8.02693 9.08209L8.49788 7.22383C8.51821 7.02297 8.45529 6.7602 8.08438 6.66022C8.10963 6.64543 7.41668 6.49476 7.41668 6.49476L7.68671 5.4019L9.55554 5.86506L9.95129 4.26758L10.8928 4.50091L10.497 6.09839C10.7401 6.15126 10.9759 6.21552 11.2187 6.27725L11.6145 4.67976L12.5305 4.90679L12.1244 6.54615C13.2798 6.97006 14.112 7.59815 13.9212 8.80334ZM9.67179 9.12859C10.2193 9.29309 11.8425 9.78092 12.116 8.69475C12.3706 7.66225 10.964 7.34681 10.3105 7.20028C10.2335 7.183 10.1669 7.16807 10.1147 7.15459L9.62613 9.11484L9.67179 9.12859ZM8.82638 12.3119L8.90571 12.3354C9.58021 12.5361 11.4941 13.1053 11.7537 12.0273C12.0211 10.989 10.3005 10.5847 9.53021 10.4037C9.44579 10.3838 9.37271 10.3667 9.31504 10.3517L8.82638 12.3119Z"
                    fill="#E9973D"
                  />
                </svg>
                <Typography className="text-sm font-medium leading-6 text-[#000]">
                  Daily Mining Reward
                </Typography>
              </div>
              <Typography className="text-sm font-semibold leading-6 text-[#000]">
                0,0002 BTC
              </Typography>
            </div>
            {/* Item 4 */}
            <div className="flex items-center justify-between rounded-[8px] bg-[#fff] p-[12px] shadow-[0_1px_2px_0_rgba(112,128,148,0.20)]">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10.0041 18.3356C5.40174 18.3356 1.67078 14.6047 1.67078 10.0023C1.67078 5.39992 5.40174 1.66896 10.0041 1.66896C14.6065 1.66896 18.3375 5.39992 18.3375 10.0023C18.3375 14.6047 14.6065 18.3356 10.0041 18.3356ZM7.08744 11.6689V13.3356H9.17079V15.0023H10.8375V13.3356H11.6708C12.8214 13.3356 13.7541 12.4029 13.7541 11.2523C13.7541 10.1017 12.8214 9.16892 11.6708 9.16892H8.33746C8.10733 9.16892 7.92078 8.98242 7.92078 8.75225C7.92078 8.52217 8.10733 8.33559 8.33746 8.33559H12.9208V6.66896H10.8375V5.00229H9.17079V6.66896H8.33746C7.18685 6.66896 6.25411 7.60169 6.25411 8.75225C6.25411 9.90292 7.18685 10.8356 8.33746 10.8356H11.6708C11.9009 10.8356 12.0875 11.0222 12.0875 11.2523C12.0875 11.4824 11.9009 11.6689 11.6708 11.6689H7.08744Z"
                    fill="#357A30"
                  />
                </svg>
                <Typography className="text-sm font-medium leading-6 text-[#000]">
                  Daily Mining Reward
                </Typography>
              </div>
              <Typography className="text-sm font-semibold leading-6 text-[#000]">
                15,4 USD
              </Typography>
            </div>
          </article>
          <article className="flex items-center justify-between gap-2 rounded-[16px] bg-[#F4F8FD] p-4">
            <div className="flex flex-col gap-2">
              <Typography className="text-xs font-medium leading-4 text-[#909499]">
                Total Cost
              </Typography>
              <Typography className="text-[20px] font-semibold leading-6 text-[#000]">
                $2050
              </Typography>
            </div>
            <button className="flex w-full max-w-[160px] items-center justify-center rounded-[32px] bg-[#0667EA] px-4 py-2 text-sm font-semibold leading-6 text-[#fff] hover:bg-[#046EFA] active:bg-[#0667ea]">
              Buy Now
            </button>
          </article>
          <article className="flex items-center justify-between gap-2 rounded-[16px] bg-[#F4F8FD] p-4">
            <Typography className="text-sm font-semibold leading-6 text-[#909499]">
              Make a consultation request
            </Typography>
            <button className="text-sm font-semibold leading-6 text-[#0667ea]">
              Request a Call Back
            </button>
          </article>
        </section>
      </Container>
      {/* Choose Plans Section */}
      <section className="bg-[#F4F8FE] py-[80px]">
        <Container>
          <Typography className="text-center text-[56px] font-semibold leading-[72px] text-[#000]">
            Choose ASIC-based Mining Plans
          </Typography>
          <Typography className="mx-auto mt-1 max-w-[640px] text-center text-[16px] font-normal leading-6 text-[#000]">
            Lease hash rate directly from leading ASICs to optimize mining
            efficiency to the fullest. Simply select a plan and generate a
            contract with just a few clicks.
          </Typography>
          <div className="mt-[80px] grid grid-cols-3 gap-[20px]">
            {/* Card 01 */}
            <div className="rounded-[16px] bg-[#fff] p-4">
              <Typography className="ml-2 text-xs font-semibold leading-4 text-[#0667ea]">
                DigVault 01
              </Typography>
              <Typography className="ml-2 mt-2 text-[24px] font-medium leading-[32px] text-[#000]">
                106 TH
              </Typography>
              <div className="mt-6 flex flex-col gap-2 rounded-[8px] bg-[#F4F8FD] p-3">
                <Typography className="text-xs font-semibold leading-4 text-[#909499]">
                  ASIC-based mining plan
                </Typography>
                <Typography className="font-medium leading-6 text-[#000]">
                  S19a Pro 106 TH/s
                </Typography>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <div className="flex w-full flex-col gap-2 rounded-[8px] bg-[#F4F8FD] p-3">
                  <Typography className="text-xs font-semibold leading-4 text-[#909499]">
                    Price 1 TH/Day
                  </Typography>
                  <Typography className="font-medium leading-6 text-[#000]">
                    $0.013
                  </Typography>
                </div>
                <div className="flex w-full flex-col gap-2 rounded-[8px] bg-[#F4F8FD] p-3">
                  <Typography className="text-xs font-semibold leading-4 text-[#909499]">
                    Service
                  </Typography>
                  <Typography className="font-medium leading-6 text-[#000]">
                    $0.5
                  </Typography>
                </div>
              </div>
              <div className="mt-[20px] flex items-center justify-between">
                <button className="rounded-[32px] bg-[#F3FAFF] px-4 py-2 text-sm font-semibold leading-6 text-[#0667EA] hover:bg-[#fafdff] active:bg-[#F3FAFF]">
                  Select
                </button>
                <div className="flex items-center gap-2 rounded-[8px] bg-[#357A301A] px-2 py-1">
                  <Typography className="text-xs leading-4 text-[#000]">
                    Rating
                  </Typography>
                  <Typography className="text-xs font-semibold leading-4 text-[#000]">
                    97%
                  </Typography>
                </div>
              </div>
            </div>
            {/* Card 02 */}
            <div className="rounded-[16px] bg-[#fff] p-4">
              <Typography className="ml-2 text-xs font-semibold leading-4 text-[#0667ea]">
                DigVault 02
              </Typography>
              <Typography className="ml-2 mt-2 text-[24px] font-medium leading-[32px] text-[#000]">
                120 TH
              </Typography>
              <div className="mt-6 flex flex-col gap-2 rounded-[8px] bg-[#F4F8FD] p-3">
                <Typography className="text-xs font-semibold leading-4 text-[#909499]">
                  ASIC-based mining plan
                </Typography>
                <Typography className="font-medium leading-6 text-[#000]">
                  S19a Pro 120 TH/s
                </Typography>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <div className="flex w-full flex-col gap-2 rounded-[8px] bg-[#F4F8FD] p-3">
                  <Typography className="text-xs font-semibold leading-4 text-[#909499]">
                    Price 1 TH/Day
                  </Typography>
                  <Typography className="font-medium leading-6 text-[#000]">
                    $0.013
                  </Typography>
                </div>
                <div className="flex w-full flex-col gap-2 rounded-[8px] bg-[#F4F8FD] p-3">
                  <Typography className="text-xs font-semibold leading-4 text-[#909499]">
                    Service
                  </Typography>
                  <Typography className="font-medium leading-6 text-[#000]">
                    $0.5
                  </Typography>
                </div>
              </div>
              <div className="mt-[20px] flex items-center justify-between">
                <button className="rounded-[32px] bg-[#F3FAFF] px-4 py-2 text-sm font-semibold leading-6 text-[#0667EA] hover:bg-[#fafdff] active:bg-[#F3FAFF]">
                  Select
                </button>
                <div className="flex items-center gap-2 rounded-[8px] bg-[#357A301A] px-2 py-1">
                  <Typography className="text-xs leading-4 text-[#000]">
                    Rating
                  </Typography>
                  <Typography className="text-xs font-semibold leading-4 text-[#000]">
                    97%
                  </Typography>
                </div>
              </div>
            </div>
            {/* Card 03 */}
            <div className="rounded-[16px] bg-[#fff] p-4">
              <Typography className="ml-2 text-xs font-semibold leading-4 text-[#0667ea]">
                DigVault 03
              </Typography>
              <Typography className="ml-2 mt-2 text-[24px] font-medium leading-[32px] text-[#000]">
                188 TH
              </Typography>
              <div className="mt-6 flex flex-col gap-2 rounded-[8px] bg-[#F4F8FD] p-3">
                <Typography className="text-xs font-semibold leading-4 text-[#909499]">
                  ASIC-based mining plan
                </Typography>
                <Typography className="font-medium leading-6 text-[#000]">
                  S19a Pro 188 TH/s
                </Typography>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <div className="flex w-full flex-col gap-2 rounded-[8px] bg-[#F4F8FD] p-3">
                  <Typography className="text-xs font-semibold leading-4 text-[#909499]">
                    Price 1 TH/Day
                  </Typography>
                  <Typography className="font-medium leading-6 text-[#000]">
                    $0.013
                  </Typography>
                </div>
                <div className="flex w-full flex-col gap-2 rounded-[8px] bg-[#F4F8FD] p-3">
                  <Typography className="text-xs font-semibold leading-4 text-[#909499]">
                    Service
                  </Typography>
                  <Typography className="font-medium leading-6 text-[#000]">
                    $0.5
                  </Typography>
                </div>
              </div>
              <div className="mt-[20px] flex items-center justify-between">
                <button className="rounded-[32px] bg-[#F3FAFF] px-4 py-2 text-sm font-semibold leading-6 text-[#0667EA] hover:bg-[#fafdff] active:bg-[#F3FAFF]">
                  Select
                </button>
                <div className="flex items-center gap-2 rounded-[8px] bg-[#357A301A] px-2 py-1">
                  <Typography className="text-xs leading-4 text-[#000]">
                    Rating
                  </Typography>
                  <Typography className="text-xs font-semibold leading-4 text-[#000]">
                    97%
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex w-full items-center justify-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#0667EA]" />
            <div className="h-2 w-2 rounded-full bg-[#CCD0D5]" />
            <div className="h-2 w-2 rounded-full bg-[#CCD0D5]" />
            <div className="h-2 w-2 rounded-full bg-[#CCD0D5]" />
          </div>
        </Container>
      </section>
      {/* Why DigVault Section */}
      <section className="border-t border-[#DFE7F2] bg-[#F4F8FE] py-[80px]">
        <Container>
          <Typography className="text-center text-[56px] font-semibold leading-[72px] text-[#000]">
            Why DigVault?
          </Typography>
          <Typography className="mx-auto mt-1 max-w-[640px] text-center text-[16px] font-normal leading-6 text-[#000]">
            Our own power plant, armed guards, strong team, the best partners
            and government support form our unique infrastructure
          </Typography>
          <div className="mt-[80px] flex gap-10 rounded-[16px] bg-[#fff] p-10 shadow-[0_1px_2px_0_rgba(112,128,148,0.10)]">
            <img src="/home-page__flag01.png" />
            <div className="my-auto flex flex-col gap-4">
              <Typography className="text-[18px] leading-6 text-[#000]">
                DigVault data centre is located in the Free Economic Zone.
              </Typography>
              <Typography className="text-[16px] leading-6 text-[#000]">
                It was established with the support of the Canadian government
                to develop blockchain and crypto projects. It guarantees full
                legality and security of your assets.
              </Typography>
            </div>
          </div>
          <div className="mt-[24px] grid grid-cols-2 gap-[24px]">
            <div className="flex flex-col gap-[24px] rounded-[16px] bg-[#fff] p-10 shadow-[0_1px_2px_0_rgba(112,128,148,0.10)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="146"
                height="24"
                viewBox="0 0 146 24"
                fill="none"
              >
                <g clipPath="url(#clip0_1_6871)">
                  <path
                    d="M139.694 15.7907C139.685 14.8868 139.714 14.0517 139.658 13.2223C139.563 11.8008 138.694 10.8991 137.405 10.8101C136.1 10.7199 135.057 11.5514 134.783 12.9255C134.71 13.2955 134.673 13.6788 134.672 14.0563C134.662 16.388 134.672 18.7198 134.664 21.0515C134.659 22.6257 133.762 23.5118 132.185 23.5164C130.952 23.5201 129.719 23.5172 128.395 23.5172C128.395 23.2047 128.395 22.9514 128.395 22.6981C128.395 19.7953 128.4 16.8925 128.388 13.9898C128.386 13.5425 128.348 13.0832 128.241 12.6508C127.95 11.4797 127.077 10.8069 125.929 10.8071C124.781 10.8072 123.856 11.4789 123.552 12.5961C123.435 13.0259 123.385 13.4858 123.381 13.9325C123.364 16.2642 123.374 18.596 123.369 20.9277C123.366 22.6409 122.492 23.5138 120.784 23.517C119.577 23.5192 118.371 23.5174 117.094 23.5174C117.094 23.2131 117.094 22.9816 117.094 22.7501C117.094 17.8963 117.094 13.0424 117.095 8.18862C117.095 6.57668 118 5.65856 119.597 5.65223C120.829 5.64736 122.061 5.65126 123.371 5.65126C123.371 6.42886 123.371 7.14823 123.371 8.07129C124.862 6.27456 126.541 5.23329 128.75 5.26262C130.954 5.29188 132.721 6.11366 133.858 8.09741C134.323 7.67623 134.744 7.25835 135.202 6.88542C137.227 5.23739 139.544 4.90534 141.994 5.55508C144.286 6.16283 145.877 8.22836 145.923 10.6912C145.991 14.2827 145.958 17.8763 145.94 21.4689C145.935 22.4878 145.051 23.4567 144.075 23.4921C142.651 23.5439 141.224 23.5054 139.694 23.5054C139.694 20.9348 139.694 18.3985 139.694 15.7907Z"
                    fill="#475467"
                  />
                  <path
                    d="M5.8543 0.506116C8.16233 0.507484 10.3991 0.49394 12.6355 0.515575C14.0795 0.529542 15.4726 0.823978 16.7504 1.51859C18.5692 2.50737 19.5377 4.03223 19.5991 6.12623C19.6619 8.26862 18.8005 9.89582 16.9651 11.0036C16.722 11.1504 16.4685 11.2799 16.1367 11.4633C16.5216 11.6302 16.8545 11.7692 17.1829 11.918C19.1421 12.8056 20.4118 14.1921 20.5825 16.4446C20.7797 19.0448 19.8831 21.0575 17.5485 22.3268C16.0559 23.1383 14.427 23.479 12.7456 23.4935C9.2719 23.5234 5.79781 23.5085 2.32391 23.5025C1.06104 23.5003 0.0201403 22.5948 0.0156212 21.3613C-0.00973723 14.4403 0.00340386 7.51917 0.00340386 0.506116C1.9493 0.506116 3.8661 0.506116 5.8543 0.506116ZM8.63914 18.3825C9.89332 18.3435 11.1609 18.4039 12.3979 18.2376C13.6423 18.0703 14.2486 17.2982 14.25 16.257C14.2515 15.2316 13.6073 14.375 12.381 14.2957C10.3607 14.1651 8.32573 14.2603 6.26642 14.2603C6.26642 15.594 6.26642 16.9612 6.26642 18.3178C6.3429 18.3448 6.38738 18.3739 6.43207 18.3743C7.12019 18.3792 7.80834 18.3804 8.63914 18.3825ZM10.4726 9.65584C11.0736 9.53586 11.7111 9.50469 12.2677 9.2764C13.2587 8.86996 13.6233 7.69417 13.1197 6.74749C12.6897 5.93919 11.9073 5.69317 11.0792 5.66029C9.74876 5.60748 8.41531 5.63105 7.08314 5.62303C6.81 5.62138 6.53685 5.62279 6.29379 5.62279C6.29379 7.03338 6.29379 8.32856 6.29379 9.65761C7.67583 9.65761 9.00552 9.65761 10.4726 9.65584Z"
                    fill="#475467"
                  />
                  <path
                    d="M59.0352 0.591177C61.4367 1.34957 63.2864 2.75887 64.7799 4.81179C63.595 5.7032 62.4816 6.63077 61.2764 7.41792C60.3707 8.0095 59.4685 7.59569 58.6006 7.1079C57.8219 6.67018 57.0262 6.16693 56.1742 5.97281C53.4259 5.34667 50.9751 6.70518 49.9258 9.32984C49.1839 11.1856 49.219 13.0587 50.0162 14.8811C51.5382 18.3605 55.8677 19.2717 58.7972 16.7425C59.2787 16.3269 59.6911 15.8313 60.1423 15.3655C61.7564 16.5169 63.3173 17.6304 64.9311 18.7816C63.4342 20.8702 61.6418 22.4876 59.2285 23.2741C53.3646 25.185 47.0714 23.2592 44.2162 17.72C40.6786 10.857 44.059 1.41674 53.2616 0.136939C55.168 -0.128186 57.1097 -0.0246506 59.0352 0.591177Z"
                    fill="#475467"
                  />
                  <path
                    d="M104.261 23.9851C101.11 23.9034 98.4706 22.8095 96.5319 20.3608C92.3808 15.1177 95.0108 7.39027 101.5 5.65486C106.399 4.34475 111.328 6.35841 113.375 10.5059C116.003 15.8309 112.941 22.3066 107.142 23.6288C106.223 23.8385 105.263 23.8747 104.261 23.9851ZM107.304 17.3417C107.594 16.698 108 16.0805 108.151 15.4058C108.744 12.7664 106.448 10.1826 103.918 10.5728C102.182 10.8407 100.971 12.0599 100.693 13.8206C100.401 15.6718 101.231 17.4599 102.746 18.2466C104.254 19.0298 105.906 18.7269 107.304 17.3417Z"
                    fill="#475467"
                  />
                  <path
                    d="M30.4158 0.488666C34.2412 0.488664 37.9952 0.488664 41.7996 0.488664C41.7996 1.70654 41.8721 2.87049 41.7798 4.02125C41.6815 5.24796 40.7038 6.05389 39.4392 6.07207C37.946 6.09353 36.4523 6.07711 34.8847 6.07711C34.8847 6.39559 34.8847 6.65074 34.8847 6.90588C34.8847 11.5218 34.886 16.1377 34.884 20.7536C34.8831 22.6859 34.0425 23.5177 32.097 23.5204C30.9346 23.5219 29.7722 23.5206 28.5363 23.5206C28.5363 17.7101 28.5363 11.9438 28.5363 6.09216C26.1987 6.09216 23.9325 6.09216 21.6274 6.09216C21.6274 4.8718 21.5572 3.73087 21.6458 2.60241C21.7482 1.29964 22.6767 0.507165 23.9916 0.495149C26.109 0.475793 28.2268 0.489139 30.4158 0.488666Z"
                    fill="#475467"
                  />
                  <path
                    d="M76.7456 17.7173C75.0152 11.874 78.2397 6.42306 84.0757 5.45276C87.7513 4.84165 90.9677 5.75887 93.2581 8.94611C93.3125 9.02173 93.3546 9.10617 93.4702 9.30041C92.5083 9.97759 91.6033 10.7583 90.5717 11.2966C89.7079 11.7474 88.7436 11.6004 87.8412 11.1018C85.3195 9.70846 82.5389 11.2361 82.4066 14.1203C82.3696 14.9253 82.48 15.8063 82.7843 16.5447C83.7289 18.8368 86.4682 19.4086 88.4302 17.7959C88.7578 17.5266 89.0487 17.2126 89.4095 16.8688C90.788 17.8664 92.1635 18.8619 93.5704 19.88C91.3272 23.1995 88.1582 24.3564 84.3956 23.8933C80.6539 23.4328 78.0966 21.3233 76.7456 17.7173Z"
                    fill="#475467"
                  />
                  <path
                    d="M67.3538 18.7655C68.2614 17.1164 69.8016 16.3905 71.4904 16.7816C73.066 17.1466 74.2276 18.5446 74.2857 20.146C74.3484 21.8679 73.3358 23.3488 71.7167 23.8236C70.2625 24.25 68.966 23.9031 67.9549 22.7832C66.9051 21.6205 66.6917 20.2698 67.3538 18.7655Z"
                    fill="#475467"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_6871">
                    <rect width="146" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <Typography className="mx-auto mt-1 max-w-[640px] text-[16px] font-normal leading-6 text-[#475467]">
                We work with the leading multi currency mining pool BTC.com This
                guarantees our clients reliable mining data delivery.
              </Typography>
            </div>
            <div className="flex flex-col gap-[24px] rounded-[16px] bg-[#0667EA] p-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="177"
                height="24"
                viewBox="0 0 177 24"
                fill="none"
              >
                <path
                  d="M25.9159 14.6458C25.8599 13.4979 25.496 12.406 24.46 11.7621C24.1801 11.5941 23.8161 11.4541 23.8161 11.4541C23.8161 11.4541 23.9561 11.3421 24.0401 11.2861C24.1241 11.2021 24.572 10.7541 24.908 10.3622C24.908 10.3622 25.58 9.52223 25.58 8.17833C25.58 6.83443 25.58 6.47046 25.58 5.21055C25.58 3.95064 25.132 3.36269 24.488 2.63474C23.3121 1.31884 21.6883 0.898872 20.0644 0.898872C15.8367 0.786881 1.80972 0.814878 1.80972 0.814878C1.27776 0.814878 0.857788 1.23485 0.857788 1.76681V22.2613C0.857788 22.7932 1.27776 23.2132 1.80972 23.2132C1.80972 23.2132 14.9128 23.2132 16.9286 23.2132C18.9445 23.2132 20.5683 23.1012 22.3322 22.6532C24.6 22.0653 25.7479 20.5534 25.9159 18.3976C26.0279 17.1377 25.9719 15.9058 25.9159 14.6458ZM5.61744 5.32254C5.61744 5.04256 5.84142 4.81858 6.1214 4.81858H19.9804C20.5403 4.81858 20.9603 5.26655 20.9603 5.79851V8.65429C20.9603 9.21425 20.5123 9.63422 19.9804 9.63422H6.1214C5.84142 9.63422 5.61744 9.41024 5.61744 9.13026V5.32254ZM21.1843 18.0896C21.1843 18.6495 20.7363 19.0695 20.2044 19.0695H6.1214C5.84142 19.0695 5.61744 18.8455 5.61744 18.5656V14.0019C5.61744 13.7219 5.84142 13.4979 6.1214 13.4979H20.2044C20.7363 13.4979 21.1843 13.9459 21.1843 14.4779V18.0896Z"
                  fill="white"
                />
                <path
                  d="M38.1448 0.786865C37.8929 0.786865 37.6969 0.982851 37.6969 1.23483V4.3706C37.6969 4.62258 37.8929 4.81856 38.1448 4.81856C38.1448 4.81856 47.4961 4.81856 48.2241 4.81856C48.812 4.81856 48.868 4.90256 48.896 5.51851C48.896 5.7145 48.896 22.6812 48.896 22.6812C48.896 22.9332 49.092 23.1292 49.344 23.1292H53.1237C53.3757 23.1292 53.5717 22.9332 53.5717 22.6812C53.5717 22.6812 53.5717 10.1662 53.5717 5.7145C53.5717 4.87456 53.5997 4.84656 54.4116 4.84656C55.6155 4.84656 64.1549 4.87456 64.1549 4.87456C64.4069 4.87456 64.6028 4.67857 64.6028 4.42659V1.26283C64.6028 1.01085 64.4069 0.814863 64.1549 0.814863L38.1448 0.786865Z"
                  fill="white"
                />
                <path
                  d="M34.6754 1.3189C34.6754 1.03892 34.4514 0.814941 34.1714 0.814941H30.4477C30.1677 0.814941 29.9437 1.03892 29.9437 1.3189V22.6253C29.9437 22.9053 30.1677 23.1293 30.4477 23.1293H34.1714C34.4514 23.1293 34.6754 22.9053 34.6754 22.6253V1.3189Z"
                  fill="white"
                />
                <path
                  d="M138.217 0.814941C137.769 0.814941 137.433 1.17891 137.433 1.59888V22.3173C137.433 22.7653 137.797 23.1013 138.217 23.1013H141.353C141.8 23.1013 142.136 22.7373 142.136 22.3173V1.59888C142.136 1.15092 141.772 0.814941 141.353 0.814941H138.217Z"
                  fill="white"
                />
                <path
                  d="M100.392 0.813843H96.6687C96.5288 0.813843 96.4168 0.813843 96.3048 0.98183C96.1648 1.14982 84.1537 17.5846 84.1537 17.5846C84.1537 17.5846 72.1146 1.14982 72.0026 0.98183C71.8906 0.813843 71.7786 0.813843 71.6386 0.813843H67.9149C67.6349 0.813843 67.4109 1.03783 67.4109 1.31781V22.6242C67.4109 22.9042 67.6349 23.1282 67.9149 23.1282H71.6386C71.9186 23.1282 72.1426 22.9042 72.1426 22.6242V9.4372C72.2266 9.54919 72.3106 9.68918 72.3946 9.77317L82.0258 22.9322C82.1378 23.0722 82.2498 23.1282 82.5018 23.1282H85.8615C86.0855 23.1282 86.2255 23.0722 86.3375 22.9322L95.9688 9.77317C96.0248 9.68918 96.1368 9.54919 96.2208 9.4372V22.6242C96.2208 22.9042 96.4448 23.1282 96.7247 23.1282H100.448C100.728 23.1282 100.952 22.9042 100.952 22.6242V1.31781C100.868 1.03783 100.644 0.813843 100.392 0.813843Z"
                  fill="white"
                />
                <path
                  d="M121.076 1.00983C120.992 0.869839 120.852 0.813843 120.628 0.813843H117.548C117.324 0.813843 117.212 0.869839 117.1 1.00983C117.1 1.00983 102.85 22.1483 102.85 22.6242C102.766 22.9602 103.046 23.1282 103.298 23.1282H107.581C107.721 23.1282 107.805 23.1282 107.917 22.9602C108.085 22.7922 118.556 7.16937 118.724 6.94538L119.116 6.35743L119.508 6.94538C119.648 7.16937 130.148 22.7642 130.26 22.9322C130.372 23.1002 130.455 23.1002 130.595 23.1002H134.879C135.131 23.1002 135.411 22.9602 135.327 22.5962C135.355 22.1483 121.076 1.00983 121.076 1.00983Z"
                  fill="white"
                />
                <path
                  d="M175.037 0.813843H171.313C171.033 0.813843 170.809 1.03783 170.809 1.31781V16.0447C170.809 16.1567 170.809 16.3247 170.809 16.4927C170.697 16.3807 150.959 1.14982 150.791 1.00983C150.623 0.869839 150.539 0.813843 150.287 0.813843H147.123C146.703 0.813843 146.339 1.14982 146.339 1.59778V22.3722C146.339 22.7922 146.675 23.1562 147.123 23.1562H150.287C150.707 23.1562 151.071 22.8202 151.071 22.3722V8.17729C151.071 7.89731 151.071 7.53334 151.071 7.19737C151.239 7.30936 151.407 7.44935 151.519 7.53334L170.977 22.9602C170.977 22.9602 171.089 23.1002 171.313 23.1002H175.037C175.317 23.1002 175.541 22.8762 175.541 22.5962V1.31781C175.513 1.03783 175.317 0.813843 175.037 0.813843Z"
                  fill="white"
                />
              </svg>
              <Typography className="mx-auto mt-1 max-w-[640px] text-[16px] font-normal leading-6 text-[#fff]">
                Bitmain is our official equipment supplier. Thanks to this, we
                have the most efficient mining equipment.
              </Typography>
            </div>
          </div>
        </Container>
      </section>
      {/* FAQ List */}
      <section className="border-t border-[#DFE7F2] bg-[#F4F8FE] py-[80px]">
        <Container>
          <Typography className="text-center text-[56px] font-semibold leading-[72px] text-[#000]">
            Got a question?
          </Typography>
          <Typography className="mx-auto mt-1 max-w-[640px] text-center text-[16px] font-normal leading-6 text-[#000]">
            Drawing from our extensive experience, we&apos;ve compiled
            comprehensive answers.
          </Typography>
          <FAQComponent />
        </Container>
      </section>
      <Footer />
    </>
  )
}
