(function(e){function t(t){for(var r,o,u=t[0],i=t[1],b=t[2],d=0,s=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&s.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(s.length)s.shift()();return a.push.apply(a,b||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==c[i]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},c={app:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var b=0;b<u.length;b++)t(u[b]);var l=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"243d":function(e,t,n){"use strict";n("d575")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("830f"),c=n("5c40"),a=Object(c["A"])("data-v-488a6a67");Object(c["r"])("data-v-488a6a67");var o={id:"app"};Object(c["q"])();var u=a((function(e,t){var n=Object(c["t"])("Home");return Object(c["p"])(),Object(c["g"])("div",o,[Object(c["j"])(n)])})),i=Object(c["A"])("data-v-3cbc7ee0");Object(c["r"])("data-v-3cbc7ee0");var b={class:"home"},l={class:"dark-mode"},d=Object(c["j"])("h3",{class:"title"},"该页面仅供学习参考，请勿用作其他用途",-1);Object(c["q"])();var s=i((function(e,t){var n=Object(c["t"])("Table");return Object(c["p"])(),Object(c["g"])("div",b,[Object(c["j"])("div",l,[Object(c["j"])(n)]),d])})),j=(n("b0c0"),Object(c["A"])("data-v-52717c8e"));Object(c["r"])("data-v-52717c8e");var p={class:"container"},f={class:"table",cellspacing:"0",cellpadding:"0"},O=Object(c["j"])("caption",null," Covid Data Explorer（数据来源于丁香医生） ",-1);Object(c["q"])();var v=j((function(e,t){return Object(c["p"])(),Object(c["g"])("div",null,[Object(c["j"])("div",p,[Object(c["j"])("table",f,[O,Object(c["j"])("thead",null,[Object(c["j"])("tr",null,[(Object(c["p"])(!0),Object(c["g"])(c["c"],null,Object(c["s"])(e.tableHeader,(function(e,t){return Object(c["p"])(),Object(c["g"])("th",{key:t},Object(c["w"])(e.name),1)})),128))])]),Object(c["j"])("tbody",null,[(Object(c["p"])(!0),Object(c["g"])(c["c"],null,Object(c["s"])(e.covidInfo,(function(t,n){return Object(c["p"])(),Object(c["g"])("tr",{key:n},[(Object(c["p"])(!0),Object(c["g"])(c["c"],null,Object(c["s"])(e.tableHeader,(function(e,n){return Object(c["p"])(),Object(c["g"])("td",{key:n},Object(c["w"])(t[e.name_en]),1)})),128))])})),128))])])])])})),m=n("5530"),g=(n("96cf"),n("1da1")),h=n("a1e9"),y=n("bc3a"),_=n.n(y),w=[{name:"地区",name_en:"continentName"},{name:"国家",name_en:"countryName"},{name:"省份/国家",name_en:"provinceName"},{name:"今日确诊人数",name_en:"currentConfirmedCount"},{name:"疑似病例",name_en:"suspectedCount"},{name:"累计死亡人数",name_en:"deadCount"}];function x(){var e=Object(h["g"])({covidInfo:[],tableHeader:w});Object(c["n"])(Object(g["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t();case 2:r=n.sent,e.covidInfo=r.data.results;case 4:case"end":return n.stop()}}),n)}))));var t=function(){return _.a.get("https://lab.isaaclin.cn/nCoV/api/area?latest=true")};return Object(m["a"])({},Object(h["m"])(e))}var k={setup:function(){var e=x(),t=e.covidInfo,n=e.tableHeader;return{covidInfo:t,tableHeader:n}}};n("243d");k.render=v,k.__scopeId="data-v-52717c8e";var H=k,I={name:"Home",components:{Table:H}};n("8428");I.render=s,I.__scopeId="data-v-3cbc7ee0";var P=I,C={name:"App",components:{Home:P}};n("6ff1");C.render=u,C.__scopeId="data-v-488a6a67";var S=C,A=n("5502"),M=A["a"].createStore({state:{},mutations:{},actions:{},modules:{}});Object(r["a"])(S).use(M).mount("#app")},"6ff1":function(e,t,n){"use strict";n("a578")},"825e":function(e,t,n){},8428:function(e,t,n){"use strict";n("825e")},a578:function(e,t,n){},d575:function(e,t,n){}});
//# sourceMappingURL=app.363b6c65.js.map