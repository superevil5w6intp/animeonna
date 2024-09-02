<script setup>
const emit = defineEmits(["cancel", "success"]);

function OffClick() {
  emit("cancel");
}
function OnClick() {
  emit("success");
}
</script>
<template>
  <div class="darkbg">
    <div class="modal">
      <span class="text">구매하시겠슨니77ㅏ?</span>
      <div class="btns">
        <button class="b" @click="OnClick">ㄱ</button>
        <button class="b" @click="OffClick">ㄴ</button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.darkbg {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  background-color: white;
  width: 300px;
  height: 150px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
}
.text {
  font-size: 24px;
  text-align: center;
  padding: 20px 0;
}
.btns {
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 10px;
}
.b {
  width: 120px;
  height: 50px;
}
</style>
