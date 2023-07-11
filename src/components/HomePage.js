import React from 'react'
import homeimage from '../app/assets/preghome.jpeg'


export default function HomePage(){
    return(
        <>
            <h3 className='homepage'>Make Healthy Choices</h3>
            <p className='hometext'>Pregnancy can be a difficult stage of life. To make it a little easier, there are some things you can do to stay healthy for you and your baby like exercising and choosing healthy snacks. This app helps your find pregnancy safe exercises and healthy snacks to combat gestational diabetes, blood clots, and other health-related issues. 
                This app helps you navigate pregnancy to cater to your own lifestyle and track which exercises and snacks you have tried. Always consult with your OBGYN when trying new things to make sure it is safe for you and your baby.
            </p>
            <img src={homeimage} style={{paddingTop: 20}} className='homeimg'/>
        </>
    )
}