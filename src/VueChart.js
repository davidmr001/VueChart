import Chart from 'chart.js';

import Chart_helpers_mergeData from '/utils/Chart/helpers/mergeData';

export default {
	name: 'VueChart',

	props: {
		type: String,
		data: Object,
		options: Object,
		updateConfig: Object,
	},

	mounted() {
		this.$watch(() => {
			let {
				$refs,
				chart,
				data,
				options,
				type,
				updateConfig,
			} = this;
			data = Chart.helpers.clone(data);
			options = Chart.helpers.clone(options);
			if (chart) {
				if (chart.config.type === type) {
					Chart_helpers_mergeData(chart.data, data);
					Chart.helpers.merge(chart.options, options);
					chart.update(updateConfig);
					return;
				}
				chart.destroy();
			}
			chart = new Chart($refs.canvas, {type, data, options});
			Object.assign(this, {chart});
		});
	},

	render(createElement) {
		let canvasElement = createElement(
			'canvas',
			{
				ref: 'canvas',
			},
		);
		let canvasContainerElement = createElement(
			'div',
			{
				style: {
					position: 'absolute',
					top: 0,
					right: 0,
					bottom: 0,
					left: 0,
				},
			},
			[canvasElement],
		);
		let mainElement = createElement(
			'div',
			{
				style: {
					position: 'relative',
					width: '100%',
					height: '100%',
				},
			},
			[canvasContainerElement],
		);
		return mainElement;
	},
};
