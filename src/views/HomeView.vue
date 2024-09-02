<script setup>
import { reactive } from "vue";
import Product from "@/components/item/Product.vue";
import Selectbox from "@/components/item/Selectbox.vue";
import { ProductList } from "../data/product";

const filter = reactive({
  new: "신상품",
  genre: "",
  product: "",
  price: "",
});
</script>

<template>
  <div class="filter">
    <Selectbox
      :options="['날짜순', '예약상품', '이미입고됨']"
      v-model="filter.new"
    />
    <Selectbox
      :options="['기생수', '스파이패밀리', 'ㅇㅇ']"
      v-model="filter.genre"
    />
    <Selectbox
      :options="['다키마쿠라', '누이구루미', '피규어']"
      v-model="filter.product"
    />
    <Selectbox
      :options="['~1000', '1000~10000', '10000~']"
      v-model="filter.price"
    />
  </div>
  <div class="grid">
    <Product
      v-for="(item, index) in ProductList"
      :key="index"
      :id="item.id"
      :item="item"
    />
  </div>
</template>
<style lang="scss" scoped>
.filter {
  background-color: lightgrey;
  padding: 10px;
  display: flex;
  justify-content: center;
  column-gap: 15px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(4, 200px);
  row-gap: 50px;
  column-gap: 30px;
  justify-items: center;
  width: 890px;
  margin: 50px auto 100px auto;
  @media screen and (max-width: 930px) {
    grid-template-columns: repeat(3, 200px);
    width: 660px;
  }
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(2, 200px);
    width: 430px;
  }
}
</style>
