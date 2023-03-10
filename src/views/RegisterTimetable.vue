<template>
  <div class="view-wrapper">
    <TimeTable />
  </div>
</template>
<script>
import TimeTable from '../components/TimeTable.vue'
export default {
  name: 'RegisterTimetable',
  components: {
    TimeTable
  }
}
</script>
<style lang="scss" scoped>
.view-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
