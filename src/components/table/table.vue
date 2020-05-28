<template>
  <div>
    <div class="container">
      <table class="table" cellspacing="0" cellpadding="0">
        <caption>
          Covid Data Explorer
        </caption>
        <thead>
          <tr>
            <th v-for="(item, index) in tableHeader" :key="index">
              {{ item.name }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in covidInfo" :key="index">
            <td v-for="(e, k) in tableHeader" :key="k">
              {{ item[e.name_en] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
/* import {reactive,toRefs,onMounted} from "vue"; */
import stateMap from "./table";
export default {
  setup() {
    let { covidInfo, tableHeader } = stateMap();

    return {
      covidInfo,
      tableHeader,
    };
  },
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.container {
  background-color: #141c2c;
  border-radius: 5px;
  box-shadow: 0 0 3px 1px #141c2c;
  max-height: 500px;
  overflow-y: auto;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  .table {
    margin: 10px auto;

    caption {
      text-align: center;
      color: #fff;
      height: 40px;
      line-height: 40px;
      font-size: 20px;
    }
    th,
    td {
      padding: 0.65em;
    }

    th {
      color: #fff;
    }

    td {
      border: 1px solid #fff;
      text-align: center;
    }
  }
}
</style>
