import React, { Component } from 'react';
import {data} from './mock'
import Order from './order'
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
                {...value, selectedId: this.state.selected.length},
            ];
            this.setState({selected});
            selected.forEach((value) =>  
                this.setState({total: this.state.total + value.price})
            );
        }; 
        const onDelete = (id) => {
            const selected = this.state.selected.filter((value) => { 
            value.selectedId === id && 
              this.setState({total: this.state.total - value.price});
            return value.selectedId !==id;
        });
            this.setState({selected});   
        };
        const onSort =(e) => {
            const sorted = this.state.selected.sort((a,b) => a.price - b.price);
            this.setState({selected: sorted});
        }
        const onCancel = () => {
            this.setState({selected: [], total: 0});
        }

        return ( 
            <div>
                <div className='wrapper'>
                    <div className="menu">
                        <button onClick={onSort}>Sort</button>
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
                   <Order
                    onCancel={onCancel}
                    onDelete={(id)=> onDelete(id)}
                    data= {this.state}/>
                </div>
            </div>
        );
    }
}
