import React, { Component } from 'react';

import Welcome from '../components/Welcome.js';
import data from '../data.json';
import ExercisesList from '../components/ExercisesList.js';

class Exercises extends Component {

    constructor(props)  {
        super(props);
        this.state = {
            data: data
        }
    }

    render() {
        return (<div>
            <Welcome 
                username="Wilkel"
            />
            <ExercisesList exercises={this.state.data}/>            
        </div>)
    } 
}

export default Exercises;