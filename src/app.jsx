import React, { Component } from 'react'
import './App.css';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <div className='wrapper'>
                    <div className="menu">menu</div>
                    <div className="order">order</div>
                </div>
            </div>
        );
    }
}
