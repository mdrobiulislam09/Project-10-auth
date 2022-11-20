import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Premium = () => {
    const data = useLoaderData();
    return (
        <div>
            {data.about}
        </div>
    );
};

export default Premium;