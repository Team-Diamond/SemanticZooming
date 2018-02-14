import React from 'react';
import '../style.css'
import IframeComm from 'react-iframe-comm';

export default class App extends React.Component {
    render() {
        const attributes = {
            src: "https://en.wikipedia.org/wiki/French_Revolution",
        };

        return (
            <div>
                <IframeComm attributes={attributes} />
            </div>);
    }
}