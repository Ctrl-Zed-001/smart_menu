import React from 'react'

const SlideContent = ({ special }) => {
    return (
        <div className="slide_content">
            <div className="card border-0 shadow-sm">
                <div className="card-body">
                    <img src={special.image} alt="" className="img-fluid" />
                    <p>{special.name}</p>
                    <p>Rs. {special.price}</p>
                </div>
            </div>
        </div>
    )
}

export default SlideContent
