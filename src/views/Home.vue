<template>
  <div :class="$style.container">
    <div v-if="error">{{ error }}</div>
    <Suspense>
      <template #default>
        <the-products :name="name"></the-products>
      </template>
      <template #fallback>
        <Loading />
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, onErrorCaptured, ref } from "vue";
import Loading from "@/components/Loading.vue";
const TheProducts = defineAsyncComponent({
  loader: () => import("@/components/TheProducts.vue"),
  loadingComponent: Loading,
});
export default {
  components: {
    TheProducts,
    Loading,
  },
  props: {
    id: Number,
  },
  
  setup(props) {
    const id = props.id;
    const error = ref();
    onErrorCaptured((e) => {
      error.value = e;
    });

    const nameList = [
      {
        id: 0,
        name: "肇成",
      },
      {
        id: 1,
        name: "莹莹",
      },
    ];

    let name: string | undefined = nameList.find((v) => v.id === id)?.name;
    if (!name) {
      name = "肇成";
    }

    return {
      name,
      error,
    };
  },
};
</script>
      
<style module>
.container {
  text-align: center;

  @apply w-screen;
  @apply h-screen;
}
</style>