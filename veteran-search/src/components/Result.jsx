import { Col, Container, Row, Image } from 'react-bootstrap'

import '../style.css';

export const Result = ({data}) => {
  console.log(JSON.stringify(data));
  return ( 
    <Container className='result'>
      <Container className='result-display'>
        <Row>
          <Col xs={3}>
            <Image src={data.photo} thumbnail></Image>
          </Col>
          <Col sm>
            <Row md>
              <Col sm><h3>{data.forename}, {data.surname}</h3></Col>
              <Col sm className='right-text'><h4>Service No. {data.serviceNumber}</h4></Col>
            </Row>
            <Row md>
              <Col sm>
                <h5>{data.forceServiceBranch}, {data.rank}, {data.unit}</h5>
              </Col>
            </Row>
            <Row xl>
              <Col><Container className='description'>{data.description}</Container></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
