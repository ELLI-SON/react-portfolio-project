import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import {Card, CardHeader, CardBody, CardImg } from 'reactstrap'
import { PREG_SNACKS } from '../test_data'

export default function PregSnack(){
    return(
        <Container>
        <Row>
            {PREG_SNACKS.map((x,idx)=>{
                return(
                    <Col key={idx}>
                        <Card className='card' style={{width:'20rem'}}>
                            <CardHeader style={{textAlign:'center'}}>{x.snack}</CardHeader>
                            <CardImg className='cardimg' src={x.image} alt={x.name}/>
                            <CardBody>
                                {x.label}{'\n'}
                            <Col>
                                <br/>
                                <Button color='warning'>+ Add Snack</Button>
                            </Col>
                        </CardBody>
                        </Card>
                    </Col>
                )
            })}
        </Row>
    </Container>
    )
}