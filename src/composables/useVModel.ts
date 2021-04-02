
import { computed, getCurrentInstance } from "@vue/runtime-core";

interface propInterface {
    [key: string]: string | undefined,
    name: string | undefined,
    password: string | undefined
}
export const useVModel = (props: propInterface, propName: string) => {
    const vm = getCurrentInstance()?.proxy
    return computed({
        get() {
            return props[propName]
        },
        set(value) {
            if (vm) {
                vm.$emit(`update:${propName}`, value)
            }

        }

    })
}