import React, { useState } from 'react';
import { useEffect } from 'react';
import ClassNames from '../ClassesName/ClassNames';


const Coures = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://server-two-puce.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])


    return (
        <div>
            <h5>Home</h5>
            {
                categories.map(category => <ClassNames classes={category} key={category.id}></ClassNames>)
            }
        </div>
    );
};

export default Coures;