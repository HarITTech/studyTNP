import React from 'react'
import './SubHeader.css'

const SubHeader = () => {
    const options = ["All", "Twenty20 Cricket", "Music", "Live", "Mixes", "Gaming", "Debates", "Coke Studio Pakistan", "Democracy", "Pakistani dramas", "Comedy", "Pakistani dramas", "Comedy", "Pakistani dramas", "Comedy",];
    return (
        <div className='fullHomePage'>

            <div className="homePage_options">
            {
                options.map((item, index) => {
                return (
                    <div key={index} className="homePage_option">
                    {item}
                    </div>
                );
                })
            }
            </div>
        </div>
    )
}

export default SubHeader
