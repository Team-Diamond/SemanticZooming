import React from 'react';
import {zoomStyle, createZoomedElement} from '../actions/Zoomable.js'

var views = [
	{className: "content", levels :[
		{ view: 0, styles:[
			{name: "maxHeight", value: "auto"},
			{name: "maxWidth", value: "100%"},
			{name: "border", value: "1px solid black"}
		]},
		{ view: -1, styles:[
			{name: "maxHeight", min:300, max:500, unit:"px"},
			{name: "maxWidth", value:"33%"}
		]},
		{ view: -2, styles: [
			{name: "maxHeight", min:200, max:400, unit:"px"},
			{name: "maxWidth", value:"33%"}
		]},
		{ view: -3, styles: [
			{name: "maxHeight", min:125, max: 200, unit:"px"},
			{name: "maxWidth", value:"25%"}
		]}
	]}
];

export class Subsection extends React.Component{
	constructor(props){
		super(props);
		this.state = {};
	}

	render(){
		console.log(this.props.content);
		const content = this.props.content;
		const depth = this.props.depth
		const zoom = this.props.zoom;		
		const title = content.title;
		console.log("Creating Subsection: " + title);
		const outlineNumber = content.outline_number;
		const thisLevelHTML = content.content_HTML;

		const sectionContent = thisLevelHTML.map(function(element){
			return createZoomedElement(element, views, depth, zoom);
		});
		const subsections = content.subsections.map(function(subsection, i){
			return <Subsection content={subsection} depth={depth+1} zoom={zoom} key={"section_" + subsection.outline_number}/>;
		});
		
		return (
			<div className="content-container" style={zoomStyle("content-container", views, depth, zoom)}>
				<h2>{title}</h2>
				<div className="content" style={zoomStyle("content", views, depth, zoom)}>
					{sectionContent}
				</div>
				{subsections}
			</div>
		);
	}
}