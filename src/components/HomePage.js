import React from 'react'
import { Row, Col, Button} from 'reactstrap'
import homeimage from '../app/assets/preghome.jpeg'


export default function HomePage(){
    return(
        <>
            <h3 className='homepage'>Make Healthy Choices</h3>
            <p className='hometext'>Pregnancy is a different stage of life. To make it a little easier, some things you can do to stay healthy for you and your baby is exercise and choosing healthy snacks. This app helps your find pregnancy safe exercises and healthy snacks to combat gestational diabetes, blood clots, and other health-related issues. 
                This app helps you navigate it to your own lifestyle and track which exercises and snacks you have tried and can customize it to fit your own lifestyle and pregnancy. Always consult with your OBGYN when trying new things to make sure it is safe for you and your baby.
            </p>
            <img src={homeimage} className='homeimg'/>
            <Row>
                <Col>
                    <Button color='warning'>+ Add more exercises to any Trimester</Button>
                </Col>
            </Row>
        </>
    )
}