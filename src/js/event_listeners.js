import  * as el from './elements';
import * as dividers from './dividers';
import { findNearest, snapHeadToTrack } from './head';
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

