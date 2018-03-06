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
export function zoomStyle(className, views, zoom){
	console.log("Starting to zoom the style; className: " + className)
	var zoomLayer = Math.floor(zoom);
	var zoomLayerPosition = zoom - zoomLayer;
	var classNames = className.split(" ").filter((x) => x);
	var style = {};
	//Find the set of rules for styling this element by className
	var elementStyle = views.find(s => classNames.find(name => s.className === name ) );

	if(elementStyle){
		//Loop through every level of zoom to the current one, starting from 0
		for(var i = 0; i <= zoomLayer; i++ ) {
			var elementZoomStyle = elementStyle.levels[i].styles;
			//Loop through every style
			for(var j = 0; j < elementZoomStyle.length; j++){
				let attr = elementZoomStyle[j];
				let name = attr.name;
				let value;
				if(attr.value){
					value = attr.value
				} else{
					if( i < zoomLayer ){
						value = parseFloat(attr.max) + attr.unit;
					}else{
						value = (parseFloat(attr.min) + (parseFloat(attr.max) - parseFloat(attr.min)) * parseFloat(zoomLayerPosition)) + attr.unit;
					}
				}
				style[name] = value;
			}
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
var eleKeyIndex = 0;

export function createZoomedElement(element, views, zoom){
	var TagName = element.tagName;
	var className = element.className;
	var attributes = element.attributes;
	var children = element.children;
	var style = zoomStyle(className, views, zoom);
	console.log(style);
	var key = eleKeyIndex++;

	return (
		<TagName className={className} style={style} {...attributes} key={key}>
			{children && children.map((e) => typeof e === "string" ? e : createZoomedElement(e, views, zoom))}
		</TagName>
	);
}