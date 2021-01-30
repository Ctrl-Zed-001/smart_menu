import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useDispatch } from "react-redux"

const Details = () => {
    const [selectedDish, setSelectedDish] = useState({})
    const { dish_id } = useParams()
    const dishes = useSelector(state => state.dishes.allDishes)
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(
        () => {
            // GET DISH DETAILS FROM REDUX STORE
            let selection = dishes.filter(dish => dish.id === dish_id)
            setSelectedDish(selection[0])
        }, [dish_id, dishes]
    )

    const addToTable = () => {
        dispatch({ type: "ADDDISH", payload: selectedDish })
    }

    return (
        <section className="dish_detail">
            <div className="container-fluid">

                <i onClick={() => history.goBack()} className="fas fa-arrow-left"></i>

                {/* DISH BANNER IMAGE */}
                <img src={selectedDish.image} alt="" className="img-fluid" />
                {/* DISH DETAILS */}
                <h5>{selectedDish.name} <span className="text-success"> {selectedDish.veg ? "Veg" : "Non Veg"} </span> </h5>
                <p>Category</p>
                <p className="text-danger">Rs. {selectedDish.price}</p>

                {/* ADD TO TABLE BUTTON */}
                <button className="btn btn-theme" onClick={addToTable} >add to table</button>

            </div>
        </section>
    )
};

export default Details