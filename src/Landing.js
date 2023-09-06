import React from 'react'
const Landing = () => {
    const mystyle = {
        color: "red",
        fontSize: "20px"
    }
    return (
        <>
            <h1 style={mystyle}>My New React Class</h1>
            <div className='mydiv' style={{backgroundColor: 'yellowgreen'}}>New App</div>
        </>
    )
}

export default Landing;