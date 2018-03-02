import React from 'react';

/**
 * Takes a JSX element and adds inline styles based on the rules in the views of the component 
 *	and the current zoom level
 *
 * @param {JSX} element - the element to be styled
 * @param {[Object]} - the JSON views defined as such: 
 *		[zoom:int, elements:[selector:string, styles:[name:string, min:float, max:float]]]
 * @param {float} zoom - the current zoom level on a scale from -2 to 2
 */
export function zoom(element, views, zoom){
	var zoomLayer = Math.floor(zoom);
	var zoomLayerPosition = zoom - zoomLayer;

	var elements = views.find(e => e.zoom == zoomLayer).elements;
}