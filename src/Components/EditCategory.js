import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const EditCategory = ({ selectedCategory }) => {
    const [name, setName] = useState()
    const dispatch = useDispatch()

    const editCategory = () => {
        dispatch({ type: 'EDITCATEGORY', payload: name })
    }

    return (
        <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-sm ">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="editModalLabel">Edit Category</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label className="form-label">Category Name</label>
                            <input defaultValue={selectedCategory} type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={editCategory}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditCategory
