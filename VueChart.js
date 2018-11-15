(function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b(require("chart.js")):"function"==typeof define&&define.amd?define(["chart.js"],b):a.VueChart=b(a.Chart)})(this,function(a){"use strict";a=a&&a.hasOwnProperty("default")?a["default"]:a;var b=function(c,d){var e=Math.min;if(c===d)return c;if(a.helpers.isArray(d)){if(a.helpers.isArray(c)){for(var f=0,g=e(c.length,d.length);f<g;f++)c[f]=b(c[f],d[f]);return c.length<d.length?c.push.apply(c,d.slice(c.length)):c.length>d.length&&c.splice(d.length),c}}else if(a.helpers.isObject(d)&&a.helpers.isObject(c)){for(var h in c)!h.startsWith("_")&&c.hasOwnProperty(h)&&(d.hasOwnProperty(h)?c[h]=b(c[h],d[h]):delete c[h]);for(var j in d)j.startsWith("_")||!d.hasOwnProperty(j)||c.hasOwnProperty(j)||(c[j]=d[j]);return c}return d},c={name:"VueChart",props:{data:Object,options:Object,type:String,updateConfig:Object},mounted:function(){var a,b=this;this.$watch(function(){a=b.updateChart(a)})},methods:{updateChart:function(c){var d=this,e=d.$refs,f=d.data,g=d.options,h=d.type,i=d.updateConfig;if(f=a.helpers.clone(f),g=a.helpers.clone(g),c){if(c.config.type===h)return b(c.data,f),b(c.options,g),c.update(i),c;c.destroy()}return new a(e.canvas,{type:h,data:f,options:g})}},render:function(a){return a("div",{style:{height:"100%",position:"relative",width:"100%"}},[a("div",{style:{bottom:0,left:0,position:"absolute",right:0,top:0}},[a("canvas",{ref:"canvas"})])])}};return"undefined"!=typeof window&&window.Vue&&window.Vue.component(c.name,c),c});
