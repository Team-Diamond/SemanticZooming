import React from 'react';
import {Article} from './Article.jsx';
import {ZoomBar} from './Zoombar.jsx'

var json = require('../ExampleWebpage.json');


export default class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {zoom: 0};
      this.setZoom = this.setZoom.bind(this);
    }

    setZoom(z){
      z = parseFloat(z);
      if(z >= 0 && z <= 100){
        console.log("New Zoom: " + z);
        this.setState({zoom: z});
      }
    }

    render() {
        const attributes = {
            src: "https://en.wikipedia.org/wiki/French_Revolution",
        };

        return (
            <div>
              <input type="text" name="zoomlevel" style={{position:"fixed"}} height="50px" width="100px" onChange={(e) => this.setZoom(e.target.value)} />
              <Article content={json.article} zoom={this.state.zoom} />
              <ZoomBar zoom={this.state.zoom} onZoomChange={this.setZoom}/>
            </div>
          );

    }
}
