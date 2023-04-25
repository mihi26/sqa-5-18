import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  id: 'auth',
  state: () => ({
    username: '',
    name: '',
    token: ''
  }),
  getters: {
    getName: (state) => state.name,
    getUserName: (state) => state.username,
    getToken: (state) => state.token
  },
  actions: {
    setUserAuth(val) {
      this.username = val?.username
      this.name = val?.name
      this.token = val?.token
    },
    clearUserAuth() {
      this.username = ''
      this.name = ''
      this.token = ''
    }
  }
})
