import { createElementsAttributes } from './elements';
import * as listeners from './event_listeners';
import { addDividers } from './dividers';

module.exports.sliderz = () => {console.log('test')}
document.addEventListener("DOMContentLoaded", function(event) { 
	// Create all elements for sliders
	createElementsAttributes();

	// Activate all listeners
	listeners.resizeListener();
	listeners.track_listener();
	// listeners.head_listener_down();
	// listeners.head_listener_move();
	// listeners.track_listener_up();

	// Add dividers to slider
	addDividers();
});