import React from 'react';
import Card from './Card.js';

const ExercisesList = ({exercises}) => (
    <>
        {exercises.map((exercise) => {
            return (
                <Card
                    key={exercise.id}
                    {...exercise}
                />
            );
        })}
    </>
); 

export default ExercisesList;