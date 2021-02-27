import React from 'react'

const DishModal = ({ dish }) => {
    return (
        <div className="modal fade" id="dishModal" tabIndex="-1" aria-labelledby="dishModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content">
                    <div className="modal-body p-0">
                        <div className="dish_view_img" style={{ backgroundImage: `url(https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/cheeseomelette_80621_16x9.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center', height: '13rem', width: '100%' }}>
                            <i data-bs-dismiss="modal" aria-label="Close" className="fas fa-arrow-left text-white ms-2 mt-2 fs-2"></i>
                        </div>
                        <div className="p-3">
                            <h2 className="fw-bold">California Roll with Black Sesame</h2>
                            <h4 className="text-secondary"><i className="fas fa-rupee-sign"></i> 250</h4>
                            <p className="text-success mb-2">Veg</p>
                            <p className="text-secondary mb-2"><i className="far fa-clock"></i> 15 - 2- min</p>

                            <h5 className='fw-bold mt-4'>Description</h5>
                            <p className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor cum sapiente alias culpa ab illo debitis </p>


                        </div>
                    </div>
                    <div className="d-grid p-0">
                        <button type="button" className="btn btn-theme btn-lg w-100 rounded-0 fw-bold" data-bs-dismiss="modal">Add to Table</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DishModal
