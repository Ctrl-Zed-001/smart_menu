import React from 'react'
import { Link } from 'react-router-dom'

const Filterbar = ({ filterDishes }) => {
    return (
        <div className="row">
            <div className="col-6">
                <div className="input-group mb-3 ">
                    <span className="input-group-text" id="basic-addon1">
                        <i className="fas fa-search"></i>
                    </span>
                    <input type="text" className="form-control" placeholder="search..." onChange={(e) => filterDishes(e.target.value)} />
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
                        <li><hr className="dropdown-divider" /></li>
                        <li>
                            <Link to='/admin/categories'>
                                <span className='dropdown-item'>add / edit</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Filterbar
