var t=Object.defineProperty,e=Object.prototype.hasOwnProperty,s=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,n=(e,s,r)=>s in e?t(e,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[s]=r,o=(t,o)=>{for(var a in o||(o={}))e.call(o,a)&&n(t,a,o[a]);if(s)for(var a of s(o))r.call(o,a)&&n(t,a,o[a]);return t};import{s as a,j as u,x as l,b as c,y as d,o as p,c as m,a as i,t as b,F as y,z as f}from"./vendor.4915549f.js";async function w(){const{response:t,request:e}=function(t,e){const s=c();return{response:s,request:async()=>{const r=await fetch(t,e),n=await r.json();s.value=n}}}("https://ecomm-products.modus.workers.dev/"),s=c(!1);return!1===s.value&&(await e(),s.value=!0),{products:t}}var v=d({name:"TheProduct",setup:async()=>{let t=c(0);const{products:e}=await w(),{num:s,double:r,addNum:n}=function(){const t=a({num:0,double:u((({num:e}=t)=>2*e))});return o(o({},l(t)),{addNum:()=>t.num++})}();return{count:t,num:s,double:r,addNum:n,products:e}}});const x={class:"mb-6 text-lg text-gray-800"},j={class:"w-full text-sm "};(v.__cssModules={}).$style={},v.render=function(t,e,s,r,n,o){return p(),m("div",null,[i("p",x,"你好："+b(t.name)+"请点击",1),i("button",{class:"p-8 text-center text-white bg-yellow-300 rounded shadow text-base",type:"button",onClick:e[1]||(e[1]=e=>t.addNum())},b(t.num)+" ---双倍快乐 "+b(t.double),1),i("ul",j,[(p(!0),m(y,null,f(t.products,(t=>(p(),m("li",{key:t.id},b(t.title),1)))),128))])])};export default v;
