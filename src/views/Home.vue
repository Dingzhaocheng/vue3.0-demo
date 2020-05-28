<template>
  <div class="home">
    <div class="dark-mode">
      <Table />
    </div>
    <h3 class="title">该页面仅供学习参考，请勿用作其他用途</h3>
  </div>
</template>

<script>
// @ is an alias to /src
import Table from "@/components/table/table.vue";

export default {
  name: "Home",
  components: {
    Table,
  },
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.home {
  background-color: #0c142c;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  .dark-mode {
    width: 80%;
    margin: 10px auto;
    border-radius: 5px;
  }
  .title{
    color: #fff;
    font-size: 14px;
    font-weight: 600;
  }
}
</style>
