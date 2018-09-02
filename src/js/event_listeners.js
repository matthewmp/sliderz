import  * as el from './elements';
import * as dividers from './dividers';
import { findNearest, snapHeadToTrack, mouse_down, mouse_up, mouse_move } from './head';
import { dividerLocations } from './dividers';

export const resizeListener = () => {
	window.addEventListener('resize', (e) => {

		// Store current width of slider track
		el.trackSize = el.sliderz_track.offsetWidth;
		dividers.addDividers();
		snapHeadToTrack();
	});
}

// Listen for click on sliderz track
export const track_listener = () => {
	// Add event listener to track
	el.sliderz_track.addEventListener('click', (e) => {
		snapHeadToTrack(e);
	});
}

// Listen for mousedown on head to prep for dragging head
export const head_listener_down = () => {
	el.sliderz_head.addEventListener('mousedown', (e) => {
		mouse_down(e);
	});
}

// Listen for mousemove on head to prep for dragging head
export const head_listener_move = () => {
	el.sliderz_head.addEventListener('mousemove', (e) => {
		mouse_move(e);
	});
}

// Listen for mousedup on head to prep for dragging head after releasing mouse
export const track_listener_up= () => {
	el.sliderz_track.addEventListener('mouseup', (e) => {
		mouse_up(e);
	});
}

