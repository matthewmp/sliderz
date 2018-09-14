import { allocateDataLocations } from './data';

// This will store the locations in pixels of all dividers
// to be used to position them and to snap head to each one
export const dividerLocations = [];


// Add all dividers on initialization and on resize
export const addDividers = () => {

	// Grab all existing dividers
	let existingDividers = document.getElementsByClassName('divider');

	// Remove all existing dividers
	if(existingDividers){
			while(existingDividers[0]){
			existingDividers[0].parentNode.removeChild(existingDividers[0]);
		}
	}

	// Grab parent element
	let container = document.getElementById('sliderz');

	// Get range values
	let d_min = container.dataset.min;
	let steps = container.dataset.step;
	let d_dividers = Math.round((parseInt(container.dataset.max)) / steps);

	// Grab track
	let track = document.getElementById('sliderz_track')
	console.log('Track Width: ', track.offsetWidth);
	// Calculate space between dividers
	let initialLength = track.offsetWidth / d_dividers;
	console.log('Initial Length: ', initialLength);
	let dividersLength = initialLength + (initialLength / d_dividers);
	console.log('Dividers Length: ', dividersLength);
	let spacing = 0;

	// Clear divider locations
	dividerLocations.length = 0;

	// Add correct amount of dividers with equal spacing
	for(let i = 0; i < d_dividers; i++){
		console.log('Spacing: ', spacing);
		// Create element and basic style
		let divider = document.createElement('div');
		divider.classList.add('divider');
		divider.style.width = '2px';
		divider.style.left = `${spacing + 1}px`;
		
		// Add each unit of separation between dividers to dividerLoacations
		dividerLocations.push(spacing);

		spacing += dividersLength;

		// If last set to very end
		if(i === d_dividers - 1){
			divider.style.left = `${track.offsetWidth - (Math.ceil(parseInt(divider.style.width)))}px`;
		}

		// Add divider to track
		track.appendChild(divider);

		// Clear divider width.  It was needed to align the dividers initially
		// but removed as to let it be styled by user without having to use !important
		divider.style.width = '';
	}
	allocateDataLocations();
}