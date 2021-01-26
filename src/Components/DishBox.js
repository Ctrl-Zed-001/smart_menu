import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux"

const DishBox = ({ dish }) => {
    const dispatch = useDispatch()

    const addToTable = (dish) => {
        dispatch({ type: "ADDDISH", payload: dish })
    }

    return (
        <div className="dish_box">
            <div className="card">
                <div className="card-body">
                    <img src={dish.image} alt="" className="img-fluid" />
                    <h6>
                        <Link to={`/dish/${dish.id}`}>{dish.name}</Link>
                    </h6>
                    <p>Rs. {dish.price}</p>
                    <button onClick={() => addToTable(dish)} className="btn btn-theme btn-sm rounded-circle"><i className="fas fa-plus"></i></button>
                </div>
            </div>
        </div>
    )
}

export default DishBox
