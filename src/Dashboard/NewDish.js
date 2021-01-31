import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const NewDish = () => {
    const history = useHistory()
    const [form, setForm] = useState({})

    const handleInput = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        console.log(form)
    }

    return (
        <section className="new_dish">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="mb-3">
                            <label htmlFor="formFileSm" className="form-label">upload image</label>
                            <input name="image" className="form-control form-control-sm" id="formFileSm" type="file" onChange={handleInput} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Dish name</label>
                            <input type="text" name="name" className="form-control" onChange={handleInput} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="form-label">Dish price</label>
                            <input type="number" name="price" className="form-control" onChange={handleInput} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="category" className="form-label">Category</label>
                            <select onChange={handleInput} defaultValue="choose category" name="category" className="form-select" aria-label="Default select example">
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <div className="form-check form-switch">
                                <input className="form-check-input" name="todays_special" type="checkbox" id="todaysSpecial" onChange={handleInput} />
                                <label className="form-check-label" htmlFor="todaysSpecial">Todays special</label>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="form-check form-switch">
                                <input className="form-check-input" name="best_selling" type="checkbox" id="bestSelling" onChange={handleInput} />
                                <label className="form-check-label" htmlFor="bestSelling">best selling</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-6 d-grid">
                        <button className="btn btn-success" onClick={handleSubmit}>Add</button>
                    </div>
                    <div className="col-6 d-grid">
                        <button className="btn btn-warning" onClick={() => history.goBack()} >Cancel</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewDish
