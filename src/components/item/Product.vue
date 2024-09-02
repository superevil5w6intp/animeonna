<script setup>
import goods_img from "@/assets/image/goods_img.png";
import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },

  item: {
    type: Array,
  },
});
const thumb = computed(() => {
  return props.item.img[0];
});

function onClick() {
  router.push({
    name: "detail",
    params: { id: props.id },
    state: { ...props.item },
  });
}
</script>
<template>
  <div class="product" @click="onClick">
    <img class="image" :src="thumb" />
    <span>{{ item.name }}</span>
    <span>{{ item.price.toLocaleString() }}원</span>
  </div>
</template>
<style lang="scss" scoped>
.product {
  height: 300px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: box-shadow 1s;
  border: 1px solid lightgrey;
  padding: 10px;
  box-sizing: border-box;
  &:hover {
    box-shadow: blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 5px -5px 0px -3px,
      rgb(31, 193, 27) 5px -5px, rgb(255, 255, 255) 10px -10px 0px -3px,
      rgb(255, 217, 19) 10px -10px, rgb(255, 255, 255) 15px -15px 0px -3px,
      rgb(255, 156, 85) 15px -15px, rgb(255, 255, 255) 20px -20px 0px -3px,
      rgb(255, 85, 85) 20px -20px;
  }
  & > span {
    font-size: 14px;
    line-height: 1.5;
  }
}
.image {
  height: 195px;
  width: 180px;
  object-fit: cover;
  /* background-image: url(v-bind('thumb')); */
}
</style>
