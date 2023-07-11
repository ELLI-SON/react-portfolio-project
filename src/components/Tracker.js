import React from 'react'
import {Card, CardHeader,CardBody, Button, CardImg, Row} from 'reactstrap'
import { Col } from 'reactstrap'
import NoteForm from './NoteForm';



export default function Track({exerciselist, remove, snacklist, removesnack}){
   const favoriteExercises = exerciselist.filter((x)=>x.favorite);
   const favoriteSnacks = snacklist.filter((snack)=>snack.favorite);

    return(
        <>
            <h2 className='mt-2' style={{textAlign: 'center'}}>These are my favorite ❤️ </h2>
        <Card>
            <CardHeader style={{textAlign: 'center'}}>Favorite Exercises</CardHeader>
            <Row>
                {favoriteExercises.map((x)=>(
                    <Col className='row' key={x.id}>
                        <Card className='card' style={{width:'20rem'}}>
                            <CardHeader style={{textAlign:'center'}}>{x.exercise}</CardHeader>
                            <CardBody>
                                {x.description}{'\n'}
                                <CardImg src={x.image} alt={x.name}/>
                            <Col>
                                <br/>
                                <Button color='secondary' onClick={()=>remove(x.id)}>Remove exercise</Button>
                                <NoteForm/>
                                <Row>
                                    {}
                                </Row>
                            </Col>
                        </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Card> 
        <br/>
        <hr style={{border:"3px solid red"}}/>

        <Card>
            <CardHeader style={{textAlign: 'center'}}>Favorite Snacks</CardHeader>
            <Row>
                {favoriteSnacks.map((snack)=>{
                return(
                    <Col className='row' key={snack.id}>
                        <Card className='card' style={{width:'20rem'}}>
                            <CardHeader style={{textAlign:'center'}}>{snack.snack}</CardHeader>
                            <CardImg className='cardimg' src={snack.image} alt={snack.name}/>
                            <CardBody>
                                {snack.label}{'\n'}
                            <Col>
                                <br/>
                                <Button color='secondary' onClick={()=>removesnack(snack.id)}>Remove Snack</Button>
                                <NoteForm/>
                            </Col>
                        </CardBody>
                        </Card>
                    </Col>
                )
            })}
            </Row>
        </Card>`
    
        <hr style={{border:"3px solid red"}}/>
        <Card>

        </Card>
    </>
    )
} 