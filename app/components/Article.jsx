import React from 'react';
import zoomStyle, createZoomedElement from '../actions/Zoomable.js'

var views =[
	{"zoom":0, "elements": [
		{"selector": ".container", "styles" : [
			{"name": "height", "min":100, "max":500, "unit":"px"},
			{"name": "width", "min":50, "max": 100, "unit":"px"}
		]}
	]},
	{"zoom":1, "elements": [
		{"selector": ".container", "styles" :[
			{"name": "height", "min":100, "max":200},
			{"name": "width", "min":500, "max": 500}
		]}
	]},
	{"zoom":2}
];

export class Article extends React.Component{
	Constructor(props){
		super(props);
		this.state = {};
	}

	render(){
		const content = this.props.content;		
		const title = content.title;
		const thisLevelHTML = content.content_HTML;

		const sectionContent = thisLevelHTML.map(function(element){
			return createZoomedElement(element, views, this.props.zoom);
		});

		const subsections = content.subsections.map(function(subsection, i){
			return <Level1Subsection content={subsection[i]} zoom={this.props.zoom}/>;
		});
		
		return (
			<div className="article-container" style={zoomStyle("article-container", "div", this.props.zoom), views}>
				<h2>{title}</h2>
				{sectionContent}
				{subsections}
			</div>
		);
	}
}