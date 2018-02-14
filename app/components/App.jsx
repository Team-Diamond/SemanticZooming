import React from 'react';
import '../style.css'
import IframeComm from 'react-iframe-comm';
import ZoomIn from '../actions/ZoomIn.js'

export default class App extends React.Component {
    render() {
        const attributes = {
            src: "https://en.wikipedia.org/wiki/French_Revolution",
        };

        return (
            <div onClick={ZoomIn.levelOne}>
                <IframeComm
                    attributes={attributes}
                    handleReady={ZoomIn.levelOne()}
                />
            </div>)
            ;
    }
}