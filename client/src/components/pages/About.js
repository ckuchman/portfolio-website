import React from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import aboutJumbo from '../../image/About-Jumbo.jpg';

export default function About() {
    return (
        <React.Fragment>
            <Jumbotron style={{
            'background-image': 'url(../../image/About-Jumbo.jpg)',
            'background-size': 'cover'
            }}>
            <h1>Hello, world!</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
            </p>
            <p>
                <Button variant="primary">Learn more</Button>
            </p>
            </Jumbotron>

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
        </React.Fragment>
    )
}
