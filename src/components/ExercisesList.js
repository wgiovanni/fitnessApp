import React from 'react';
import Card from './Card.js';

const ExercisesList = ({exercises}) => (
    <>
        {exercises.map((e) => {
            return (
                <Card
                    key={e.id}
                    title={e.title}
                    description={e.description}
                    img={e.img}
                    leftColor={e.leftColor}
                    rightColor={e.rightColor}
                />
            );
        })}
    </>
); 

export default ExercisesList;