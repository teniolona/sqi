import React from 'react'

const Frontpage = () => {
    const mystyle = {
        color: "red",
        fontSize: "20px",
        fontFamily: "sans-serif"
    }
    return (
        <>
            <h1 style={mystyle}>My New React Class</h1>
            <div className='mydiv' style={{backgroundColor: 'yellowgreen'}}>New App</div>
        </>
    )
}

export default Frontpage;