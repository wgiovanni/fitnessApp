import React, { Component } from 'react';

import Welcome from '../components/Welcome.js';
import ExercisesList from '../components/ExercisesList.js';
import AddButton from '../components/AddButton.js';
import Spinner from '../components/Spinner';
import FatalError from './500';
import Exercises from './Exercises.js';


class ExercisesContainer extends Component {

    constructor(props)  {
        super(props);
        this.state = {
            data: [],
            loading: true,
            error: null
        }
    }

    async componentDidMount() {
        await this.fetchExercises()
    }

    fetchExercises = async () => {
        try {
            let res = await fetch('http://localhost:8000/api/exercises')
            let data = await res.json()
    
            this.setState({
                data,
                loading: false
            })
        } catch (error) {
            this.setState({
                loading: false,
                error
            })
        }

    }
    render() {
        if (this.state.loading)
            return <Spinner/>
        if (this.state.error)
            return <FatalError/>
        return <Exercises 
                    data={this.state.data}
                />
    } 
}

export default ExercisesContainer;