import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useData from '../Hooks/useData';
import Service from '../Serivce/Service';
import './Services.css'

const Services = () => {
    // use hook to load data
    const [datas] = useData()
    console.log(datas)
    return (
        <div className="services">
            <Container>
                <Row>
                    <Col className="services-container">{
                        datas.map(data => <Service
                            key={data.id} data={data}></Service>)
                    }</Col>
                </Row>
            </Container>


        </div>
    );
};

export default Services;