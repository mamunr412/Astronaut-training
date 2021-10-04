
import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './HomeCourse.css'

const HomeCourse = (props) => {
    //destructuring from data
    const { cousrseName, description, img, price } = props.data

    return (
        <div className="home-div" >
            <CardGroup className="card"  >
                <Card  >
                    <Card.Img className="course-img mx-auto" variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{cousrseName}</Card.Title>
                        <Card.Text>
                            <h5>price: $ {price}</h5>
                            <small>{description}</small>
                        </Card.Text>
                    </Card.Body>
                    <button className="card-button">See more</button>
                </Card>
            </CardGroup>

        </div>
    );
};

export default HomeCourse;