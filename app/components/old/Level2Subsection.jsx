import React from 'react';
import {zoomStyle, createZoomedElement} from '../actions/Zoomable.js'
import {Level3Subsection} from './Level3Subsection.jsx';

export class Level2Subsection extends React.Component{
	constructor(props){
		super(props);
		this.state = {};
	}

	render(){
		const content = this.props.content;
		const zoom = this.props.zoom;		
		const title = content.title;
		const outlineNumber = content.outline_number;
		const thisLevelHTML = content.content_HTML;
		const sectionContent = thisLevelHTML.map(function(element){
			return createZoomedElement(element, views, zoom);
		});
		const subsections = content.subsections.map(function(subsection, i){
			return <Level3Subsection content={subsection} zoom={zoom} key={"section_" + subsection.outline_number}/>;
		});
		
		return (
			<div className="content-container" style={zoomStyle("content-container", views, zoom)}>
				<h2>{title}</h2>
				<div className="summary" style={zoomStyle("summary", views, zoom)}>
					{sectionContent}
				</div>
				{subsections}
			</div>
		);
	}
}