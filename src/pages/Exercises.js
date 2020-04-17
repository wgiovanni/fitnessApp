import React, { Component } from 'react';

import Welcome from '../components/Welcome.js';
import ExercisesList from '../components/ExercisesList.js';
import AddButton from '../components/AddButton.js';


const Exercises = ({data}) => (
    <React.Fragment>
        <Welcome 
                username="Wilkel"
        />
        <ExercisesList 
            exercises={data}
        /> 
        <AddButton/>  
    </React.Fragment>
);

export default Exercises;