import React from 'react';
import Spinner from '../components/Spinner';
import FatalError from './500';
import Exercises from './Exercises.js';
import useFetch from '../hooks/useFetch';
import URL from '../config';
const ExercisesContainer = () => {
    
    const {data, loading, error} = useFetch(URL + '/exercises');
    if (loading)
        return <Spinner/>
    if (error)
        return <FatalError/>
    return <Exercises 
                data={data}
            />

}
export default ExercisesContainer;