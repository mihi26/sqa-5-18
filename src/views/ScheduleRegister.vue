<template>
  <div class="register-layout">
    <div class="title-wrapper">Đăng ký giảng dạy</div>
    <!-- <TimeTable /> -->
  </div>
</template>
<script>
import TimeTable from '../components/TimeTable.vue'

export default {
  name: 'ScheduleRegister',
  components: { TimeTable }
}
</script>
<style lang="scss" scoped>
.register-layout {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
}
</style>
