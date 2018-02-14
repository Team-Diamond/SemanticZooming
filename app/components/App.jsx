import React from 'react';
import '../style.css';
import IframeComm from 'react-iframe-comm';
import { Container } from 'Container';

export default class App extends React.Component {
    render() {
        const attributes = {
            src: "https://en.wikipedia.org/wiki/French_Revolution",
        };

        //<IframeComm attributes={attributes} />
        return (
            <div>
              <Container title="Steve" />
            </div>
          );
    }
}
