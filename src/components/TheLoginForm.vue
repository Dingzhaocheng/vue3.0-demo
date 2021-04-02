<template>
  <form
    class="w-1/2 md:w-60 lg:w-80 p-5 border-1 border-indigo-500 rounded hover:shadow"
    @submit.prevent="$emit('submit')"
  >
    <div class="">
      <label class="text-sm" for="userName">用户名：</label>
      <input
        class="text-sm rounded focus:border-indigo-600 border-1 w-full"
        placeholder="请输入用户名"
        v-model="nameState"
        type="text"
        name="userName"
      />
    </div>
    <div class="mt-2">
      <label class="text-sm" for="password">密码：</label>
      <input
        class="text-sm rounded focus:border-indigo-600 border-1 w-full"
        placeholder="请输入密码"
        v-model="passwordState"
        type="password"
        name="password"
      />
    </div>
    <div class="text-center h-10 mt-8">
      <button
        class="rounded text-sm w-full bg-blue-600 text-white pt-2 pb-2 active:bg-blue-900"
        type="submit"
      >
        登录
      </button>
    </div>
  </form>
</template> 

<script>
import { useVModel } from "@/composables/useVModel";
export default {
  emits: ["update:name", "update:password", "submit"],
  props: {
    name: String,
    password: String,
  },
  setup(props) {
    return {
      nameState: useVModel(props, "name"),
      passwordState: useVModel(props, "password"),
    };
  },
};
</script>

<style scoped>
</style>