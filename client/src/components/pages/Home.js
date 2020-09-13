import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

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

            <div className="partial-width-container">
                <p>
                    I'm Chris Kuchman and I am obsessed with helping creative people achieve their dreams with high quality. 
                </p>
                <p>
                    I have done this over the past seven years working with industrial designers developing new products. 
                    I am now looking at doing the same in the software world. I have obtained degrees in Mechanical Engineering and Computer Science because of my endless desire to learn more, I hope I can use that knowledge to help create 
                    things that bring joy to people, and learn even more along the way.
                </p>
            </div>

            <Container className="background-section">
                <h1>Background</h1>
                <p>
                    I have education in
                </p>
                <Row>
                    <Col className="code-background">
                        <h2>Mechanical Engineering</h2>
                    </Col>
                    <Col className="physical-background">
                        <h2>Computer Science</h2>
                    </Col>
                </Row>
            </Container>

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>C9</Card.Title>
                <Card.Text>
                Neocon Gold Award winning Power-Voice-Data system that focused on the ability to angle rails. The primary goal was to provide a PVD system that would remove typical limits to designer layouts, in particular for the open office. A focus was places on large variety of layouts, coming from a simple kit of parts
                </Card.Text>
            </Card.Body>
            </Card>

        </React.Fragment>
    )
}
