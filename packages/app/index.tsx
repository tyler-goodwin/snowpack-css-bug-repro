import React from 'react';
import ReactDOM from 'react-dom';

import styles from "./App.module.css"


import { Button } from "styleguide"

const App = () => (
  <div className={styles.body}>
    <h1>Hello React!</h1>
    <Button onClick={() => alert("Clicked")}>Click me!</Button>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'));