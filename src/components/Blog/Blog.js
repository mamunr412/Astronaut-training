import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Blog.css'

const Blog = () => {
    return (
        <div className="blog-container">
            <Container>
                <Row>
                    <Col>
                        <div>
                            <h1 >
                                <a className="blog-title" href="https://vitallinks.com/blog/a-musical-spotlight-links-to-connection/"  >A Musical Spotlight – Links to Connection</a>


                            </h1>
                            <div>
                                <h5>Today, we are announcing our latest addition to the Modulated Music series, the Links to Connection album. This new album expands upon the current Therapeutic Listening selections and is appropriate for individuals who are experiencing difficulties with sensory modulation, dysregulation or constricted ranges of arousal, and auditory sensitivities. Take a peek at this short video clip of Tracy Bjorling, M.S., OTR/L discussing this…</h5>
                            </div>

                        </div>
                        <div>
                            <h1>
                                <a className="blog-title" href="https://vitallinks.com/blog/clinical-conversation-exploring-self-regulation-powerfully-you-curriculum/" >Clinical Conversation: Exploring Self-Regulation and Powerfully You Curriculum</a>

                            </h1>
                            <div>
                                <h5>Vital Links is offering a free webinar for therapists with Sheila Frick and the developers of Powerfully You™, Amy Lewis, OTR/L and Heather Spann, OTR/L. The development of and capacity for arousal regulation is multifaceted. A comprehensive treatment approach to establishing and supporting self-regulation extends beyond treatment aimed at sensory processing or cognitive strategies alone. Instead, therapists must employ a multiple brain and body system…</h5>
                            </div>
                        </div>
                        <div>
                            <h1>
                                <a className="blog-title" href="https://vitallinks.com/blog/an-introduction-to-tre-with-sheila-frick/" >An Introduction to TRE® with Sheila Frick</a>

                            </h1>
                            <div>
                                <h5>Welcome Video Sheila Frick’s personal reflection on TRE As a lifelong learner and explorer of development and neurobiology, I have a deep interest in the natural design of the body. Throughout my study, I have been especially curious about the neurophysiologic processes that are activated following exposure to perceived threat. In the case of individuals with sensory processing disorders, a perceived threat…</h5>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>


        </div >
    );
};

export default Blog;