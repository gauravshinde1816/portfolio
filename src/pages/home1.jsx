import React from 'react'
import "./home1.css"
import bg from  "../assets/bg.mp4"
const home1 = () => {
    return (
        <div>
            <video id="background-video"   autoPlay loop>
                <source  src={bg} type="video/mp4" />
            </video>

            <h1>THIS IS A RIVER.</h1>
<h2>How majestic.</h2>
        </div>
    )
}

export default home1