import React from 'react'

const TableItem = ({ index, dish }) => {

    const onPlusClick = (index) => {
        console.log(index)
    }

    const onMinusClick = (index) => {
        console.log(index)
    }


    return (
        <div className="card mb-3">
            <div className="row">
                <div className="col-4">
                    <img src={dish.image} alt="" className="img-fluid" />
                </div>
                <div className="col-5">
                    <p className="fw-bold mb-1">{dish.name}</p>
                    <p>Rs. {dish.price}</p>
                </div>
                <div className="col-3">
                    <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
                        <button onClick={() => onPlusClick(index)} type="button" className="btn btn-add">
                            <i className="fas fa-minus"></i>
                        </button>
                        <p className="dish_counter">{dish.quantity}</p>
                        <button onClick={() => onMinusClick(index)} type="button" className="btn btn-minus">
                            <i className="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableItem
