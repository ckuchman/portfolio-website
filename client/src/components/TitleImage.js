import React from 'react';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

export default function TitleImage(props) {   

    return (
        <React.Fragment>
            <Container className="personal">
                <div>
                    <Image 
                        src={props.img}  
                        style={{
                            backgroundSize : 'cover'
                        }}
                        fluid 
                        rounded>
                    </Image>
                    <h1 className="personal-content">                
                        <p className="personal-header">
                            I'm Chris Kuchman
                        </p>
                        
                        <p className="personal-body">
                            I am obsessed with helping creative people. I have worked over the 
                            past seven years with industrial designers and made their dreams 
                            into <span className='physical-word'> products</span>.
                        </p>
                        <p className="personal-body">
                            I am now looking at doing the same in the  <span className='code-word'> software</span> world.
                        </p>
                    </h1>
                </div>
            </Container>
        </React.Fragment>
    );
}