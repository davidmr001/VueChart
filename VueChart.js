!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("chart.js")):"function"==typeof define&&define.amd?define(["chart.js"],e):(t.almete=t.almete||{},t.almete.WordCloud=e(t.Chart))}(this,function(t){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;var e={name:"VueChart",props:{type:String,data:Object,options:Object,updateConfig:Object},watch:{type:function(){this.recreateChart()},data:{handler:function(t){this.setChartData(t),this.updateChart()},deep:!0},options:{handler:function(){this.recreateChart()},deep:!0}},mounted:function(){this.createChart()},beforeDestroy:function(){this.destroyChart()},methods:{recreateChart:function(){this.destroyChart(),this.createChart()},createChart:function(){this.$refs.canvas&&(this.chart=new t(this.$refs.canvas,{type:this.type,data:Reflect_clone(this.data),options:Reflect_clone(this.options)}))},destroyChart:function(){this.chart&&this.chart.destroy()},setChartData:function(t){this.chart&&(this.chart.data=Reflect_clone(t))},updateChart:function(){this.chart&&this.chart.update(this.updateConfig)}},render:function(t){return t("div",{style:{position:"relative",width:"100%",height:"100%"}},[t("canvas",{ref:"canvas"})])}};return"undefined"!=typeof window&&window.Vue&&window.Vue.component(e.name,e),e});
