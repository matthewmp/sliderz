// Create and append all elements for sliderz


export const sliderz_wrapper = document.createElement('div');
export const sliderz_track = document.createElement('div');
export const sliderz_head = document.createElement('div');
// Build main elements for slider
window.onload = function(){
	

	// Add IDs
	sliderz_wrapper.setAttribute('id', 'sliderz_wrapper');
	sliderz_track.setAttribute('id', 'sliderz_track');
	sliderz_head.setAttribute('id', 'sliderz_head');

	// Append divs to each other
	sliderz_track.appendChild(sliderz_head);
	sliderz_wrapper.appendChild(sliderz_track);

	// Add all elements to document
	document.body.appendChild(sliderz_wrapper);
}