import React from 'react'
import { useHistory } from 'react-router-dom'
import TableItem from '../Components/TableItem'
import { useSelector } from "react-redux"

const TablePage = () => {
    const history = useHistory()
    const dishes = useSelector(state => state.table.dishes)
    const total = useSelector(state => state.table.total)
    return (
        <section className="table_page">
            <div className="page_header p-2 position-fixed w-100 d-flex py-3 shadow">
                <i className="fas fa-arrow-left text-white mt-2 me-3 fs-3 ms-1" onClick={() => history.goBack()}></i>
                <h1 className="text-white">Order</h1>
            </div>
            <div className="container-fluid main_container">
                {
                    dishes?.length === 0 ?
                        <p className='text-center text-secondary fs-3'>Nothing on your table!! :(</p> :
                        <>
                            {
                                dishes.map((dish, index) => <TableItem key={index} index={index} dish={dish} />)
                            }

                            <div className="card border-0 mt-4 shadow-sm">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <h6>TO PAY</h6>
                                        <h6 className='fw-bold'><i className="fas fa-rupee-sign"></i> {total}</h6>
                                    </div>
                                </div>
                            </div>
                        </>
                }



            </div>
        </section>
    )
}

export default TablePage
