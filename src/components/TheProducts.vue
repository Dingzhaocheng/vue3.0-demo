<template>
  <div >
    <p class="mb-6 text-lg text-gray-800">你好：{{name}}请点击</p>
    <button
      class="p-8 text-center text-white bg-yellow-300 rounded shadow text-base"
      type="button"
      @click="addNum()"
    >
      {{ num }} ---双倍快乐 {{ double }}
    </button>
    <!--  <div class="p-10">{{products}}</div>  -->
    <ul class="w-full text-sm " >
      <li v-for="product in products" :key="product.id"> {{ product.title }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import useCount from "@/composables/core";
import useProduct from "@/composables/useProduct";
export default defineComponent({
  name: "TheProduct",
  props: {
    name: String,
  },
  // 不能被结构，解构会失去其响应性。如果要解构，请使用toRefs()
  setup: async () => {
    /* const name = props.name; */
    let count = ref(0);
    const {products} = await useProduct();
    const { num, double, addNum } = useCount();

    return { count, num, double, addNum, products };
  },
});
</script>

<style module>
</style>
