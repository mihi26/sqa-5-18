<template>
  <div class="menu-page">
    <div class="welcome-section">Xin chafo zzz</div>
    <div class="menu-list-wrapper">
      <button class="menu-wrapper" v-for="option in menuOptions" :key="option.id">
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
  }
}
</script>
<style lang="scss" scoped>
.menu-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  .menu-list-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .menu-wrapper {
      min-width: 300px;
      border-radius: 4px;
      min-height: 45px;
      cursor: pointer;
      font-weight: 600;
    }
  }
}
</style>
