import React from 'react';
import '../style.css';
import IframeComm from 'react-iframe-comm';
import Container from './Container.jsx';

export default class App extends React.Component {
    render() {
        const attributes = {
            src: "https://en.wikipedia.org/wiki/French_Revolution",
        };

        //<IframeComm attributes={attributes} />
        return (
            <div>
              <IframeComm attributes={attributes} />
              <Container title="Steve" />
            </div>
          );
    }
}
