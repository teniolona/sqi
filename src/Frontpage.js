import React from 'react'

const Frontpage = () => {
    const mystyle = {
        // color: "red",
        // fontSize: "20px",
        fontFamily: "Poppins"
        
    }
    return (
        <main className='row justify-content-center gap-5 w-100 align-items-end pb-2'>
            <div style={mystyle} className="col-4 mb-5">
                <p className='display-3 fw-bold color2'>Study to become a global talent</p>
                <p className='newfont'>Learn new tech skills using world-class curriculum and top industry experts.</p>
                <button type='button' className='btn btn-outline-success p-3'>Learn More</button>
            </div>
            <div className='col-6 imgedit w-auto'><img src={require("./images/sqimodel.png")} alt="SQI Model" className='w-auto h-auto imgrad'/></div>
        </main>
    )
}

export default Frontpage;