import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import DishBox from '../Components/DishBox'
import Filterbar from '../Components/Filterbar'
import { Link } from 'react-router-dom'

const AllDishes = () => {

    const dishes = useSelector(state => state.dishes.allDishes)
    const dispatch = useDispatch()
    const [currentDishes, setCurrentDishes] = useState([])

    useEffect(
        () => {
            const getData = async () => {
                const req = await fetch(`${window.location.origin}/data.json`).then(data => data.json())
                dispatch({ type: 'GETALLDATA', payload: req })
                setCurrentDishes(req)
            }
            if (dishes.length === 0) {
                getData()
            }
        }, [dishes, dispatch]
    )

    const filterDishes = (dishName) => {
        if (dishName !== '') {
            let newCurrent = currentDishes.filter(dish => dish.name.includes(dishName))
            setCurrentDishes(newCurrent)
        } else {
            setCurrentDishes(dishes)
        }

    }
    console.log(currentDishes)
    return (
        <section className="admin_alldishes">
            <div className="container-fluid pt-4">
                {/* FILTER AND SEARCH BAR */}
                <Filterbar filterDishes={filterDishes} />

                {/* DISH BOXES */}
                <div className="row">
                    {
                        currentDishes.map((dish, index) => {
                            return (
                                <div className="col-6" key={index}>
                                    <DishBox dish={dish} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <Link to="/admin/newDish">
                <button className='w-100 btn btn-danger position-fixed bottom-0 border-0'>add new dish</button>
            </Link>

        </section>
    )
}

export default AllDishes
