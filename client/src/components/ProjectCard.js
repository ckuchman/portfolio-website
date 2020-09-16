import React from 'react';
import Card from 'react-bootstrap/Card';

export default class ProjectCard extends React.Component {    

    render() {
        return (
            <React.Fragment>
                <Card style={{margin: '1rem'}}>
                <Card.Img src={this.props.img} />
                <Card.ImgOverlay>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>{this.props.text}</Card.Text>
                </Card.ImgOverlay>
                </Card>
            </React.Fragment>
        )
    }
}