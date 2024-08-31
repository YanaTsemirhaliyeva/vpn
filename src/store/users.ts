import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import { User } from '@/types/user'

type UsersData = {
  users: User[]
  loading: boolean
  getUsers: () => Promise<void>
}

export const useUsers = create<UsersData>()(
  immer((set) => ({
    users: [],
    loading: false,
    getUsers: async () => {
      set((state) => {
        state.loading = true
      })
      try {
        const response = await fetch('https://randomuser.me/api/?results=10')
        if (!response.ok) {
          throw new Error(`Unable to fetch users: ${response.status}`)
        }
        const users = await response.json()
        set((state) => {
          state.users = users.results
          state.loading = false
        })
        return users.results
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        set((state) => {
          state.loading = false
        })
      }
    }
  }))
)
