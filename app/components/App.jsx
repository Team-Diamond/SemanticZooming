import React from 'react';
import IframeComm from 'react-iframe-comm';
import { Container } from './Container.jsx';
import ZoomIn from '../actions/ZoomIn'

export default class App extends React.Component {
    render() {
        const attributes = {
            src: "https://en.wikipedia.org/wiki/French_Revolution",
        };

        //<IframeComm attributes={attributes} />
        return (
            <div>
              <IframeComm
                  attributes={attributes}
                  handleReady={ZoomIn.levelOne}
              />
            <Container title={"Steve"} />
            </div>
          );

    }
}
