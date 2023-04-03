<template>
  <div class="table-container">
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
        <td v-for="ele in tableHeader" :key="ele.id"></td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: 'TimeTable',
  data() {
    return {
      tableHeader: [
        {
          id: 0,
          title: 'Hai'
        },
        {
          id: 1,
          title: 'Ba'
        },
        {
          id: 2,
          title: 'Tư'
        },
        {
          id: 3,
          title: 'Năm'
        },
        {
          id: 4,
          title: 'Sáu'
        },
        {
          id: 5,
          title: 'Bảy'
        }
      ],
      tablePeriod: [
        {
          id: 0,
          title: 'Kíp 1'
        },
        {
          id: 1,
          title: 'Kíp 2'
        },
        {
          id: 2,
          title: 'Kíp 3'
        },
        {
          id: 3,
          title: 'Kíp 4'
        },
        {
          id: 4,
          title: 'Kíp 5'
        },
        {
          id: 5,
          title: 'Kíp 6'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.table-container {
  display: flex;
  justify-content: center;
}
table {
  border-collapse: collapse;

  td,
  th {
    border: 1px solid #e8e8e8;
  }

  th {
    min-width: 185px;
    min-height: 43px;
    padding: 12px;
    text-align: left;
  }

  td {
    min-width: 185px;
    height: 100px;
    padding: 12px;
  }
}
</style>
