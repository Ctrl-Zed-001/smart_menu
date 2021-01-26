import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Details = () => {
    const [selectedDish, setSelectedDish] = useState({})
    const { dish_id } = useParams()
    const dishes = useSelector(state => state.dishes.allDishes)

    useEffect(
        () => {
            // GET DISH DETAILS FROM REDUX STORE
            let selection = dishes.filter(dish => dish.id === dish_id)
            setSelectedDish(selection[0])
        }, [dish_id, dishes]
    )
    return (
        <section className="dish_detail">
            <div className="container-fluid">

                {/* DISH BANNER IMAGE */}

                {/* DISH DETAILS */}
                <h5>{selectedDish.name} <span className="text-success"> {selectedDish.veg ? "Veg" : "Non Veg"} </span> </h5>
                <p>Category</p>
                <p className="text-danger">Rs. {selectedDish.price}</p>

                {/* ADD TO TABLE BUTTON */}
                <button className="btn btn-theme">add to table</button>

            </div>
        </section>
    )
};

export default Details