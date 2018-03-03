import React from 'react';
import zoom from '../actions/Zoomable.js'

var views =[
	{"zoom":0, "elements": [
		{"selector": ".container", "styles" : [
			{"name": "height", "min":100, "max":500},
			{"name": "width", "min":50, "max": 100}
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
		const outlineNumber = content.outline_number;
		const thisLevelHTML = content.content_HTML;
		const children = const.subsections;

		const article = thisLevelHTML.map(function(element){
			return zoom(element, views, this.props.zoom);
		});
		
		return (
			<h2>{outlineNumber} {title}</h2>
			{article}
			<div className="contentBox">
				{article}
			</div>
		);
	}
}