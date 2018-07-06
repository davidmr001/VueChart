import Chart from 'chart.js';

let Chart_helpers_mergeData = function(target, source) {
	if (target === source) {
		return target;
	}
	if (Chart.helpers.isArray(source)) {
		if (Chart.helpers.isArray(target)) {
			for (let i = 0, ii = Math.min(target.length, source.length); i < ii; ++i) {
				target[i] = Chart_helpers_mergeData(target[i], source[i]);
			}
			if (target.length < source.length) {
				target.push(...source.slice(target.length));
			} else
			if (target.length > source.length) {
				target.splice(source.length);
			}
			return target;
		}
	} else
	if (Chart.helpers.isObject(source)) {
		if (Chart.helpers.isObject(target)) {
			for (let key in target) {
				if (!key.startsWith('_') && target.hasOwnProperty(key) && source.hasOwnProperty(key)) {
					target[key] = Chart_helpers_mergeData(target[key], source[key]);
				}
			}
			for (let key in target) {
				if (!key.startsWith('_') && target.hasOwnProperty(key) && !source.hasOwnProperty(key)) {
					delete target[key];
				}
			}
			for (let key in source) {
				if (!key.startsWith('_') && source.hasOwnProperty(key) && !target.hasOwnProperty(key)) {
					target[key] = source[key];
				}
			}
			return target;
		}
	}
	return source;
};

export default Chart_helpers_mergeData;
