import React, { Component } from 'react';
import Card from '../components/Card.js';
import Welcome from '../components/Welcome.js';

class Exercises extends Component {
    render() {
        return (<div>
            <Welcome 
                username="Wilkel"
            />
            <Card
                title="Guías tecnicas"
                description="Aprende ejercicios callejeros y calistenias increíbles"
                img="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06"
                leftColor="#A74CF2"
                rightColor="#617BFB"
            />
        </div>)
    } 
}

export default Exercises;