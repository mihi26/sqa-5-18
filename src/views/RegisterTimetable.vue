<template>
  <div class="view-wrapper">
    <div class="icon-wrapper" @click="handleGoBack">
      <unicon name="angle-left-b" fill="#fff" width="20px" height="20px" />
    </div>
    <div class="day-wrapper">
      <SelectInput placeholder="Chọn thứ" :options="dayList" title="Thứ" />
    </div>

    <div class="period-wrapper">
      <SelectInput placeholder="Chọn kíp" :options="periodList" title="Kíp" />
    </div>

    <TimeTable />
  </div>
</template>
<script>
import TimeTable from '../components/TimeTable.vue'
import SelectInput from '../components/SelectInput.vue'
export default {
  name: 'RegisterTimetable',
  components: {
    TimeTable,
    SelectInput
  },
  data() {
    return {
      dayList: [
        {
          id: 0,
          name: 'Thứ 2'
        },
        {
          id: 1,
          name: 'Thứ 3'
        },
        {
          id: 2,
          name: 'Thứ 4'
        },
        {
          id: 3,
          name: 'Thứ 5'
        },
        {
          id: 4,
          name: 'Thứ 6'
        },
        {
          id: 5,
          name: 'Thứ 7'
        },
        {
          id: 6,
          name: 'Chủ nhật'
        }
      ],
      periodList: [
        {
          id: 0,
          name: 'Kíp 1'
        },
        {
          id: 1,
          name: 'Kíp 2'
        },
        {
          id: 2,
          name: 'Kíp 3'
        },
        {
          id: 3,
          name: 'Kíp 4'
        },
        {
          id: 4,
          name: 'Kíp 5'
        },
        {
          id: 5,
          name: 'Kíp 6'
        }
      ]
    }
  },
  methods: {
    handleGoBack() {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss" scoped>
.view-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  .icon-wrapper {
    width: fit-content;
    cursor: pointer;
  }

  .day-wrapper,
  .period-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
  }
}
</style>
