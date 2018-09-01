// This file is to manipulate the values and steps of slider

import {d_min, d_max, d_step} from './elements';




// This will store the associated values with each step
export const dataLocations = [];

export const allocateDataLocations = () => {
	// Clear all data locations
	dataLocations.length = 0;

	const min = parseInt(d_min);
	const max = parseInt(d_max);
	const step = parseInt(d_step);
	let currentValue = parseInt(min);

	// Push all values for data locations based on min, max, step
	while(currentValue < max){
		dataLocations.push(currentValue);
		currentValue += step;
	}
}

// Set the input value to the current data location
export const setCurrentValueOfDataLocation = (headIndex) => {

	// Grab selectors if set
	const containers = document.getElementById('sliderz');
	const d_id = containers.dataset.id || null;
	const d_class = containers.dataset.class || null;
	const d_jq_selector = containers.dataset.jq || null;

	// Find input id to store/show value of current head location
	// The order of precedence d_jq_selector, d_id, d_class
	let selector = {};

	if(d_class){
		selector.value = d_class;
		selector.type = 'class';
	}
	if(d_id){
		selector.value = d_id;
		selector.type = 'id';
	}
	if(d_jq_selector){
		selector.value = d_jq_selector;
		selector.type = 'jq';
	}


	const value = dataLocations[headIndex];
	switch(selector.type){
		case 'jq':
			$(selector.value).val(value);
			break;

		case 'id':
			document.getElementById(selector.value).value = value;
			break;

		case 'class':
			document.getElementsByClassName(selector.value)[0].value = value;
			break;

		default:
			console.log('The data-selector attribute is not set');
	}

}


