import { reactive, Ref } from "@vue/reactivity";
import Cookie from "js-cookie";


export default function useStore() {
    const store = reactive({
        PIPER_TOKEN: Cookie.get('PIPER_TOKEN')
    })

    const setPIPERTOKEN: (token: string) => void = (token: string) => {
        if (token) {
            Cookie.set("PIPER_TOKEN",token)
            store.PIPER_TOKEN = token;
        }
        
    }

    return {store,setPIPERTOKEN}
}