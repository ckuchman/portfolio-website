import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function ProjectCard(props) {   
    const [textVisibility, setTextVisiblity] = React.useState(0);
    const [imgVisibility, setImgVisiblity] = React.useState(1);

    const textStyles = {
        color: 'white',
        opacity: textVisibility
    };

    const imgStyles = {
        opacity: imgVisibility
    };

    const turnOnVisibility = () => {
        setTextVisiblity(1);
        setImgVisiblity(.375);
    };

    const turnOffVisibility = () => {
        setTextVisiblity(0);
        setImgVisiblity(1);
    };

    return (
        <React.Fragment>
            <Card style={{margin: '1rem', 'background-color': 'black'}}>
            <Card.Img 
                src={props.img}
                style={imgStyles}
            />
            <Card.ImgOverlay
                style={textStyles}
                onMouseEnter={turnOnVisibility}
                onMouseLeave={turnOffVisibility}
            >
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.text}</Card.Text>
                {props.link &&
                    <Button variant="outline-light" href={props.link} target="_blank">See More</Button>
                }
            </Card.ImgOverlay>
            </Card>
        </React.Fragment>
    );
}