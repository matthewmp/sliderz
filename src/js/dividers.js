
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
			existingDividers[0].parentNode.children[1].remove();
		}
	}

	// Grab parent element
	let container = document.getElementById('sliderz');

	// Get range values
	let d_min = container.dataset.min;
	let d_max = container.dataset.max;

	// Grab track
	let track = document.getElementById('sliderz_track')

	// Calculate space between dividers
	let initialLength = Math.ceil(track.offsetWidth / d_max - 1);
	let dividersLength = initialLength + (initialLength / d_max);
	let spacing = 0;

	// Clear divider locations
	dividerLocations.length = 0;

	// Add correct amount of dividers with equal spacing
	for(let i = 0; i < d_max; i++){
		
		// Create element and basic style
		let divider = document.createElement('div');
		divider.classList.add('divider');
		divider.style.position = 'absolute';
		divider.style.width = '2px';
		divider.style.height = '10px';
		divider.style.top = '10px';
		divider.style.background = '#000';
		console.log('resizing');
		divider.style.left = `${spacing + 1}px`;
		
		// Add each unit of separation between dividers to dividerLoacations
		dividerLocations.push(spacing);

		spacing += dividersLength;

		// If last set to very end
		if(i === d_max - 1){
			console.log('MAX', parseInt(divider.style.width) /2);
			divider.style.left = `${track.offsetWidth - (Math.ceil(parseInt(divider.style.width)))}px`;
		}

		// Add divider to track
		track.appendChild(divider);
	}
}