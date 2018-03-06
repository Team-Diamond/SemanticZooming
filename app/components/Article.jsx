import React from 'react';
import {zoomStyle, createZoomedElement} from '../actions/Zoomable.js';
import {Subsection} from './Subsection.jsx';

var views = [
	{className: "content", levels :[
		{ view: 0, styles:[
			{name: "maxHeight", value: "none"},
			{name: "maxWidth", value: "100%"},
			{name: "border", value:"1px solid black"}
		]},
		{ view: -1, styles:[
			{name: "maxHeight", min:100, max:500, unit:"px"},
			{name: "maxWidth", value: "100%"}
		]}
	]}
];

export class Article extends React.Component{
	constructor(props){
		super(props);
		this.state = {};
	}

	render(){
		const content = this.props.content;
		const depth = 0;
		const zoom = this.props.zoom;		
		const title = content.title;
		const thisLevelHTML = content.content_HTML;
		const sectionContent = thisLevelHTML.map(function(element){
			return createZoomedElement(element, views, zoom);
		});
		const subsections = content.subsections.map(function(subsection, i){
			return <Subsection content={subsection} depth={depth+1} zoom={zoom} key={"section_" + subsection.outline_number}/>;
		});
		
		return (
			<div className="article-container" style={zoomStyle("article-container", views, depth, zoom)}>
				<h2>{title}</h2>
				<div className="content" style={zoomStyle("content", views, 1, zoom)}>
					{sectionContent}
				</div>
				{subsections}
			</div>
		);
	}
}