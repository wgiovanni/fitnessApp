import React, { Fragment } from 'react';

import Welcome from '../components/Welcome.js';
import ExercisesList from '../components/ExercisesList.js';
import AddButton from '../components/AddButton.js';


const Exercises = ({data}) => (
    <Fragment>
        <Welcome 
                username="Wilkel"
        />
        <ExercisesList 
            exercises={data}
        /> 
        <AddButton/>  
    </Fragment>
);

export default Exercises;