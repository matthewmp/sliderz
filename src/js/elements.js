import * as listeners from './event_listeners';

// Create and append all elements for sliderz

export const sliderz_wrapper = document.createElement('div');
export const sliderz_track = document.createElement('div');
export const sliderz_head = document.createElement('div');


// This will hold the width of the slider track
export let trackSize = 0;

// Set initial values of container and data attributes
export let container = null;
export let d_dividers = null; // number of dividers data attribute
export let d_id = null // id of related input to match value
export let d_class = null // class of related input to match value
export let d_jq_selector = null // jquery selector if one
export let d_min = null // min data attribute
export let d_max = null // max data attribute
export let d_step = null // step data attribute

// Build main elements for slider

export const createElementsAttributes = () => {
	// Grab container
	container = document.getElementById('sliderz'); 

	// Grab container attributes
	d_dividers = container.dataset.dividers;
	d_id = container.dataset.id || null;
	d_class = container.dataset.class || null;
	d_min = container.dataset.min;
	d_max = container.dataset.max;
	d_step = container.dataset.step;
	d_jq_selector = container.dataset.jq || null;
	console.log('elements: ', d_id, d_class, d_jq_selector);
	
	// Add IDs
	sliderz_wrapper.setAttribute('id', 'sliderz_wrapper');
	sliderz_track.setAttribute('id', 'sliderz_track');
	sliderz_head.setAttribute('id', 'sliderz_head');

	// Append divs to each other
	sliderz_track.appendChild(sliderz_head);
	sliderz_wrapper.appendChild(sliderz_track);

	// Add all elements to document
	container.appendChild(sliderz_wrapper);
}