import React, { Component } from 'react'
import Box from './Box';
import './BoxContainer.css';
 class BoxContainer extends Component {
     static defaultProps = {
         numBoxes: 24,
         allColors: ["lightgreen","skyblue","lightblue","grey","pink","red","yellow","black","brown","gold","silver","magenta"]
     }
    render() {
        const boxes = Array.from({length: this.props.numBoxes}).map(
            ()=> <Box colors={this.props.allColors}/>
        );
        return <div className='BoxContainer'>{boxes}</div>
    }
}

export default BoxContainer
