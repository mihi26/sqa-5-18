<template>
  <div
    class="input-wrapper"
    @click="() => (isShowDropdown = !isShowDropdown)"
    v-click-outside="handleClickOutside"
  >
    <div class="title-input-wrapper">
      <div class="title" v-if="title.length">{{ title }}</div>
      <input v-model="inputValue.name" :placeholder="placeholder" class="input-style" readonly />
    </div>
    <unicon name="angle-down" fill="#fff" width="20px" height="20px" />
    <div class="input-dropdown" v-if="isShowDropdown">
      <div class="dropdown-item" v-for="item in options" :key="item.id" @click="onChooseItem(item)">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>
<script>
import vClickOutside from 'click-outside-vue3'
export default {
  name: 'SelectInput',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      default: ''
    }
  },
  directives: {
    clickOutside: vClickOutside.directive
  },
  data() {
    return {
      inputValue: {},
      isShowDropdown: false
    }
  },
  methods: {
    handleClickOutside() {
      this.isShowDropdown = false
    },
    onChooseItem(val) {
      this.inputValue = val
    }
  },
  watch: {}
}
</script>
<style lang="scss" scoped>
.input-wrapper {
  width: 300px;
  min-height: 40px;
  border: 1px solid #fff;
  display: flex;
  align-items: center;
  padding: 12px 12px;
  border-radius: 4px;
  position: relative;
  cursor: pointer;

  .title-input-wrapper {
    display: flex;
    flex-direction: column;
    flex: 1;

    .title {
      font-size: 12px;
    }
  }

  .input-style {
    width: 100%;
    cursor: pointer;
    outline: none;
    line-height: 20px;
    background: transparent;
    color: #fff;
    border: none;
  }
  .input-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 2;
    width: inherit;

    .dropdown-item {
      min-height: 40px;
      display: flex;
      align-items: center;
    }
  }
}
</style>
