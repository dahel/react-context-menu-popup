import React, { Component } from 'react';
import { render } from 'react-dom';

import FirstExample from './examples/first';

export default class App extends Component {
    constructor () {
        super();
    }

    // class names
    // you can provide your own class for every element
    // or you can used pre-defined class names as described below (it uses BEM)
    render () {
       return (
           <div>
               <FirstExample />
           </div>
       )
    }
}


render(
    <App />,
    document.getElementById('app')
);