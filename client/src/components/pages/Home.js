import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ProjectCard from '../ProjectCard'

import bahnThumb from '../../image/Bahn-Thumb.jpg';
import benchThumb from '../../image/Bench-Thumb.jpg';
import c9Thumb from '../../image/C9-Thumb.jpg';
import flipThumb from '../../image/Flip-Thumb.jpg';
import railThumb from '../../image/Rail-Thumb.jpg';
import tiaThumb from '../../image/Tia-Thumb.jpg';


export default function Home() {
    return (
        <React.Fragment>
            <Container className="home-title">
                <h1>I find joy in the creation of</h1>
                <Row>
                    <Col className="code-background"><h1>Code</h1></Col>
                    <Col className="physical-background"><h1>Physical Products</h1></Col>
                </Row>
            </Container>

            <Container className="partial-width-container">
                <p>
                    I'm Chris Kuchman and I am obsessed with helping creative people achieve their dreams with high quality. 
                </p>
                <p>
                    I have done this over the past seven years working with industrial designers developing new products. 
                    I am now looking at doing the same in the software world. I have obtained degrees in Mechanical Engineering and Computer Science because of my endless desire to learn more, I hope I can use that knowledge to help create 
                    things that bring joy to people, and learn even more along the way.
                </p>
            </Container> 

            <Container className="background-section">
                <h1>Background</h1>
                <p>
                    I have education in
                </p>
                <Row>
                    <Col className="code-background">
                        <h2>Computer Science</h2>
                    </Col>
                    <Col className="physical-background">
                        <h2>Mechanical Engineering</h2>
                    </Col>
                </Row>
            </Container>

            <Container className="full-width-container code-background">
                <Container>
                <Row>
                    <Col><ProjectCard
                        title="Apartment Motion Detection and Prediction"
                        text="Battery powered motion detector for apartment that detects motion between rooms. The data is
                        then sent over wifi to a Postgres database for analysis and graphical display and for future ML processing."
                    /></Col>

                    <Col><ProjectCard 
                        title="Pomodoro Time Tracker"
                        text="Pomodoro website built with Django including account management and task tracking. Designed to function well for people that
                        record billable hours and gamifies the process for increased productivity."
                    /></Col>

                    <Col><ProjectCard 
                        title="Boardgame Database"
                        text="Boardgame play and onwership tracker built in Node.js with a backend database."
                    /></Col>
                </Row>
                <Row>
                    <Col><ProjectCard
                        title="CAD Model Review Automation"
                        text="Testing software built with Autodesk API to check CAD models for company data accuracy, massively reduced errors and
                        eliminated repetitive tasks for engineers."
                    /></Col>

                    <Col><ProjectCard 
                        title="EC Database"
                        text="Access database with backend .NET form resizing and processing for Engineering Change process I developed/implemented"
                    /></Col>

                    <Col><ProjectCard 
                        title="MiniShell"
                        text="Shell created in C that managed forked processes, wait PID and singal control."
                    /></Col>
                </Row>
                </Container> 
            </Container>  

            <Container className="full-width-container physical-background">
                <Container>
                <Row>
                    <Col><ProjectCard 
                        img={c9Thumb}
                        title="C9"
                        text="Neocon Gold Award winning Power-Voice-Data system that focused on the ability to angle rails. The primary goal 
                        was to provide a PVD system that would remove typical limits to designer layouts, in particular for the open office. 
                        A focus was places on large variety of layouts, coming from a simple kit of parts"
                    /></Col>

                    <Col><ProjectCard 
                        img={tiaThumb}
                        title="Tia"
                        text="Neocon Gold Award winning Private Office line, centered around intergrating height adjustability without compromising 
                        the high-design aesthetic. Built around lightness of appearance and the ability to use desking as short term meeting spaces."
                    /></Col>

                    <Col><ProjectCard 
                        img={railThumb}
                        title="Bahn Rail"
                        text="Minimal version of the Bahn Raceway, providing the same power access and a improved wire management at a lower 
                        cost and taking up less space."
                    /></Col>
                </Row>

                <Row>
                    <Col><ProjectCard 
                        img={flipThumb}
                        title="Flip"
                        text="Watson's first folding table solution, using a flip mechanism that was designed and manufactured entirely by 
                        Watson. I worked with a designer on a contoured aluminum case foot for a premium version."
                    /></Col>

                    <Col><ProjectCard 
                        img={bahnThumb}
                        title="Bahn Raceway"
                        text="Watson's first PVD system, allowing Watson to offer full workplace solutions without needing sell 
                        outside products."
                    /></Col>

                    <Col><ProjectCard 
                        img={benchThumb}
                        title="Bahn Bench"
                        text="A benching system that intergrates height adjustable desking into a central frame. This allows for easy 
                        planning of screening and reduced costs, without forsaking employee health."
                    /></Col>
                </Row>    
                </Container> 
            </Container>      
            
        </React.Fragment>
    )
}
