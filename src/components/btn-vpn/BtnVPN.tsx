'use client'

import { Roboto } from 'next/font/google'
import { useModal } from '@/store/modal'

import styles from './BtnVPN.module.scss'

const roboto = Roboto({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  adjustFontFallback: false
})

export default function BtnVPN({ className }: { className: string }) {
  const clsName = `btn--${className}`
  const { setActive, activeName } = useModal()

  const handleBtnClick = () => {
    if (className === 'choose' && activeName !== '') {
      setActive(true)
    }
  }

  return (
    <>
      {className === 'header' ? (
        <a
          href="#choose-name"
          className={`${styles.btn} ${styles[clsName]} ${roboto.className}`}
        >
          Get VPN
        </a>
      ) : (
        <button
          className={`${styles.btn} ${styles[clsName]} ${roboto.className}`}
          type="button"
          onClick={handleBtnClick}
          disabled={className === 'choose' && activeName === ''}
        >
          Get VPN
        </button>
      )}
    </>
  )
}
