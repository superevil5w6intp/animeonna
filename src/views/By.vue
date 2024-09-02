<script setup>
import { ref, reactive } from "vue";
import Selectbox from "@/components/item/Selectbox.vue";
import { useRouter } from "vue-router";

const ordernumber = ref("sadsa");
const test = ref("");
const router = useRouter();
const Order = reactive({
  moneygive: "",
  address: "",
  how: "",
  memo: "",
});

function rnc() {
  ordernumber.value = Math.random().toString(20).substring(2, 18);
}
function buy() {
  if (
    Order.moneygive === "" ||
    Order.address === "" ||
    Order.how === "" ||
    Order.memo === ""
  ) {
    window.alert("내용 모두 입력");
    return;
  } else {
    window.alert("주문 완료");
    router.push("/");
  }
}

function cancel() {
  const result = window.confirm("주문을 취소하시겠습니까?");

  if (result === true) {
    router.go(-1);
  }
}
rnc();
</script>
<template>
  <div class="bigdiv">
    <div class="textdiv">
      <span class="label">입급계좌</span>
      <input class="input" v-model="Order.moneygive" />
    </div>
    <div class="textdiv">
      <span class="label">주문번호</span>
      <span> {{ ordernumber }}</span>
    </div>
    <div class="textdiv">
      <span class="label">주소</span>
      <input class="input" v-model="Order.address" />
    </div>
    <div class="textdiv">
      <span class="label">배송방법</span>
      <Selectbox
        :options="['택배', '편택', '우편', '직거래', '요르배송']"
        v-model="Order.how"
      />
    </div>
    <div class="textdiv">
      <span class="label">배송메모</span>
      <input class="input" v-model="Order.memo" />
    </div>
    <div class="textdiv">
      <button class="button" @click="buy">주문하기</button>
      <button class="button" @click="cancel">주취</button>
    </div>
  </div>
</template>
<style scoped lang="scss">
.textdiv {
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > .label {
    width: 100px;
  }

  &:last-child {
    margin-top: 30px;
  }
}
:deep() {
  .select {
    width: 200px;
  }
}

.input {
  height: 45px;
  width: 200px;
  padding: 0 10px;
  font-size: larger;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px lightgrey solid;
}
.button {
  height: 50px;
  flex: 1;
  padding: 15px 30px;
  cursor: pointer;
  border: none;
  font-size: 15px;
  color: #ffffff; // 흰색 텍스트
  border-radius: 50px; // 둥근 모양
  /////////
  &:first-child {
    background-color: #ff69b4; // 핑크 배경
    transition: background-color 0.3s ease; // 배경색 전환 효과

    // hover 상태일 때 스타일 변경
    &:hover {
      background-color: #ffc0cb; // 연한 핑크 배경
      transform: scale(1.05); // 확대
      box-shadow: 0 0 10px rgba(255, 105, 180, 0.5); // 핑크 그림자 효과 추가
    }

    // active 상태일 때 스타일 변경
    &:active {
      background-color: #ff1493; // 더 진한 핑크 배경
    }

    // 특수문자 스타일
    &::before {
      content: "\1F496"; // 스파클하트 이모티콘 코드
      margin-right: 5px; // 이모티콘과 텍스트 간격 조절
      font-size: 20px; // 이모티콘 크기
    }
  }
  &:last-child {
    background-color: #2c3e50; // 어두운 네이비색 배경
    transition: background-color 0.3s ease; // 배경색 전환 효과

    // hover 상태일 때 스타일 변경
    &:hover {
      background-color: #000000; // 더 어두운 네이비색 배경
      transform: translateY(-3px); // 아래로 약간 이동
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); // 그림자 효과 추가
    }

    // active 상태일 때 스타일 변경
    &:active {
      background-color: #343434; // 더 어두운 네이비색 배경
    }

    // 특수문자 스타일
    &::before {
      content: "\1F480"; // 해골 이모티콘 코드
      margin-right: 10px; // 이모티콘과 텍스트 간격 조절
      font-size: 24px; // 이모티콘 크기
    }
  }
  ///////////
  & + & {
    margin-left: 10px;
  }
}
.bigdiv {
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 20px;
  align-items: center;
  height: 90vh;
}
</style>
