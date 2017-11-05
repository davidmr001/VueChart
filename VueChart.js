!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("vue"),require("chart.js")):"function"==typeof define&&define.amd?define(["vue","chart.js"],e):t.VueChart=e(t.Vue,t.Chart)}(this,function(t,e){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t,e=e&&e.hasOwnProperty("default")?e.default:e;var a={name:"VueChart",render:function(t){return t("canvas")},props:{type:String,data:Object,options:Object,updateConfig:Object},mounted:function(){this.createChart()},watch:{type:function(){this.recreateChart()},data:{handler:function(t){this.setChartData(t),this.updateChart()},deep:!0},options:{handler:function(){this.recreateChart()},deep:!0}},methods:{recreateChart:function(){this.destroyChart(),this.createChart()},createChart:function(){this.$el&&(this.chart=new e(this.$el,{type:this.type,data:this.data,options:this.options}))},destroyChart:function(){this.chart&&this.chart.destroy()},setChartData:function(t){this.chart&&(this.chart.data=t)},updateChart:function(){this.chart&&this.chart.update(this.updateConfig)}}};return"undefined"!=typeof window&&t.component(a.name,a),a});
