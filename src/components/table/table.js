import { reactive, toRefs, onMounted } from "vue";
import axios from "axios";
const TableHeader = [
    {
        name: "地区",
        name_en: "continentName"
    },
    {
        name: "国家",
        name_en: "countryName",
    },
    {
        name: "省份/国家",
        name_en: "provinceName",
    },
    {
        name: "今日确诊人数",
        name_en: "currentConfirmedCount"
    },
    {
        name: "疑似病例",
        name_en: "suspectedCount"
    }, {
        name: "累计死亡人数",
        name_en: "deadCount"
    }
];
export default function stateMap() {
    const state = reactive({
        covidInfo: [],
        tableHeader: TableHeader,
    });
    onMounted(async () => {
        const res = await fetchInfo();
        state.covidInfo = res.data.results;

    });
    const fetchInfo = () => {
        return axios.get("https://lab.isaaclin.cn/nCoV/api/area?latest=true");
    };

    return {
        ...toRefs(state),
    };
}
