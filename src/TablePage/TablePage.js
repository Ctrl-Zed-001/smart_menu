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
            <div className="container-fluid">
                <i className="fas fa-arrow-left" onClick={() => history.goBack()} ></i>

                {
                    dishes?.length === 0 ?
                        <p>Nothing on your table!! :(</p> :
                        <>
                            {
                                dishes.map((dish, index) => <TableItem key={index} index={index} dish={dish} />)
                            }
                            <h5>Your total = {total}</h5>
                        </>
                }



            </div>
        </section>
    )
}

export default TablePage
