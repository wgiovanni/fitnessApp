import React from 'react';
import Spinner from '../components/Spinner';
import FatalError from './500';
import Exercises from './Exercises.js';
import useFetch from '../hooks/useFetch';
const ExercisesContainer = () => {
    
    const {data, loading, error} = useFetch('http://localhost:8000/api/exercises')

    if (loading)
        return <Spinner/>
    if (error)
        return <FatalError/>
    return <Exercises 
                data={data}
            />

}
export default ExercisesContainer;