import React from 'react';
import {zoomStyle, createZoomedElement} from '../actions/Zoomable.js'

var views = [
	{className: "section-container", levels :[
		{ view: 0, styles:[
		]},
		{ view: -1, styles:[
		]},
		{ view: -2, styles: [
			{name: "flex", value:" 1 33%"},
		]},
		{ view: -3, styles: [
			{name: "flex", value:"0 1 20%"}
		]}
	]},
	{className: "section-title", levels :[
		{ view: 0, styles: [
			{name: "flex", value: "1 1 20%"}
		]},
		{ view: 1, styles: [
		]}
	]},
	{className: "section-content", levels:[
		{ view: 0, styles:[
			{name: "flex", value: "3 0 75%"},
			{name: "padding", value:"15px"}
		]},
		{ view: -1, styles:[
			{name: "border", value: "1px solid grey"}
		]},
		{ view: -2, styles:[
		]}
	]},
	{className: "section-text", levels :[
		{ view: 0, styles:[
			{name: "flex", value: "3 60%"}
		]},
		{ view: -1, styles:[
			{name: "max-height", min: 200, max: 300, unit: "px"}
		]},
		{ view: -2, styles: [
			{name: "max-height", min: 100, max: 200, unit: "px"},
		]},
		{ view: -3, styles: [
			{name: "max-height", min: 50, max: 100, unit: "px"}
		]}
	]},
	{className: "subsection-container", levels :[
		{ view: 0, styles:[
			{name: "flex", value:"1 0 100%"},
			{name: "padding", value:"0px"}
		]},
		{ view: -1, styles:[
		]},
		{ view: -2, styles: [
		]},
		{ view: -3, styles: [
			{name: "display", value: "none"}
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
			<div className="section-container" style={zoomStyle("section-container", views, depth, zoom)}>
				<h2 class="section-title" style={zoomStyle("section-title", views, depth, zoom)}>{title}</h2>
				<div className="section-content" style={zoomStyle("section-content", views, depth, zoom)}>
					<div className="section-text" style={zoomStyle("section-text", views, depth, zoom)}>
						{sectionContent}
					</div>
					<div className="subsection-container" style={zoomStyle("subsection-container", views, depth, zoom)}>
						{subsections}
					</div>
				</div>
			</div>
		);
	}
}