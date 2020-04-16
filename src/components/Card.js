import React, { Component } from 'react';
// import exerciseImg from '../images/exercise.png';
import circlesImg from '../images/circles.png';
import './styles/Card.css';
import 'bootstrap/dist/css/bootstrap.css';


class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {
            image: ''
        }
    }

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({
    //             image: ''
    //         })
    //     }, 5000);
    // }
    render() {
        const { title, description, img, leftColor, rightColor} = this.props;
        return <div className="card mx-auto Fitness-Card"
            style={{
                backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor}, ${rightColor})`
            }}
            >
            <div className="card-body">
                <div className="row">
                    <div className="col-6">
                        <img src={img} className="float-right"/>
                    </div>
                    <div className="col-6 Fitness-Card-Info">
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Card;