import React from 'react';
import '../components/styles/ExerciseNew.css';
import FatalError from './500';
import ExerciseNew from './ExerciseNew';
import URL from '../config';

class ExerciseNewContainer extends React.Component {
    state = {
        form: {
            title: '', 
            description: '', 
            img: '',
            leftColor: '', 
            rightColor: ''
        },
        error: null,
        loading: false
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    handleSubmit = async e => {
        this.setState({
            loading: true
        })
        e.preventDefault();
        try {
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.form)
            }

            let res = await fetch(URL +'exercises', config);
            let json = await res.json();
            this.setState({
                loading: false
            });

            this.props.history.push('/exercise');


        } catch (error) {
            this.setState({
                loading: false,
                error
            })
        }   
        
    }

    render() {
        if (this.state.error)
            return <FatalError/>
        return <ExerciseNew
            form={this.state.form}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
        />;
    }
}

export default ExerciseNewContainer;