import { ref } from "@vue/reactivity";
import useRequest from "./useRequest";
interface Product {
  [key:string]:unknown
    
}


export default async function useProduct() {
    const { response: products, request } = useRequest<Product[]>('https://ecomm-products.modus.workers.dev/')
    const loaded = ref(false);
    if (loaded.value === false) { 
        await request();
        loaded.value = true
    }
    return { products }
}