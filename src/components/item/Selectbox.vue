<script setup>
import { ref } from "vue";

const modelValue = defineModel();
const props = defineProps({
  options: {
    type: Array,
    required: true,
    default: [],
  },
});

const open = ref(false);

function handleOpen() {
  open.value = !open.value;
}

function handleValueClick(value) {
  modelValue.value = value;
  open.value = false;
}
</script>
<template>
  <div class="selectbox">
    <div class="select" @click="handleOpen">
      <span :class="{ value: !modelValue }">
        <template v-if="!modelValue"> 선택 </template>
        <template v-else>
          {{ modelValue }}
        </template>
      </span>
      <span class="material-symbols-outlined arrow"> expand_more </span>
    </div>
    <ul v-if="open" class="optionbox">
      <li
        v-for="(item, index) in options"
        :key="index"
        class="option"
        @click="() => handleValueClick(item)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.selectbox {
  display: inline-flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
}
.select {
  width: 150px;
  height: 45px;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  display: flex;
  box-sizing: border-box;
  background-color: #ffffff;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  font-size: 14px;
  & .arrow {
    /* color: red; */
    margin-left: auto;
  }
  & .value {
    color: grey;
  }
}
.optionbox {
  width: 150px;
  list-style-type: none;
  border: 1px solid #dbdbdb;
  margin-top: -1px;
  border-radius: 10px;
  position: absolute;

  top: 50px;
  background-color: #ffffff;
  overflow: hidden;
  font-size: 14px;
}
.option {
  padding: 10px 20px;
  &:hover {
    background-color: rgb(248, 248, 248);
  }
}
</style>
