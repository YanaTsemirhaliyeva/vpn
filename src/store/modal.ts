import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type Modal = {
  active: boolean
  setActive: (value: boolean) => void
  activeName: string
  setActiveName: (value: string) => void
}

export const useModal = create<Modal>()(
  immer((set) => ({
    active: false,
    setActive: (arg) => set({ active: arg }),
    activeName: '',
    setActiveName: (arg) => set({ activeName: arg })
  }))
)
