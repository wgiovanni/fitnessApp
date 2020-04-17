import React, { useState, useEffect } from 'react';

import Welcome from '../components/Welcome.js';
import ExercisesList from '../components/ExercisesList.js';
import AddButton from '../components/AddButton.js';
import Spinner from '../components/Spinner';
import FatalError from './500';
import Exercises from './Exercises.js';

const ExercisesContainer = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchExercises = async () => {
            try {
                let res = await fetch('http://localhost:8000/api/exercises')
                let data = await res.json()
        
                setData(data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(error);
            }
    
        }
        fetchExercises();
    }, [])
    if (loading)
        return <Spinner/>
    if (error)
        return <FatalError/>
    return <Exercises 
                data={data}
            />

}
export default ExercisesContainer;