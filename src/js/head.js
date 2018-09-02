import { dividerLocations } from './dividers';
import * as el from './elements';
import { setCurrentValueOfDataLocation } from './data';

// This object will hold the mouse state on head
export const head_mouse_obj = {
	down: false,
	move: false,
	up: true
}

// Current divider location index to adjust head position
let headPositionIndex;

// Will be used to calculate width of head for more precise
// positioning
let width;

// Find nearest value to snap head to dvider along track
export const findNearest = (arr, num) => {
	num = Math.floor(num);
	let currentIndex = 0;
	let currentValue = arr[0];

	arr.forEach((element, ind, arr) => {
			const val1 = Math.abs(num - currentValue);
			const val2 = Math.abs(num - (arr[ind+1]));
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

	// Everything in if statement is only relevant for a click event
	// on the track which needs the event object.  If called w/o an event
	// object this code block is ignored, which likely means it was called
	// due to a window resize event

	if(e){
		// If click is on slider head calculate click coordinate
		// relative to track
		if(e.target.id !== 'sliderz_track'){
			rect = e.target.offsetParent.getBoundingClientRect();

		} else {
			rect = e.target.getBoundingClientRect();
		}
		
		// Clicked coordinate
		const xPos = e.clientX - rect.left;

		// Move head to position
		el.sliderz_head.style.left = `${xPos}px`;

		// Get head width to adjust position
		width = el.sliderz_head.offsetWidth;

		// Find nearest snap location for divider and position head there
		headPositionIndex = findNearest(dividerLocations, (e.clientX - rect.left));
		el.sliderz_head.style.left = `${dividerLocations[headPositionIndex] + (width / 2)}px`;
	} 

	
	if(!e){
		// Get head width to adjust position
		width = el.sliderz_head.offsetWidth;
		
		// Find nearest snap location for divider and position head there
		el.sliderz_head.style.left = `${dividerLocations[headPositionIndex] + (width / 2)}px`;
	}

	// Find index of last dividerLocation
	const lastDividerIndex = dividerLocations.length-1;

	// If head is being snapped to last divider adjust head position
	// to make up for any spacing discrepencies
	if(headPositionIndex === lastDividerIndex){
		
		// Get pixel position of last divider and adjust head to that position
		const allDividers = document.getElementsByClassName('divider');
		const lastDivider = allDividers[allDividers.length-1];
		const lastDividerPosition = lastDivider.offsetLeft;
		el.sliderz_head.style.left = `${lastDividerPosition}px`;
	}

	setCurrentValueOfDataLocation(headPositionIndex);
}

export const mouse_down = (e) => {
	head_mouse_obj.up = false;
	head_mouse_obj.down = true;
	startX = e.clientX;
}

export const mouse_up = (e) => {
	head_mouse_obj.down = false;
	head_mouse_obj.up = true;
}

export const mouse_move = (e) => {
	moveHead(e);
	let startX = e.clientX;
}

let startX;
let lastX;
let diffX;
export const moveHead = (e) => {
	if(head_mouse_obj.down){
		lastX = e.clientX;
		diffX = lastX - startX;
		
		let currentX = parseInt(sliderz_head.style.left);
		let newX = currentX + diffX;
		sliderz_head.style.left = `${newX}px`;
	}
}












