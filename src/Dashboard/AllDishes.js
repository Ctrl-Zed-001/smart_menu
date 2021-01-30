import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import DishBox from '../Components/DishBox'

const AllDishes = () => {

    const dishes = useSelector(state => state.dishes.allDishes)
    const dispatch = useDispatch()

    useEffect(
        () => {
            const getData = async () => {
                const req = await fetch(`${window.location.origin}/data.json`).then(data => data.json())
                dispatch({ type: 'GETALLDATA', payload: req })
            }
            if (dishes.length === 0) {
                getData()
            }
        }, [dishes, dispatch]
    )

    return (
        <section className="admin_alldishes">
            <div className="container-fluid pt-4">
                {/* FILTER AND SEARCH BAR */}
                <div className="row">
                    <div className="col-6">
                        <div className="input-group mb-3 ">
                            <span className="input-group-text" id="basic-addon1">
                                <i className="fas fa-search"></i>
                            </span>
                            <input type="text" className="form-control" placeholder="search..." />
                        </div>

                    </div>
                    <div className="col-6">
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                Categories
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><span className="dropdown-item">Starter</span></li>
                                <li><span className="dropdown-item">Burgers</span></li>
                                <li><span className="dropdown-item">pizzas</span></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* DISH BOXES */}
                <div className="row">
                    {
                        dishes.map((dish, index) => {
                            return (
                                <div className="col-6" key={index}>
                                    <DishBox dish={dish} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <button className="btn btn-theme position-fixed bottom-0 w-100">add new dish</button>
        </section>
    )
}

export default AllDishes
