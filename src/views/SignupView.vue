<script setup>
import { reactive, watchEffect, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
function gogin() {
  router.push({ name: "login" });
}

const input = reactive({
  name: "",
  id: "",
  pw: "",
  pwch: "",
});
function onClickSignup() {
  if (input.name === "") {
    window.alert("이름을 입력해주세요");
    return;
  }
  if (input.id === "") {
    window.alert("아이디를 입력해주세요");
    return;
  }
  if (input.pw === "") {
    window.alert("비밀번호를 입력해주세욤");
    return;
  }
  if (input.pwch === "") {
    window.alert("비밀번호를 입력해주세요");
    return;
  }
  if (input.pw !== input.pwch) {
    window.alert("비밀번호가 다릅니다");
    return;
  }

  const userData = JSON.parse(localStorage.getItem("userData"));
  const result = [
    ...userData,
    {
      name: input.name,
      id: input.id,
      pw: input.pw,
    },
  ];

  localStorage.setItem("userData", JSON.stringify(result));
  window.alert("회원가입이 완료되었습니다.");

  reset();
}

function reset() {
  input.name = "";
  input.id = "";
  input.pw = "";
  input.pwch = "";
}

const dipw = ref(false);
watchEffect(() => {
  if (input.pw !== "" && input.pwch !== "") {
    if (input.pw !== input.pwch) {
      dipw.value = true;
    } else {
      dipw.value = false;
    }
  }
});
</script>
<template>
  <div class="bg">
    <div class="white-bg">
      <h2>회원가입</h2>
      <input class="input" v-model="input.name" placeholder="name" />
      <input class="input" v-model="input.id" placeholder="id" />
      <input
        class="input"
        v-model="input.pw"
        type="password"
        placeholder="비밀번호"
      />
      <input
        class="input"
        v-model="input.pwch"
        type="password"
        placeholder="비밀번호 확인"
      />
      <span class="bimilbunho" v-if="dipw"> 비밀번호가 다릅니다.</span>
      <button class="signup" @click="onClickSignup">회원가입하기</button>
      <button class="backlogin" @click="gogin">로그인으로 돌아가기</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@font-face {
  font-family: "Cafe24Moyamoya-Face-v1.0";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_231029@1.1/Cafe24Moyamoya-Face-v1.0.woff2")
    format("woff2");
  font-weight: normal;
  font-style: normal;
}
* {
  font-family: "Cafe24Moyamoya-Face-v1.0";
}
.bimilbunho {
  color: red;
  font-size: 10px;
  width: 100%;
}
.backlogin {
  border: transparent;
  background-color: transparent;
  cursor: pointer;
}
.signup {
  width: 100%;
  height: 30px;
  border: transparent;
  background-color: black;
  color: white;
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
.white-bg {
  width: 300px;
  height: 400px;
  background-color: white;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 40px;
  box-sizing: border-box;
}
.input {
  width: 100%;
  height: 30px;
  padding-left: 10px;
  box-sizing: border-box;
  border: none;
  outline: none;
  box-shadow: 0 0 0 2px #38957283;
  transition: 0.5s;
  &:focus {
    box-shadow: 0 0 0 5px #98938949;
  }
}
</style>
