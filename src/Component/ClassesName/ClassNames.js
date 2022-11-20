import React from 'react';
import { Link } from 'react-router-dom';

const ClassNames = ({classes}) => {
    return (
        <div>
            <Link to ={`/course/${classes.id}`}>{classes.course}</Link>
        </div>
    );
};

export default ClassNames;