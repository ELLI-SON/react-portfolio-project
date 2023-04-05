import React from 'react'
import { Container, Col, Button, Row } from 'reactstrap'
import {Card, CardHeader, CardBody, CardImg} from 'reactstrap'
import { TRIMESTER_EXERCISES } from '../test_data'
import { useState } from 'react'


export default function PregExercise(){
    const[exerciselist, setexerciselist]= useState(TRIMESTER_EXERCISES)
    const handleSubmit=()=>{}

    return(
        <Container>
            <Row>
                {exerciselist.map((x,idx)=>{
                    return(
                        <Col key={idx}>
                            <Card className='card' style={{width:'20rem'}}>
                                <CardHeader style={{textAlign:'center'}}>{x.exercise}</CardHeader>
                                <CardBody>
                                    {x.description}{'\n'}
                                    <CardImg src={x.image} alt={x.name}/>
                                <Col>
                                    <br/>
                                    <Button color='warning' onClick={handleSubmit}>+ Add exercise</Button>
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