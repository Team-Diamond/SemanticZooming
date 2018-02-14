import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from '../components/MyAwesomeReactComponent';

export default {
    levelOne() {
        console.log("Level One Zoom In!");
        return (
            <MuiThemeProvider>
                <MyAwesomeReactComponent />
            </MuiThemeProvider>
        );
    }
}