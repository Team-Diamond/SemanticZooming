import React from 'react';
import {Article} from './Article.jsx'

var json = require('../ExampleWebpage.json');


export default class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {zoom: 0};
      this.setZoom = this.setZoom.bind(this);
    }

    setZoom(e){
      if(parseFloat(e.target.value) >= 0 && parseFloat(e.target.value) <= 100){
        this.setState({zoom: parseFloat(e.target.value) });
      }
    }

    render() {
        const attributes = {
            src: "https://en.wikipedia.org/wiki/French_Revolution",
        };

        return (
            <div>
              <input type="text" name="zoomlevel" style={{position:"fixed"}} height="50px" width="100px" onChange={this.setZoom} />
              <Article content={json.article} zoom={this.state.zoom} />
            </div>
          );

    }
}
