import React from 'react';

/*
 * Takes a JSX element and compiles a style for it based on the rules in the views of the component 
 *	and the current zoom level
 *
 * @param {String} className - the className of the element to be styled
 * @param {String} tagName - the tagName of the element to be styled
 * @param {[Object]} views - the JSON views defined as such: 
 *		[zoom:int, elements:[selector:string, styles:[name:string, min:float, max:float]]]
 * @param {float} zoom - the current zoom level on a scale from -2 to 2
 *
 * @returns {style} - an object containing style names and values that can be passed to a JSX element
 */
export function zoomStyle(className, tagName, views, zoom){
	var zoomLayer = Math.floor(zoom);
	var zoomLayerPosition = zoom - zoomLayer;
	var classNames = className.split(" ").find(x => x)
	var style = {}
	//Find the set of rules for styling this element, first by className, then by tagName
	var elementsStyles = views.find(e => e.zoom == zoomLayer).elements;
	var elementStyle = elementsStyles.find(s => classNames.find(s.class) );
	if (!elementStyle) elementStyle = elementsStyles.find(s => s.tagName == element.tagName);

	if(elementStyle){
		for(let attr in elementStyle.styles){
			let name = attr.name;
			let value = (attr.min + (attr.max - attr.min) * zoomLayerPosition) + attr.unit;
			style.push({name, value});
		}
		return style;
	} else{
		return null;
	}
}

/*
 * Generates nest JSX elements from JSONified html elements
 *
 * @param {Object} elements - JSON containing information of nested HTML elements in the format:
 *	{"tagName":String, "attributes": [{name:"String", value:value}], "children":[{repeat}]}
 * @param {Object} views - JSON containing the styles at different levels of zoom for the current 
 *	component
 * @param {float} zoom - the current zoom level
 *
 * @returns {JSX} - a JSX element representing the input html styled according to the component's
 *	views and the current zoom level.
*/
export function createZoomedElement(elements, views, zoom){
	var currentElement = elements;
	var TagName = element.tagName;
	var className = element.className;
	var attributes = element.attributes;
	var children = elements.children;
	var style = zoomStyle(className, TagName, views, zoom);

	return (
		<TagName className={className} style={style} {...attributes}>
			{children && children.map((e) => e typeof String ? e : createZoomedElement(e, views, zoom))}
		</TagName>
	);
}