import React from 'react';
import '../style.css';
import IframeComm from 'react-iframe-comm';
import Container from './Container.jsx';
import ZoomIn from '../actions/ZoomIn.js'

export default class App extends React.Component {
    render() {
        const attributes = {
            src: "https://en.wikipedia.org/wiki/French_Revolution",
        };

        //<IframeComm attributes={attributes} />
        return (
            <div onClick={ZoomIn.levelOne}>
              <IframeComm
                  attributes={attributes}
                  handleReady={ZoomIn.levelOne()}
              />
              <Container title="Steve" />
            </div>
          );

    }
}
