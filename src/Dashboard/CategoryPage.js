import React, { useState } from 'react'
import CategoryModal from '../Components/CategoryModal'
import { useSelector } from 'react-redux'
import EditCategory from '../Components/EditCategory'

const CategoryPage = () => {

    const categories = useSelector(state => state.categories)
    const [selectedCategory, setSelectedCategory] = useState({})

    return (
        <section className="category_page">
            <CategoryModal />
            <EditCategory selectedCategory={selectedCategory} />
            <div className="container-fluid">
                <h5>add /edit category</h5>


                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>name</th>
                            <th colSpan='2'>food count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categories.map((category, index) => {
                                return (
                                    <tr key={index}>
                                        <td>001</td>
                                        <td>{category}</td>
                                        <td>1</td>
                                        <td>
                                            <div className="dropdown">
                                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">

                                                </button>
                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                    <li><span className="dropdown-item" data-bs-toggle="modal" data-bs-target="#editModal" onClick={() => setSelectedCategory(category)}>edit</span></li>
                                                    <li><span className="dropdown-item">delete</span></li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <button data-bs-toggle="modal" data-bs-target="#addModal" className="btn btn-success">add new category</button>
            </div>
        </section>
    )
}

export default CategoryPage
