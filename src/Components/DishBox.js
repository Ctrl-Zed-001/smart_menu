import React from 'react'
import { Link } from 'react-router-dom'

const DishBox = ({ dish }) => {
    return (
        <div className="dish_box">
            <div className="card">
                <div className="card-body">
                    <img src={dish.image} alt="" className="img-fluid" />
                    <h6>
                        <Link to={`/${dish.id}`}>{dish.name}</Link>
                    </h6>
                    <p>Rs. {dish.price}</p>
                    <button className="btn btn-theme btn-sm rounded-circle"><i className="fas fa-plus"></i></button>
                </div>
            </div>
        </div>
    )
}

export default DishBox
