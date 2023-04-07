import React from 'react'
import { Container, Col, Button, Row } from 'reactstrap'
import {Card, CardHeader, CardBody, CardImg} from 'reactstrap'


export default function PregExercise({exerciselist, move}){
    return(
        <Container>
            <h1 className='pageheader'>Exercises</h1>
            <p className='pagetext'>Pick your favorite exercises. Click to add them to your Tracker!</p>
            <Row>
                {exerciselist.map((x)=>{
                    return(
                        <Col key={x.id}>
                            <Card className='card' style={{width:'20rem'}}>
                                <CardHeader style={{textAlign:'center'}}>{x.exercise}</CardHeader>
                                <CardBody>
                                    {x.description}{'\n'}
                                    <CardImg src={x.image} alt={x.name}/>
                                <Col>
                                    <br/>
                                    {!x.favorite ? <Button color='warning' onClick={()=> move(x.id)}>+ Add exercise</Button> : <Button color='danger'>Favorited!</Button>}
                                    
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