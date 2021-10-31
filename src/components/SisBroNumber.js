import React from 'react'
import { Container, Row } from 'react-bootstrap'

const SisBroNumber = ({bro, sis}) => {
  return (
      <Container className=" mt-5 d-flex" style={{justifyContent: 'space-around', fontSize: 50}}>
        <Row>{sis} Sis!</Row>
        <Row>{bro} Bro!</Row> 
      </Container>
    
  )
}

export default SisBroNumber
