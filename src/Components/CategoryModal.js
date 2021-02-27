import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const CategoryModal = () => {

    const [name, setName] = useState('')
    const dispatch = useDispatch()

    const addCategory = () => {
        dispatch({ type: 'NEWCATEGORY', payload: name })
    }

    return (
        <div className="modal fade" id="addModal" tabIndex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-sm ">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="addModalLabel">Add Category</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label className="form-label">Category Name</label>
                            <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={addCategory}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryModal
