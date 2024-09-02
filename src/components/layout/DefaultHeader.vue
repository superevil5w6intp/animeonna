<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
function logout() {
  localStorage.setItem("isLoggedin", false);
  window.location.reload();
}

function gohome() {
  router.push({ name: "home" });
}
function profile() {
  router.push({ name: "profile" });
}
</script>
<template>
  <header>
    <button class="logo" @click="gohome">アニメオンナ</button>
    <div class="right">
      <button class="right-btn">장바구니</button>
      <button class="right-btn" @click="profile">프로필</button>
      <button class="right-btn" @click="logout">로그아웃</button>
    </div>
  </header>
</template>
<style lang="scss" scoped>
header {
  background-color: rgb(0, 0, 0);
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
}
.logo {
  font-family: "palettemosaic";
  background-color: transparent;
  border: none;
  /* border: 1px dashed red; */
  cursor: pointer;
  font-size: 40px;
  color: white;
  &:hover {
    color: rgb(216, 216, 216);
  }
  &:active {
    color: rgb(50, 50, 50);
  }
}
.right-btn {
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  &:hover {
    color: rgb(216, 216, 216);
  }
  &:active {
    color: rgb(50, 50, 50);
  }
}

.right {
  /* background-color: red; */
  display: flex;
  column-gap: 30px;
}
</style>
