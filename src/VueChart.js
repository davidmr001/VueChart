import Chart from 'chart.js';

import Chart_helpers_mergeData from '/utils/Chart/helpers/mergeData';

export default {
	name: 'VueChart',

	props: {
		data: Object,
		options: Object,
		type: String,
		updateConfig: Object,
	},

	mounted() {
		let chart;
		this.$watch(() => {
			chart = this.updateChart(chart);
		});
	},

	methods: {
		updateChart(chart) {
			let {
				$refs,
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
					return chart;
				}
				chart.destroy();
			}
			return new Chart($refs.canvas, {type, data, options});
		},
	},

	render(createElement) {
		return createElement(
			'div',
			{
				style: {
					height: '100%',
					position: 'relative',
					width: '100%',
				},
			},
			[createElement(
				'div',
				{
					style: {
						bottom: 0,
						left: 0,
						position: 'absolute',
						right: 0,
						top: 0,
					},
				},
				[createElement(
					'canvas',
					{
						ref: 'canvas',
					},
				)],
			)],
		);
	},
};
