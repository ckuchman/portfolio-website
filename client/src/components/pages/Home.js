import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import ProjectCard from '../ProjectCard'

import bahnThumb from '../../image/Bahn-Thumb.jpg';
import benchThumb from '../../image/Bench-Thumb.jpg';
import c9Thumb from '../../image/C9-Thumb.jpg';
import flipThumb from '../../image/Flip-Thumb.jpg';
import railThumb from '../../image/Rail-Thumb.jpg';
import tiaThumb from '../../image/Tia-Thumb.jpg';
import pomodoroThumb from '../../image/Pomodoro-Thumb.jpg';
import detectorThumb from '../../image/Detector-Thumb.jpg';
import reviewThumb from '../../image/Review-Thumb.jpg';
import ecThumb from '../../image/EC-Thumb.jpg';
import shellThumb from '../../image/Shell-Thumb.jpg';


export default function Home() {

    return (
        <React.Fragment>
            <Container className="home-title">
                <h1>I find joy in the creation of</h1>
                <Row id="title-split">
                    <Col className="code-background"/>
                    <Col className="title-split code-background"><h1>Code</h1></Col>
                    <Col className="title-split physical-background"><h1>Objects</h1></Col>
                    <Col className="physical-background"/>
                </Row>
                <h1>and the union of the two</h1>
            </Container>

            <Container className="background-section">
                <h1>What I Know</h1>
                <Row>
                    <Col className="code-background"/>
                    <Col className="code-background">
                        <h2>Computer Science</h2>
                        <Accordion>
                        <Card className="code-background">
                            <Card.Header className="code-background">
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                            </svg>
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>                        
                                <div>Completing a Bachelor's in Computer Science on March 2021</div>
                                <div>Use code in a non-code world to eliminate redundant work, so people can focus on being creative.</div>
                                <div>Approached non-code problems with a software mindset, <b>break the problem to its fundimental elements and solve those</b></div>   
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                    </Col>
                    <Col className="physical-background">
                        <h2>Mechanical Engineering</h2>
                        <Accordion>
                        <Card className="physical-background">
                            <Card.Header className="physical-background">
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                +
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>                        
                                <div>Bachelor's in Mechanical Engineering</div>
                                <div>Worked with international and inhouse designers on over 7 different products</div>
                                <div>Designed countless plastic and steel parts that would do the most benefit with the least cost</div>
                                <div>All designs done with customer and factory worker at the front of my mind, <b>simple and what is most needed</b></div>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                    </Col>
                    <Col className="physical-background"/>
                </Row>
            </Container>

            <h1 style={{textAlign: 'center'}}>What I Have Made</h1>
            <Container className="full-width-container code-background">
                <Container>
                <div className="project-spacer"/>    
                <Row>
                    <Col><ProjectCard
                        img={detectorThumb}
                        title="Apartment Motion Detection and Prediction"
                        text="Battery powered motion detector for apartment that detects motion between rooms. The data is
                        then sent over wifi to a Postgres database for analysis and graphical display and for future ML processing."
                    /></Col>

                    <Col><ProjectCard 
                        img={pomodoroThumb}
                        title="Pomodoro Time Tracker"
                        text="Pomodoro website built with Django including account management and task tracking. Designed to function well for people that
                        record billable hours and gamifies the process for increased productivity."
                        link="https://www.watsonfurniture.com/products/c9-rail"
                    /></Col>

                    <Col><ProjectCard 
                        img={shellThumb}
                        title="MiniShell"
                        text="Shell created in C that managed forked processes, wait PID and singal control."
                        link="https://github.com/ckuchman/mini-shell/blob/master/miniShell.c"
                    /></Col>
                </Row>
                <Row>
                    <Col><ProjectCard
                        img={reviewThumb}
                        title="CAD Model Review Automation"
                        text="Testing software built with Autodesk API to check CAD models for company data accuracy, massively reduced errors and
                        eliminated repetitive tasks for engineers."
                        link="https://github.com/watsonfg/External-Rules/blob/master/09_ReviewFile_Full.iLogicVb"
                    /></Col>

                    <Col><ProjectCard 
                        img={ecThumb}
                        title="EC Database"
                        text="Access database with backend .NET form resizing and processing for Engineering Change process I developed/implemented"
                    /></Col>

                    <Col></Col>
                </Row>
                <div className="project-spacer"/>  
                </Container> 
            </Container>  

            <Container className="full-width-container physical-background">
                <Container>
                <div className="project-spacer"/>  
                <Row>
                    <Col><ProjectCard 
                        img={c9Thumb}
                        title="C9"
                        text="Neocon Gold Award winning Power-Voice-Data system that focused on the ability to angle rails. The primary goal 
                        was to provide a PVD system that would remove typical limits to designer layouts, in particular for the open office. 
                        A focus was places on large variety of layouts, coming from a simple kit of parts."
                        link="https://www.watsonfurniture.com/products/c9-rail"
                    /></Col>

                    <Col><ProjectCard 
                        img={tiaThumb}
                        title="Tia"
                        text="Neocon Gold Award winning Private Office line, centered around intergrating height adjustability without compromising 
                        the high-design aesthetic. Built around lightness of appearance and the ability to use desking as short term meeting spaces."
                        link="https://www.watsonfurniture.com/products/tia-office"
                    /></Col>

                    <Col><ProjectCard 
                        img={railThumb}
                        title="Bahn Rail"
                        text="Minimal version of the Bahn Raceway, providing the same power access and a improved wire management at a lower 
                        cost and taking up less space."
                        link="https://www.watsonfurniture.com/products/bahn-rail"
                    /></Col>
                </Row>

                <Row>
                    <Col><ProjectCard 
                        img={flipThumb}
                        title="Flip"
                        text="Watson's first folding table solution, using a flip mechanism that was designed and manufactured entirely by 
                        Watson. I worked with a designer on a contoured aluminum case foot for a premium version."
                        link="https://www.watsonfurniture.com/products/seven-flip-tables"
                    /></Col>

                    <Col><ProjectCard 
                        img={bahnThumb}
                        title="Bahn Raceway"
                        text="Watson's first PVD system, allowing Watson to offer full workplace solutions without needing sell 
                        outside products."
                        link="https://www.watsonfurniture.com/products/bahn-power-data"
                    /></Col>

                    <Col><ProjectCard 
                        img={benchThumb}
                        title="Bahn Bench"
                        text="A benching system that intergrates height adjustable desking into a central frame. This allows for easy 
                        planning of screening and reduced costs, without forsaking employee health."
                        link="https://www.watsonfurniture.com/products/seven-benching"
                    /></Col>
                </Row>    
                <div className="project-spacer"/>  
                </Container> 
            </Container>      
            
        </React.Fragment>
    )
}
