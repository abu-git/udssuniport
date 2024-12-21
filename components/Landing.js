import React from 'react'
import landingImage from '../public/landing.jpg'

function Landing() {
    return (
        <div>
            <div className='w-full h-screen'>
                <div>
                    <img
                        src='/landing2.png'
                        layout='fill'
                        className='object-cover w-full h-screen'
                    />
                </div>
            </div>
        </div>
    )
}

export default Landing