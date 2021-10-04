import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <div>

            <Container>
                <Row>
                    <Col>
                        <div className="about-container">
                            <img src="https://media.vitallinks.com/images/2016/03/ABOUT_006_1000x450.jpg" alt="" />
                        </div>
                        <div className="blog-header">
                            <h1>Sheila Frick, Founder of Vital Links and Therapeutic Listening®</h1>
                            <h5>Sheila M. Frick, OTR/L, is the originator of Vital Links and Therapeutic Listening. With over 30 years of clinical experience, Sheila is a highly regarded occupational therapist who sees clients in her own clinical practice as well as mentors clinicians in her role as a world-wide speaker and innovator of Therapeutic Listening. Sheila’s brings a passion for practical, treatment-oriented therapy strategies to her teaching, which extends beyond Therapeutic Listening to approaches supporting the whole body. Sheila has collaborated with other well-respected clinicians in the development and teaching of these strategies through her popular workshops including: Astronaut Training, Core Concepts in Action – Book, and M.O.R.E.</h5>

                        </div>
                        <div className="blog-header">
                            <h1>Sharing ideas through continuing education</h1>
                            <h5>The foundation of Vital Links is Sheila’s continued interest in further development and lecturing of practical, theory oriented treatment tools, which can effectively be utilized by therapists across multiple areas of clinical practice. Through our continuing education workshops, Vital Links aims to offer training that is relevant for new graduates as well as experienced clinicians looking to take their clinical treatment to the next level.</h5>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default About;