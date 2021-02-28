import React from 'react'
import { useDispatch } from 'react-redux'

const TableItem = ({ index, dish }) => {
    const dispatch = useDispatch()

    const onPlusClick = (index) => {
        dispatch({ type: "ADDQUANTITY", payload: index })
    }

    const onMinusClick = (index) => {
        dispatch({ type: "REDUCEQUANTITY", payload: index })
    }


    return (
        <div className="card mb-3 border-0 shadow-sm">
            <div className="d-flex align-items-center justify-content-between px-3 py-2">
                <div className="align-items-center d-flex">
                    <div className="me-2 text-danger veg-nonveg-dot">.</div>
                    <p className="mb-0">{dish.name}</p>
                </div>
                <div className="d-flex align-items-center">
                    <div className="btn-group btn-group-sm me-2" role="group" aria-label="Basic example">
                        <button onClick={() => onMinusClick(index)} type="button" className="btn btn-add text-secondary">
                            <i className="fas fa-minus"></i>
                        </button>
                        <p className="dish_counter mb-0">{dish.quantity}</p>
                        <button onClick={() => onPlusClick(index)} type="button" className="btn btn-minus text-secondary">
                            <i className="fas fa-plus"></i>
                        </button>
                    </div>
                    <p className="text-secondary mb-0"><i className="fas fa-rupee-sign "></i> {dish.price}</p>
                </div>
            </div>
        </div>
    )
}

export default TableItem
