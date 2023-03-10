<template>
  <div class="menu-page">
    <div class="welcome-section">
      <div class="username">Xin chao Mehe</div>
      <div class="change-password">Doi mat khau</div>
    </div>
    <div class="menu-list-wrapper">
      <button
        class="menu-wrapper"
        v-for="option in menuOptions"
        :key="option.id"
        @click="handleOnClick(option.type)"
      >
        {{ option.title.toUpperCase() }}
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MenuPage',
  data() {
    return {
      menuOptions: [
        {
          id: 0,
          title: 'Đăng ký giảng dạy',
          type: 'register'
        },
        {
          id: 1,
          title: 'Sửa lịch giảng dạy',
          type: 'edit'
        },
        {
          id: 2,
          title: 'Xem lịch giảng dạy',
          type: 'watch'
        }
      ]
    }
  },
  methods: {
    handleOnClick(type) {
      if (type == 'register') {
        this.$router.push({
          name: 'RegisterTimetable'
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.menu-page {
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 100%;

  .welcome-section {
    margin-left: auto;
  }

  .menu-list-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;

    .menu-wrapper {
      width: 300px;
      border-radius: 4px;
      min-height: 45px;
      cursor: pointer;
      font-weight: 600;
    }
  }
}
</style>
