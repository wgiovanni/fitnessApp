import React, { Component } from 'react';

import Welcome from '../components/Welcome.js';
import data from '../data.json';
import ExercisesList from '../components/ExercisesList.js';
import AddButton from '../components/AddButton.js';

class Exercises extends Component {

    constructor(props)  {
        super(props);
        this.state = {
            data: []
        }
    }

    async componentDidMount() {
        await this.fetchExercises()
    }

    fetchExercises = async () => {
        let res = await fetch('http://localhost:8000/api/exercises')
        let data = await res.json()

        this.setState({
            data
        })
        console.log(data);
    }
    render() {
        return (<div>
            <Welcome 
                username="Wilkel"
            />
            <ExercisesList exercises={this.state.data}/> 
            <AddButton/>           
        </div>)
    } 
}

export default Exercises;