import React from 'react';
import { index } from '../models/Index'
import * as MobX from 'mobx-react';
const observer = MobX.observer;
/**
 *
 */
@observer
export class Container extends React.Component {
	render() {
		return (
			<div className="container-background">
				<div className="container">
					<div className="containerHeader">
						<div className="title">
							{this.props.title}
              {index.zoomLevel}
						</div>
					</div>
					<div className="containerBody">
					</div>
				</div>
			</div>
		);
	}
}
