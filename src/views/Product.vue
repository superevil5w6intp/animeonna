<script setup>
import { useRoute, useRouter } from "vue-router";
import goods_img from "@/assets/image/goods_img.png";
import Modal from "../components/item/Modal.vue";
import Modal2 from "../components/item/Modal2.vue";
import { ProductList } from "../data/product";
import { ref, watch, computed } from "vue";

const router = useRouter();
const route = useRoute();
const id = route.params.id;

const isModelOpen = ref(false);

const result = ProductList.filter((sogi) => sogi.id === id);

const thumbnail = computed(() => {
  const img = result[0].img[0].split("/");

  return img[img.length - 1];
});

function modelOpen() {
  isModelOpen.value = true;
}

function modalClose() {
  isModelOpen.value = false;
}

function goBuyPage() {
  router.push({ name: "buy" });
}
</script>
<template>
  <section class="container">
    <div
      class="img"
      :style="`background-image:url('../assets/image/${thumbnail}') `"
    />
    <div class="info">
      <h2 class="title">{{ result[0].name }}</h2>
      <p v-html="result[0].des" />
      <h4>{{ result[0].price.toLocaleString() }}₩</h4>
      <div class="buon">
        <button class="buy" @click="modelOpen">구매</button>
        <button class="bag">장바구니</button>
      </div>
    </div>
  </section>

  <Modal v-if="isModelOpen" @cancel="modalClose" @success="goBuyPage" />
</template>
<style lang="scss" scoped>
.img {
  height: 600px;
  width: 600px;
  background-size: contain;
  background-repeat: repeat-x;
}
.info {
  width: 600px;
  display: grid;
  grid-template-rows: 150px auto 50px 50px;
  /* flex-direction: column; */
  /* justify-content: center; */
  /* border: 3px solid red; */
}
.buon {
  /* border: 3px solid rgb(126, 67, 142); */
  display: flex;
  column-gap: 10px;

  & > button {
    flex: 1;
    cursor: pointer;
    border: none;
  }
}
.title {
}
.container {
  /* border: 3px solid rgb(85, 224, 85); */
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 20px;
  margin-top: 50px;
}

.buy {
  background-color: rgb(248, 217, 42);
}
.bag {
  background-color: rgb(230, 230, 230);
}
</style>
