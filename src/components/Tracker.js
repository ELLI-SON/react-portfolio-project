import React from 'react'
import {Card, CardHeader,CardBody, Button} from 'reactstrap'


export default function Track(){
    const favexercise=[];
    const favsnack=[];

    return(
        <>
        <h2 className='mt-2' style={{textAlign: 'center'}}>These are my favorite ❤️ </h2>
        <Card>
            <CardHeader style={{textAlign: 'center'}}>Favorite Exercises</CardHeader>
            <CardBody>
            <Button color='secondary'>Delete</Button>
            </CardBody>

        </Card>
        <br/>
        <hr style={{border:"3px solid red"}}/>
        <Card>
            <CardHeader style={{textAlign: 'center'}}>Favorite Snacks</CardHeader>
            <CardBody>
            <Button color='secondary'>Delete</Button>
            </CardBody>
        </Card>
        </>
    )
}    