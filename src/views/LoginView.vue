<script setup>
import { useRouter } from "vue-router";
import { reactive } from "vue";
const router = useRouter();
function goignup() {
  router.push({ name: "signup" });
}
function gindpw() {
  router.push({ name: "findpw" });
}

const input = reactive({
  id: "",
  pw: "",
});
function sh() {
  if (input.id === "") {
    window.alert("아이디를 입력해주세여~ㅇㅅㅇ");
    return;
  }
  if (input.pw === "") {
    window.alert("비밀번호를 입력해주세요");
    return;
  }

  const userData = JSON.parse(localStorage.getItem("userData"));
  const result = userData.filter((user) => {
    if (user.id === input.id && user.pw === input.pw) {
      return true;
    } else {
      return false;
    }
  });

  console.log(result[0]);
  if (result.length > 0) {
    localStorage.setItem("isLoggedin", "true");
    localStorage.setItem("profile", JSON.stringify(result[0]));
    router.push({ name: "home" });
  } else {
    alert("ㄱ계정 업슴");
  }
}
</script>
<template>
  <div class="bg">
    <div class="white-bg">
      <h2 class="title">로그인</h2>
      <input class="input" placeholder="아이디" v-model="input.id" />
      <input
        class="input"
        type="password"
        placeholder="비번"
        v-model="input.pw"
        @keydown.enter="sh"
      />
      <button class="login" @click="sh">로그인</button>
      <div class="flex-row">
        <button class="josun" @click="goignup">회원가입</button>
        <button class="josun" @click="gindpw">비밀번호 찾기</button>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@font-face {
  font-family: "ChosunGs";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@1.0/ChosunGs.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

* {
  font-family: "ChosunGs";
}
.bg {
  background-color: black;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.josun {
  background-color: transparent;
  color: black;
  border: none;
  cursor: pointer;
}
.input {
  width: 100%;
  height: 30px;
  padding-left: 10px;
  box-sizing: border-box;
  border: none;
  outline: none;
  box-shadow: 0 0 0 2px rgb(255, 0, 0);
  transition: 0.3s;
  &:focus {
    box-shadow: 0 0 0 2px rgb(0, 0, 255);
    background-color: #00ff15;
    color: white;
  }
}
.login {
  color: white;
  width: 100%;
  height: 30px;
  cursor: pointer;
  background-color: black;
  border: none;
  &:hover {
    background-color: rgb(35, 35, 35);
  }
  &:active {
    background-color: rgb(51, 51, 51);
  }
}
.title {
}
.flex-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 10px;
  width: 100%;
}
.white-bg {
  width: 300px;
  height: 300px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  row-gap: 20px;
  box-sizing: border-box;
}
</style>
