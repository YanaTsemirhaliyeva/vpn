'use client'

import { memo, PropsWithChildren } from 'react'
import { useModal } from '@/store/modal'

import Header from '../header/Header'
import Modal from '../modal/Modal'
import styles from './LayoutClient.module.scss'

export default function LayoutClientComponent({
  children
}: PropsWithChildren<unknown>) {
  const { active: isActiveModal } = useModal()

  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        {children}
        {isActiveModal && <Modal />}
      </main>
      <footer></footer>
    </div>
  )
}

export const LayoutClient = memo(LayoutClientComponent)
