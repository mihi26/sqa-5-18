<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const username = ref('')
const password = ref('')
const router = useRouter()

const handleOnSubmit = () => {
  router.push({
    name: 'MenuPage'
  })
}
</script>

<template>
  <div class="login-wrapper">
    <div class="info-wrapper">
      <div class="input-wrapper">
        <unicon name="user" fill="#fff" width="20px" height="20px" />
        <input v-model="username" placeholder="USERNAME" class="input-style" />
      </div>
      <div class="input-wrapper">
        <unicon name="lock" fill="#fff" width="20px" height="20px" />
        <input v-model="password" placeholder="PASSWORD" class="input-style" />
      </div>
    </div>
    <div class="button-wrapper">
      <button class="submit-button" @click="handleOnSubmit">LOGIN</button>
      <div class="forgot-password">Forgot password?</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 43px;

  .info-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .input-wrapper {
    min-width: 300px;
    min-height: 45px;
    border: 1px solid #fff;
    display: flex;
    align-items: center;
    gap: 19px;
    padding: 0 12px;
    border-radius: 4px;
    .input-style {
      width: 100%;
      outline: none;
      line-height: 20px;
      background: transparent;
      color: #fff;
      border: none;
    }
  }

  .button-wrapper {
    display: flex;
    flex-direction: column;
    gap: 11px;
    width: inherit;

    .submit-button {
      min-width: 300px;
      border-radius: 4px;
      min-height: 45px;
      cursor: pointer;
      font-weight: 600;
    }

    .forgot-password {
      display: flex;
      justify-content: flex-end;
      color: #fff;
      cursor: pointer;
      font-weight: 500;
    }
  }
}

::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #fff;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #fff;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #fff;
}
</style>
