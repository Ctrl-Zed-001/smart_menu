import React from 'react'
import { useDispatch } from "react-redux"

const DishBox = ({ dish }) => {
    const dispatch = useDispatch()

    const addToTable = (dish) => {
        dispatch({ type: "ADDDISH", payload: dish })
    }

    return (
        <div className="dish_box shadow-sm">
            <div className="card border-0 rounded">
                <div className="food_image" style={{ backgroundImage: `url(${dish.image})`, backgroundSize: 'cover', height: '6.5rem', width: '100%' }}>
                    <div className="badge bg-secondary ms-1"><i className="far fa-clock"></i> 15-20 min</div>
                </div>
                <div className="card-body pb-0">
                    <h6 className="mb-1">{dish.name}</h6>
                    <div className="col"><p className="text-secondary price mb-0"><i className="fas fa-rupee-sign"></i> {dish.price}</p></div>

                </div>
                <button onClick={() => addToTable(dish)} className="btn btn-link text-danger">add to table</button>
            </div>
        </div>
    )
}

export default DishBox
