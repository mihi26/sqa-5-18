<script>
import api from '../api/api'
import { useLoadingStore } from '@/stores/loading'
import { useAuthStore } from '@/stores/auth'

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async handleOnSubmit() {
      useLoadingStore().setLoading(true)
      let payload = {
        username: this.username,
        password: this.password
      }
      let res = await api('login', payload)
      if (res.success) {
        useAuthStore().setUserAuth(res.data)
        this.$router.push({
          name: 'MenuPage'
        })
        this.$toast.open({
          message: 'Đăng nhập thành công',
          type: 'success',
          position: 'top-right',
          duration: 5000
        })
      } else {
        this.$toast.open({
          message: 'Đăng nhập thất bại',
          type: 'error',
          position: 'top-right',
          duration: 5000
        })
      }
      useLoadingStore().setLoading(false)
    }
  },
  computed: {
    isActiveSubmitBtn() {
      return !!this.username.length && !!this.password.length
    }
  }
}
</script>

<template>
  <div class="login-wrapper">
    <div class="app-title-wrapper">
      <div class="app-title">Hệ thống đăng ký giảng dạy</div>
    </div>
    <div class="form-wrapper">
      <div class="form-container">
        <div class="login-title">Đăng nhập</div>
        <input type="text" class="input-wrapper" placeholder="Tên tài khoản" v-model="username" />
        <input type="password" class="input-wrapper" placeholder="Mật khẩu" v-model="password" />
        <button
          class="login-btn"
          :class="{ 'login-btn-disabled': !isActiveSubmitBtn }"
          @click="handleOnSubmit"
        >
          Đăng nhập
          <unicon name="arrow-right" fill="#ffffff" width="24px" height="24px" />
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-wrapper {
  display: flex;
  height: 100vh;

  .app-title-wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 30px;
    width: 50%;
    background-color: red;
    background-image: url('../assets/login-img.jpg');
    background-repeat: no-repeat;
    background-size: cover;

    .app-title {
      font-size: 24px;
      text-transform: uppercase;
      font-weight: bold;
    }
  }

  .form-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;

    .form-container {
      display: flex;
      flex-direction: column;
      gap: 24px;

      .login-title {
        font-size: 20px;
        line-height: 38px;
        color: #232321;
        font-weight: 600;
      }

      .input-wrapper {
        width: 480px;
        height: 48px;
        outline: none;
        padding: 16px;
        border: 1px solid #232321;
        border-radius: 8px;
      }

      .login-btn {
        width: 480px;
        border: none;
        border-radius: 8px;
        height: 48px;
        background: #232321;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 500;
        padding-left: 16px;
        padding-right: 16px;
        color: #fff;
        line-height: 17px;

        &-disabled {
          opacity: 0.5;
          pointer-events: none;
        }
      }
    }
  }
}
</style>
