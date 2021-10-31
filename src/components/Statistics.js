import React from "react";
import { Container, Row } from "react-bootstrap";

const Statistics = ({sis, bro}) => {
  return (
      <Container className=" mt-5 d-flex" style={{justifyContent: 'space-around', fontSize: 50}}>
        <Row>{sis} Sis!</Row>
        <Row>{bro} Bro!</Row> 
      </Container>
    
  )
};

export default Statistics;
