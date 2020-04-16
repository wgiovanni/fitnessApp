import React, { Component } from 'react';
import exerciseImg from '../images/exercise.png';
import circlesImg from '../images/circles.png';
import './styles/Card.css';
import 'bootstrap/dist/css/bootstrap.css';
class Card extends Component {
    render() {
        return <div className="card mx-auto Fitness-Card"
            style={{
                backgroundImage: `url(${circlesImg}), linear-gradient(to right, #A74CF2, #617BFB)`
            }}
            >
            <div className="card-body">
                <div className="row">
                    <div className="col-6">
                        <img src={exerciseImg} className="float-right"/>
                    </div>
                    <div className="col-6 Fitness-Card-Info">
                        <h1>Guías tecnicas</h1>
                        <p>
                            Aprende ejercicios callejeros y calistenia increíbles
                        </p>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Card;