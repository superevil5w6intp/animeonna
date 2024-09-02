<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

function gogin() {
  router.push({ name: "login" });
}

const id = ref("");
const password = ref("");
function onclickfindpw() {
  if (id.value === "") {
    window.alert("아이디입력ㄱ");
  } else {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const result = userData.filter((user) => {
      if (user.id === id.value) {
        return true;
      } else {
        return false;
      }
    });
    if (result.length > 0) {
      password.value = result[0].pw;
    } else {
      alert("계정ㄴ");
    }
  }
}
</script>
<template>
  <div class="bg">
    <div class="whitebg">
      <h2>비밀번호 찾기</h2>
      <input class="id" placeholde="아이디" v-model="id" />
      <button class="find" @click="onclickfindpw">찾기</button>
      <h5 class="aaa">비밀번호:</h5>
      <input class="id" :disabled="true" v-model="password" />
      <button class="buon" @click="gogin">로그인으로 돌아가기</button>
    </div>
  </div>
</template>
<style scoped lang="scss">
@font-face {
  font-family: "HakgyoansimBombanghakR";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-2@1.0/HakgyoansimBombanghakR.woff2")
    format("woff2");
  font-weight: normal;
  font-style: normal;
}

* {
  font-family: "HakgyoansimBombanghakR";
}
.buon {
  border: transparent;
  background-color: transparent;
  cursor: pointer;
}
.aaa {
  width: 100%;
}
.id {
  width: 100%;
  height: 30px;
  padding-left: 10px;
  box-sizing: border-box;
  border: none;
  outline: none;
  box-shadow: 0 0 0 2px #29784192;
  transition: 0.5s;
  &:focus {
    box-shadow: 0 0 0 5px #53859362;
  }
}
.find {
  background-color: black;
  color: white;
  width: 100%;
  height: 30px;
  cursor: pointer;
}
.bg {
  background-color: black;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.whitebg {
  background-color: white;
  width: 300px;
  height: 350px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 40px;
  box-sizing: border-box;
}
</style>
