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
    <div class="h-10 mt-8">
      <button
        class="rounded text-sm w-full pt-2 pb-2  text-center bg-blue-600 text-white  active:bg-blue-900"
        type="submit"
      >
        <svg
          v-show="loading"
          class="animate-spin mt-0 mb-0 ml-auto mr-auto w-5 h-5"
          
          version="1.1"
          id="loader"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          
          viewBox="0 0 50 50"
          style="enable-background: new 0 0 50 50;" 
          xml:space="preserve"
        >
          <path
            fill="#ffffff"
            d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
          ></path>
        </svg>
      
       <span v-show="!loading">登录</span> 
      </button>
    </div>
  </form>
</template> 

<script >
import { useVModel } from "@/composables/useVModel";
import { ref } from '@vue/reactivity';
export default {
  emits: ["update:name", "update:password", "submit"],
  props: {
    name: String,
    password: String,
    loading:Boolean
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