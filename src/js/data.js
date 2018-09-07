// This file is to manipulate the values and steps of slider

import {d_min, d_max, d_step} from './elements';




// This will store the associated values with each step
export const dataLocations = [];

export const allocateDataLocations = () => {
	// Clear all data locations
	dataLocations.length = 0;

	const min = parseInt(d_min);
	const max = parseInt(d_max) + 1;
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
		selector.selectorType = 'class';
	} 
	else if(d_id){
		selector.value = d_id;
		selector.selectorType = 'id';
	}
	else if(d_jq_selector){
		selector.value = d_jq_selector;
		selector.selectorType = 'jq';
	}

	// Value to be punched to input
	const value = dataLocations[headIndex];

	// Find the id type and punch data as long as the propper id classification matches
	// Otherwise log error 'The data-selector attribute is not set correctly'
	if(selector.selectorType === 'jq' && $(selector.value).length > 0){
		var inputSelector = selector.value;
		if($(inputSelector).is('input[type="number"]')){
			$(selector.value).val(parseInt(value));
		} else if($(inputSelector).is('input[type="text"]')){
			$(selector.value).val(value);	
		}
	}
	else if(selector.selectorType === 'id' && document.getElementById(selector.value)){
		var inputSelector = document.getElementById(selector.value);
		if(inputSelector){
			if(inputSelector.type === 'number' && value !== undefined){
				inputSelector.value = parseInt(value);
			} else if(inputSelector.type === 'text' && value !== undefined){
				
				inputSelector.value = value;
			}
		}
	}
	else if(selector.selectorType === 'class' && document.getElementsByClassName(selector.value)[0]){
		var inputSelector = document.getElementsByClassName(selector.value)[0];
		if(inputSelector){
			if(inputSelector.type === 'number' && value !== undefined){
				inputSelector.value = parseInt(value);
			} else if(inputSelector.type === 'text' && value !== undefined){
				
				inputSelector.value = value;
			}
		}
	}
	else {
		console.error('The data-selector attribute is not set correctly');	
	}
}




