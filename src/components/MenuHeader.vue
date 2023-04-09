<template>
  <div class="header-wrapper">
    <div class="header-title-wrapper">
      <div class="user-greet">Xin chào Nguyễn Văn A</div>
      <div class="logout-button">Đăng xuất</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MenuHeader'
}
</script>
<style lang="scss" scoped>
.header-wrapper {
  padding: 32px 60px;
  width: 100%;
  min-height: 96px;
  background-color: #fafafa;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-bottom: 1px solid rgba(35, 35, 33, 0.2);
  .header-title-wrapper {
    display: flex;
    align-items: center;
    gap: 20px;

    .logout-button {
      padding: 8px;
      border-radius: 4px;
      font-weight: 500;
      cursor: pointer;

      &:hover {
        background-color: #e7e7e3;
      }
    }
  }
}
</style>
