import React, { useState } from 'react';
import '../components/styles/ExerciseNew.css';
import Spinner from '../components/Spinner';
import FatalError from './500';
import ExerciseNew from './ExerciseNew';
import URL from '../config';

const ExerciseNewContainer = ({history}) => {
    const [form, setForm] = useState({
                                title: '',
                                description: '', 
                                img: '',
                                leftColor: '', 
                                rightColor: ''
                            });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value 
        });
    }

    const handleSubmit = async e => {
        setLoading(true);
        e.preventDefault();
        try {
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            }

            let res = await fetch(URL +'exercises', config);
            let json = await res.json();
            setLoading(false);

            history.push('/exercise');


        } catch (error) {
            setLoading(false);
            setError(error);
        }   
        
    }

    if(loading)
        return <Spinner/>

    if (error)
        return <FatalError/>

    return <ExerciseNew
                form={form}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />;

}

export default ExerciseNewContainer;