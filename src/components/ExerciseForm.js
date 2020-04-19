import React from 'react';
import { Link } from 'react-router-dom';

const ExerciseForm = ({onChange, onSubmit, form}) => (
    <div className="container">
        <form 
            onSubmit={onSubmit}
        >
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="title" 
                    name="title"
                    onChange={onChange}
                    value={form.title}
                />
            </div>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="description" 
                    name="description"
                    onChange={onChange}
                    value={form.description}
                />
            </div>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="img" 
                    name="img"
                    onChange={onChange}
                    value={form.img}
                />
            </div>
            <div className="form-row form-group">
                <div className="col">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="leftColor" 
                        name="leftColor"
                        onChange={onChange}
                        value={form.leftColor}
                    />
                </div>
                <div className="col">
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="rightColor" 
                        name="rightColor"
                        onChange={onChange}
                        value={form.rightColor}
                    />    
                </div>
            </div>
            <div className="form-group">
                <Link className="btn btn-primary" to="/exercise">Regresar</Link>
                <button 
                    type="submit" 
                    className="btn btn-primary float-right"
                >
                    Submit
                </button>
            </div>
        </form>
    </div>
);

export default ExerciseForm;