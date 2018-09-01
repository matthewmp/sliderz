import { createElementsAttributes } from './elements';
import * as listeners from './event_listeners';
import { addDividers } from './dividers';

document.addEventListener("DOMContentLoaded", function(event) { 
	// Create all elements for sliders
	createElementsAttributes();

	// Activate all listeners
	listeners.resizeListener();
	listeners.track_listener();

	// Add dividers to slider
	addDividers();
});