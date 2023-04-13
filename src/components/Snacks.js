import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import {Card, CardHeader, CardBody, CardImg } from 'reactstrap'

export default function PregSnack({snacklist, movesnack}){
    return(
        <Container>
            <h1 className='pageheader'>Healthy Snacks</h1>
            <p className='pagetext'>Pick your favorite snacks. Click to add them to your Tracker!</p>
            <Row>
                {snacklist.map((snack)=>{
                    return(
                        <Col className='row' key={snack.id}>
                            <Card className='card' style={{width:'20rem'}}>
                                <CardHeader style={{textAlign:'center'}}>{snack.snack}</CardHeader>
                                <CardImg className='cardimg' src={snack.image} alt={snack.name}/>
                                <CardBody>
                                    {snack.label}{'\n'}
                                <Col>
                                    <br/>
                                    {!snack.favorite ? <Button color='warning' onClick={()=> movesnack(snack.id)}>+ Add snack</Button> : <Button color='danger'>Favorited!</Button>}
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