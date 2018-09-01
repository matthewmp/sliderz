import { dividerLocations } from './dividers';
import * as el from './elements';

// Flag head on mouse down event
head_MD = false;
// Find nearest value to snap head to dvider along track
export const findNearest = (arr, num) => {
	num = Math.floor(num);
	let currentIndex = 0;
	let currentValue = arr[0];

	arr.forEach((element, ind, arr) => {
			let val1 = Math.abs(num - currentValue);
			let val2 = Math.abs(num - (arr[ind+1]));
			if(val1 <= val2 || isNaN(val2)){
				currentValue = currentValue;
				currentIndex = currentIndex;	
			} else {
				currentValue = arr[ind+1];
				currentIndex = ind+1;
			}
	});
	return currentIndex;
}

export const snapHeadToTrack = (e) => {
	let rect;

	// If click is on slider head calculate click coordinate
	// relative to track
	if(e.target.id !== 'sliderz_track'){
		rect = e.target.offsetParent.getBoundingClientRect();
	} else {
		rect = e.target.getBoundingClientRect();
	}
	
	// Clicked coordinate
	let xPos = e.clientX - rect.left;

	// Move head to position
	el.sliderz_head.style.left = `${xPos}px`;

	// Get head width to adjust position
	let width = el.sliderz_head.offsetWidth;

	// Find nearest snap location for divider and position head there
	let headPositionIndex = findNearest(dividerLocations, (e.clientX - rect.left));
	el.sliderz_head.style.left = `${dividerLocations[headPositionIndex] + (width / 2)}px`;
}

export const dragHead = (e) => {

}










