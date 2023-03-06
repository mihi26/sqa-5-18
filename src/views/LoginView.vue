<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')
</script>

<template>
  <div class="login-wrapper">
    <div class="info-wrapper">
      <input v-model="username" class="input-wrapper" />
      <input v-model="password" class="input-wrapper" />
    </div>
    <div class="button-wrapper">
      <button>LOGIN</button>
      <div class="forgot-password">Forgot password?</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-wrapper {
  display: flex;
  flex-direction: column;
  gap: 43px;

  .info-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .input-wrapper {
    width: 100%;
    min-height: 45px;
  }
}
</style>
