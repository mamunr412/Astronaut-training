import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HomeCourse from '../HomeCourse/HomeCourse';
import useData from '../Hooks/useData';
import './Home.css'

const Home = () => {
    const [datas] = useData()
    const dataSlice = datas.slice(0, 4);

    return (
        <div >
            <div className="headline text-center">
                <h1>The developers of Therapeutic Listening®</h1>
                <div className="headline-des">
                    <h4>Vital Links offers practical, theory oriented treatment tools that improve sensory processing, regulation and motor functions in clinic, home, and school environments and can effectively be utilized by therapists across multiple areas of clinical practice. Through our continuing education workshops, Vital Links aims to offer training that is relevant for new graduates as well as experienced clinicians looking to take their clinical treatment to the next level.</h4>
                </div>

            </div>

            <div >
                <div className="text-center mt-5">
                    <h1>Continuing Education</h1>
                    <h5>Explore what courses we have to offer…</h5>
                </div>
                <Container>
                    <Row>
                        <Col className="card-conatiner" >
                            {
                                dataSlice.map(data => <HomeCourse
                                    key={data.id}
                                    data={data}></HomeCourse>)
                            }</Col>
                    </Row>
                </Container>
            </div>
        </div>

    );
};

export default Home;