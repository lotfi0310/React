import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
  function Notfound() {
    return (
        <div>
          <Container style={{padding:'5%'}}>
            <Row classname="justify-content-center">
              <Col>
              <Image src={require('../assets/images/notfound.jpeg')} fluid />
              
              </Col>
              </Row>
             <Row>
             <Link >ReadMore</Link>
             </Row>
            
          </Container>
      </div>
    )
}

export default Notfound ;
