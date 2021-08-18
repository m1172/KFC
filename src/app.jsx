import React, { Component } from 'react';
import {data} from './mock'
import './App.css';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: [],
            total: 0,
        };
    }
    render() {
        const onSelect =(value) => {
            const selected = [
                ...this.state.selected,
                {...value, selectedId: this.state.selectedId.length},
            ];
            this.setState({selected});
            selected.forEach((value) => 
                this.setState({total: this.state.total + value.price})
            );
        }; 
        const onDelete = (id) => {
            const selected =this.state.selected.filter(value => { 
            value.id ===id && this.setState({total: this.state.total - value.price})
            return value.id !==id
        });
            this.setState({selected})
        }
        return ( 
            <div>
                <div className='wrapper'>
                    <div className="menu">
                        {data.map(value=>{
                            return(
                                <div className="category" > 
                                    <h1 className='title'>{value.category}</h1>
                                    <div className="submenu">
                                        {value.lists.map((item)=>(
                                            <div onClick={() => onSelect(item)} className="item">
                                                <img src={item.src} alt="" />
                                                <h1>{item.title}</h1>
                                                <h2 className='price'>{item.price}som</h2>
                                            </div>
                                        ))}
                                    </div> 
                                </div>
                            )
                        })} 
                    </div>
                    <div className="order">
                        <h1 className='title'>Order</h1>
                        {this.state.selected.length <= 0 && (
                            <h1>Not Selected</h1>
                        )}
                        {this.state.selected.map((value) => (
                            <div className="order">
                                <h1>
                                    {value.title} - {value.price}som
                                    <button onClick={()=> onDelete(value.id)}>Delete</button>
                                </h1>
                            </div>
                        ))}
                        <h1 className="title">Total {this.state.total} som</h1>
                        <button onClick={() => this.setState({selected: [], total: 0})}>Cancel</button>
                        <button>Order</button>
                    </div>
                </div>
            </div>
        );
    }
}
