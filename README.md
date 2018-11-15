# VueChart

A simple wrapper for Chart.

## dependencies

- [Chart](https://github.com/chartjs/Chart.js)

## setup

### npm

```shell
npm install vuechart
```

### ES module

Register the component globally.

```javascript
import Vue from 'vue';
import VueChart from 'vuechart';

Vue.component(VueChart.name, VueChart);
```

*or*

Register the component in the scope of another component.

```javascript
import VueChart from 'vuechart';

export default {
  components: {
    [VueChart.name]: VueChart,
  },
  /*...*/
};
```

### browser

```html
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/chart.js/dist/Chart.min.js"></script>
<script src="https://unpkg.com/vuechart"></script>
```

If Vue is detected, the component will be registered automatically.

## usage

```html
<vue-chart
  :data="chartData"
  :options="{scales: {yAxes: [{ticks: {beginAtZero: true}}]}}"
  :update-config="{duration: 800, easing: 'easeOutBounce'}"
  type="bar"
/>
```

## properties

| property | type | description |
| ---: | :--- | :--- |
| `data` | `Object` | The data of the chart. |
| `options` | `Object` | The configuration options of the chart of the current type. |
| `type` | `String` | The type of the chart. Changing the value will recreate the chart. |
| `update-config` | `Object` | The additional configuration for the update process. |
