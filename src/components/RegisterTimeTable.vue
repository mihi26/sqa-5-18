<template>
  <div class="table-container" :class="{ 'table-container-disabled': isDisableTable }">
    <table>
      <tr>
        <th>Kíp/Thứ</th>
        <th v-for="item in tableHeader" :key="item.id">
          {{ item.title }}
        </th>
      </tr>
      <tr v-for="item in tablePeriod" :key="item.id">
        <th>
          {{ item.title }}
        </th>
        <td
          v-for="ele in tableHeader"
          :key="ele.id"
          class="schedule-cell"
          :class="{
            'schedule-cell-selected': renderTableSchedule(selectedValue.weekID.id, ele.id, item.id)
              .subjectCode
          }"
          @click="addScheduleToCell(item, ele)"
        >
          <div
            class="schedule-detail-cell"
            v-if="renderTableSchedule(selectedValue.weekID.id, ele.id, item.id).subjectCode"
          >
            <div class="subject-name">
              {{ renderTableSchedule(selectedValue.weekID.id, ele.id, item.id).subjectCode.name }}
            </div>
            <div class="room-name">
              Phòng: {{ renderTableSchedule(selectedValue.weekID.id, ele.id, item.id).roomID.name }}
            </div>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import { useAuthStore } from '../stores/auth'
export default {
  name: 'TimeTable',
  props: {
    selectedValue: {
      type: Object,
      required: true
    },
    isDisableTable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      tableHeader: [
        {
          id: 0,
          title: 'Hai',
          value: 2
        },
        {
          id: 1,
          title: 'Ba',
          value: 3
        },
        {
          id: 2,
          title: 'Tư',
          value: 4
        },
        {
          id: 3,
          title: 'Năm',
          value: 5
        },
        {
          id: 4,
          title: 'Sáu',
          value: 6
        },
        {
          id: 5,
          title: 'Bảy',
          value: 7
        }
      ],
      tablePeriod: [
        {
          id: 0,
          title: 'Kíp 1',
          value: 1
        },
        {
          id: 1,
          title: 'Kíp 2',
          value: 2
        },
        {
          id: 2,
          title: 'Kíp 3',
          value: 3
        },
        {
          id: 3,
          title: 'Kíp 4',
          value: 4
        },
        {
          id: 4,
          title: 'Kíp 5',
          value: 5
        },
        {
          id: 5,
          title: 'Kíp 6',
          value: 6
        }
      ],
      scheduleArray: [],
      registerPayload: []
    }
  },
  methods: {
    addScheduleToCell(period, day) {
      let payload = {
        teacherCode: useAuthStore().getUserName,
        subjectCode: this.selectedValue.subjectCode.code,
        week: this.selectedValue.weekID.id,
        weekDay: this.tableHeader.find((item) => item.id == day.id).value,
        shift: this.tablePeriod.find((item) => item.id == period.id).value,
        roomId: this.selectedValue.roomID.id
      }
      if (
        this.registerPayload.some(
          (schedule) => schedule.weekDay == payload.weekDay && schedule.shift == payload.shift
        )
      ) {
        let oldScheduleIndex = this.registerPayload.findIndex(
          (schedule) => schedule.weekDay == payload.weekDay && schedule.shift == payload.shift
        )
        if (oldScheduleIndex > -1) {
          this.registerPayload.splice(oldScheduleIndex, 1)
        }
      }
      this.registerPayload.push(payload)
      let renderPayload = {
        ...this.selectedValue,
        week: this.selectedValue.weekID.id,
        weekDay: this.tableHeader.find((item) => item.id == day.id).id,
        shift: this.tablePeriod.find((item) => item.id == period.id).id
      }
      if (
        this.scheduleArray.some(
          (schedule) => schedule.weekDay == renderPayload.weekDay && schedule.shift == payload.shift
        )
      ) {
        let oldScheduleIndex = this.scheduleArray.findIndex(
          (schedule) => schedule.weekDay == payload.weekDay && schedule.shift == payload.shift
        )
        if (oldScheduleIndex > -1) this.scheduleArray.splice(oldScheduleIndex, 1)
      }
      this.scheduleArray.push(renderPayload)
    },
    renderTableSchedule(week, weekDay, shift) {
      let currentSchedule = this.scheduleArray.find(
        (item) => item.week == week && item.weekDay == weekDay && item.shift == shift
      )
      if (currentSchedule) {
        return currentSchedule
      }
      return {}
    }
  },
  watch: {
    registerPayload: {
      handler(val) {
        this.$emit('schedulePayload', val)
      },
      deep: true
    }
  }
}
</script>
<style lang="scss" scoped>
.table-container {
  overflow-x: auto;
  &-disabled {
    opacity: 0.5;
    pointer-events: none;
  }
}
table {
  border-collapse: collapse;
  width: 100%;
  background: #fff;

  td,
  th {
    border: 0.5px solid rgba(35, 35, 33, 0.2);
  }

  th {
    min-width: 130px;
    min-height: 80px;
    padding: 12px;
    text-align: left;
    font-size: 16px;
    line-height: 19px;
  }

  td {
    min-width: 10px;
    height: 80px;
    padding: 12px;
  }

  .schedule-cell {
    cursor: pointer;
    &:hover,
    &-selected {
      background: #e7e7e3;
    }
  }

  .schedule-detail-cell {
  }
}
</style>
