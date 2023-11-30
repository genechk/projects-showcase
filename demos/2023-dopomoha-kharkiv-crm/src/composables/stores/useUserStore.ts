import { defineStore } from 'pinia'
import { ref } from 'vue'

/** Just a placeholder to imitate some of the auth logic */
export const useUserStore = defineStore('user', () => {
  const user = ref({
    name: 'Demo User',
    image: '',
  })

  const logout = () => {
    console.log('Logging out')
  }

  return { user, logout }
})
