import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './service.css'

const Service = (props) => {
    console.log(props.data)
    const { img, description, cousrseName, price } = props.data

    return (
        <div >
            <CardGroup >
                <Card className="service-card" >
                    <Card.Img className="course-img mx-auto" variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{cousrseName}</Card.Title>
                        <Card.Text>
                            <h5>price: $ {price}</h5>
                            {description}
                        </Card.Text>
                    </Card.Body>
                    <button className="card-button">See more</button>
                </Card>
            </CardGroup>


        </div>
    );
};

export default Service;