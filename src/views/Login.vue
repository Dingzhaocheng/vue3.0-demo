<template>
  <div :class="$style.container">
    <div :class="$style.aside">
      <section class="text-white">
        <div class="flex items-center">
          <p class="text-4xl">Piper</p>
          <svg
            class="h-11"
            id="icons"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
          >
            <title>bird-message</title>
            <g id="bird-message">
              <path
                d="M38,34h2A18,18,0,0,1,26,45.74,12,12,0,0,1,38,34Z"
                fill="#ffd259"
              />
              <path
                d="M20,46A17.38,17.38,0,0,1,3.33,33.53L2,28H20"
                fill="#ffd259"
              />
              <path
                d="M20,28l.05,4c.23-2.64,1.4-9,3.17-10.78A11,11,0,0,1,31,18a10,10,0,0,1,7.07,2.93A10.65,10.65,0,0,1,39,22a10,10,0,0,1,2,6,17.84,17.84,0,0,1-1,6H38A12,12,0,0,0,26,45.74,17.55,17.55,0,0,1,23,46H20"
                fill="#60deae"
              />
              <path
                d="M9,28a15.3,15.3,0,0,1,4-10l7,10v8l-5-7Z"
                fill="#60deae"
              />
              <path
                d="M40,12H31a1,1,0,0,1-1-1V3a1,1,0,0,1,1-1H45a1,1,0,0,1,1,1v8a1,1,0,0,1-1,1H44"
                fill="#fff"
              />
              <path
                d="M9,28a15.3,15.3,0,0,1,4-10l7,10"
                fill="none"
                stroke="#423e5e"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
              <path
                d="M20,42v4h3a17.55,17.55,0,0,0,3-.26A18,18,0,0,0,41,28a10,10,0,0,0-2-6,10.65,10.65,0,0,0-.93-1.07A10,10,0,0,0,31,18,11,11,0,0,0,20.05,28c0,.33-.05.66-.05,1v1"
                fill="none"
                stroke="#423e5e"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
              <path
                d="M20,38A10,10,0,0,0,10,28H2l1.33,5.53A17.38,17.38,0,0,0,20,46"
                fill="none"
                stroke="#423e5e"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
              <path
                d="M40,34H38A12,12,0,0,0,26,45.74,2.26,2.26,0,0,0,26,46"
                fill="none"
                stroke="#423e5e"
                stroke-linejoin="round"
                stroke-width="2"
              />
              <polyline
                points="41 18 39 22 43 21"
                fill="none"
                stroke="#423e5e"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
              <circle
                cx="33.5"
                cy="24.5"
                r="0.5"
                fill="none"
                stroke="#423e5e"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
              <path
                d="M40,12H31a1,1,0,0,1-1-1V3a1,1,0,0,1,1-1H45a1,1,0,0,1,1,1v8a1,1,0,0,1-1,1H44"
                fill="none"
                stroke="#423e5e"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
              <line
                x1="34"
                y1="7"
                x2="42"
                y2="7"
                fill="none"
                stroke="#423e5e"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </g>
          </svg>
        </div>

        <p class="text-xl mt-2">渐进式的企业办公平台</p>
        <div class="flex items-center mt-2">
          <p class="text-xl">点击这里</p>
          <button class="p-0.5 bg-blue-500 text-sm">了解更多</button>
        </div>
      </section>
    </div>
    <div
      class="w-2/5 h-full flex flex-col flex-nowrap justify-start items-center"
    >
      <h3 class="text-lg text-center">Piper</h3>
      <p class="mb-5 mt-2 text-xs">
        还未注册，点击这里<a class="underline text-blue-500 cursor-pointer"
          >注册</a
        >
      </p>
      <the-login-form
        v-model:name="loginForm.userName"
        v-model:password="loginForm.userPassword"
        :loading="loading"
        @submit="onSubmit"
      >
      </the-login-form>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, ref } from "vue";
import TheLoginForm from "@/components/TheLoginForm.vue";
import useStore from "@/store/store";
import { useRouter } from "vue-router";

export default {
  name: "Login",
  components: { TheLoginForm },

  setup() {
    const loginForm = reactive({
      userName: "",
      userPassword: "",
    });
    const loading = ref(false);
    const { store, setPIPERTOKEN } = useStore();
    const router = useRouter();

    const onSubmit = () => {
      loading.value = true;

      setTimeout(() => {
        setPIPERTOKEN("dingzhaocheng");

        loading.value = false;
        router.push({
          name: "Home",
        });
      }, 3000);
    };

    return { loginForm, onSubmit, loading };
  },
};
</script>

<style module>
.container {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  @apply w-screen;
}

.aside {
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 19rem;
  @apply bg-blue-500;
  @apply h-screen;
  width: 60%;
  background: url("https://dingzhaocheng.obs.cn-north-4.myhuaweicloud.com/bg2.jpg")
    no-repeat;
  background-size: cover;
  background-position: 0 0;
}
</style>