import React from 'react';
import Card from './Card.js';

const ExercisesList = ({exercises}) => (
    <>
        {exercises.map((e) => {
            return (
                <Card
                    key={e.id}
                    {...exercises}
                />
            );
        })}
    </>
); 

export default ExercisesList;