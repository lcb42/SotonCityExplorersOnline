import React, { Component } from 'react';
import './Home.css';
import { Carousel, Container, Row, Col, Card, Button } from 'react-bootstrap';

class District extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

  render() {
    return (
        <>
        <Carousel fade="true" >
            <Carousel.Item>
                <img className="d-block w-100 carousel-img" src="/images/sample3.jpg" />
                <Carousel.Caption>
                    <img className="carousel-caption-img" src="/fleur-de-lis/fleur-de-lis-marque-purple-png.png" />
                    <br/><br/>
                    <h1 className="carousel-text"><bold>Southampton City Explorer Scouts</bold></h1>
                    <br/>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 carousel-img" src="images/sample4.jpg" />
                <Carousel.Caption>
                    <img className="carousel-caption-img" src="/fleur-de-lis/fleur-de-lis-marque-purple-png.png" />
                    <br/>
                    <h1 className="carousel-text"><bold>Southampton City Explorer Scouts</bold></h1>
                    <br/>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <br/>
        <Container  className="centre-text">
            <Row>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="images/sample4.jpg" />
                        <Card.Body>
                            <Card.Title>Enterprise</Card.Title>
                            <Card.Text>Woop</Card.Text>
                            <Card.Link href="/enterprise">Challenges</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="images/sample2.jpg" />
                        <Card.Body>
                            <Card.Title>Griffin</Card.Title>
                            <Card.Text>Woop</Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="images/sample5.jpg" />
                        <Card.Body>
                            <Card.Title>Kraken</Card.Title>
                            <Card.Text>Woop</Card.Text>
                            <Card.Link href="/kraken">Challenges</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="images/sample3.jpg" />
                        <Card.Body>
                            <Card.Title>Phoenix</Card.Title>
                            <Card.Text>Woop</Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col>
                    <Card>
                        <Card.Img className="wide-card-img" variant="top" src="images/sample1.jpg" />
                        <Card.Body>
                            <Card.Title>Young Leaders</Card.Title>
                            <Card.Text>Woop</Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col>
                    <Card>
                        <Card.Img className="wide-card-img" variant="top" src="images/sample1.jpg" />
                        <Card.Body>
                            <Card.Title>Duke of Edinburgh</Card.Title>
                            <Card.Text>Woop</Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        <br/>
        </>
    );
  }
}

export default District;