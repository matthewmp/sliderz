import * as listeners from './event_listeners';

// Create and append all elements for sliderz

export const sliderz_wrapper = document.createElement('div');
export const sliderz_track = document.createElement('div');
export const sliderz_head = document.createElement('div');


// This will hold the width of the slider track
export let trackSize = 0;

// Set initial values
export let container = null;
export let d_min = null;
export let d_max = null;
export let d_width = null;

// Build main elements for slider

export const createElements = () => {
	// Grab container
	container = document.getElementById('sliderz'); 

	// Grab container attributes
	d_min = container.dataset.min;
	d_max = container.dataset.max;
	d_width = container.dataset.width;
	
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