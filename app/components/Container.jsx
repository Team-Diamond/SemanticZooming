import React from 'react';

/**
 *
 */
export class Container extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="containerHeader">
					<div className="title">
						{this.props.title}
					</div>
				</div>
				<div className="containerBody">
				</div>
			</div>
		);
	}
}
