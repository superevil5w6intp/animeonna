<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const profileData = ref(null);
const router = useRouter();
const pwcheck = ref("");
profileData.value = JSON.parse(localStorage.getItem("profile"));

function cancel() {
  router.go(-1);
}
function edit() {
  if (profileData.value.pw !== pwcheck.value) {
    window.alert("제대로 입력 ㄱ");
  } else {
    localStorage.setItem("profile", JSON.stringify(profileData.value));
    // 2. userData 리스트 안에 내 정보 변경
    const userList = JSON.parse(localStorage.getItem("userData"));
    // console.log(userList);
    const newUserList = userList.map((item) => {
      if (item.id === profileData.value.id) {
        return profileData.value;
      } else return item;
    });
    localStorage.setItem("userData", JSON.stringify(newUserList));

    window.alert("계정정정보 변경 완료");
  }
}
</script>
<template>
  <div class="geoshiggie">
    <div class="middle">
      <span>-닉-</span>
      <input class="inpuut" placeholder="밉력" v-model="profileData.name" />
      <span>비번 수정</span>
      <input
        class="inpuut"
        placeholder="*************"
        type="password"
        v-model="profileData.pw"
      />
      <span>비번 화긴</span>
      <input
        class="inpuut"
        placeholder="*************"
        type="password"
        v-model="pwcheck"
      />
    </div>
  </div>
  <div class="btn">
    <button @click="edit">계.정 수정</button>
    <button @click="cancel">취소</button>
  </div>
</template>
<style scoped lang="scss">
.geoshiggie {
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
}
.middle {
  width: 629px;
  display: grid;

  grid-template-columns: 1fr 1fr;
  row-gap: 20px;
}

.inpuut {
  border-radius: 30px;
  padding: 10px 10px;
}
.btn {
  display: flex;
  justify-content: space-evenly;
  padding: 0 20px;
  column-gap: 20px;
  & > button {
    height: 50px;

    flex: 1;
  }
}
</style>
