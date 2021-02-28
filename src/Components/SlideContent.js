import React from 'react'

const SlideContent = ({ special }) => {
    return (
        <div className="slide_content rounded shadow">
            <div className="card border-0 shadow-sm">

                <div className="card_image_sec" style={{ backgroundImage: `url(${special.image})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '8.25rem', width: '100%' }}>
                    <div className="best-selling-tag badge bg-danger mt-2 ms-2">Best Selling</div>
                </div>
                <div className="card_info_sec p-3">
                    <h6 className="text-black mb-0">{special.name}</h6>
                    <span className="text-secondary text-success">veg</span>
                    <div className="row mt-2">
                        <div className="col">
                            <p className="text-secondary"><i className="far fa-clock"></i> 15-20 min</p>
                        </div>
                        <div className="col text-end">
                            <p className="text-secondary price"><i className="fas fa-rupee-sign"></i> {special.price}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SlideContent
