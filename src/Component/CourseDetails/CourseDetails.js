import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const CourseDetails = () => {
    const data = useLoaderData();
    return (
            <Card style={{ width: '36rem' }}>
            <Card.Img variant="top" style={{ height: '22rem' }} src={data.picture} />
            <Card.Body>
                <Card.Title>{data.course}</Card.Title>
                <Card.Text>
                    {data.about}
                </Card.Text>
                <Link to={`/premium/${data.id}`}>Get Premium</Link>
            </Card.Body>
        </Card>
    );
};

export default CourseDetails;