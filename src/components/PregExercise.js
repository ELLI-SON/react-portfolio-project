import React from 'react'
import { Container, Col, Button, Row } from 'reactstrap'
import {Card, CardHeader, CardBody, CardImg} from 'reactstrap'
import { TRIMESTER_EXERCISES } from '../test_data'


export default function PregExercise(){
    return(
        <Container>
            <Row>
                {TRIMESTER_EXERCISES.map((x,idx)=>{
                    return(
                        <Col key={idx}>
                            <Card style={{width:'20rem'}}>
                                <CardHeader>{x.exercise}
                                
                                </CardHeader>
                                <CardBody>
                                    {x.description}{'\n'}
                                    <CardImg className='walking' src={x.image} alt={x.name}/>
                                <Col>
                                    <br/>
                                    <Button color='secondary'>+ Add exercise</Button>
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