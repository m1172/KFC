import React, { Component } from 'react';
import {data} from './mock'
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
                    <div className="menu">
                        {data.map(value=>{
                            return(
                                <div className="category">
                                    <h1>{value.category}</h1>
                                    <div className="submenu">
                                        {value.lists.map((item)=>(
                                            <div className="item">{item.title}</div>
                                        ))}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="order">order</div>
                </div>
            </div>
        );
    }
}
