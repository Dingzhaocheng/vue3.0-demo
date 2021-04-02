import { reactive, toRef, toRefs } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";

interface Params {
    num: number;
    double: number;
    text?: string;
}

interface Params2{
    length:number
}
//泛型约束
function logLength<T extends Params2>(arr:T):T{
    console.log(arr.length)
    return arr
}


export default function useCount() {
  
    const state: Params = reactive({
        num: 0,
        double: computed(({ num } = state) => num * 2)
    })

    const addNum = (): number => {
        return state.num ++
    }

    return {
        ...toRefs(state),addNum
    }
}