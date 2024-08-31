'use client'

import Image from 'next/image'
import { basePath } from '@/const'

export default function Logo() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div onClick={scrollToTop} style={{ cursor: 'pointer' }}>
      <Image
        src={`${basePath}/img/svg/logo.svg`}
        priority
        alt="VPN logo"
        width={68}
        height={32}
        style={{
          width: 'auto',
          height: 'auto'
        }}
      />
    </div>
  )
}
