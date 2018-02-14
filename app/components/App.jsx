import React from 'react';
import styles from '../style.css'

export default class App extends React.Component {
    render() {
        return (
            <div>
                {/*//className={styles.WikiPage}>*/}
                <iframe src="https://en.wikipedia.org/wiki/French_Revolution"/>
            </div>);
    }
}