import React, { useState, useEffect } from 'react'
import SwiperCore, { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'
import DishBox from '../Components/DishBox';
import SlideContent from '../Components/SlideContent';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import DishModal from '../Components/DishModal';

SwiperCore.use([Virtual]);

const Homepage = () => {
    const dishes = useSelector(state => state.dishes.allDishes)
    const specials = useSelector(state => state.dishes.specials)
    const bestSelling = useSelector(state => state.dishes.bestSelling)
    const dishesOnTable = useSelector(state => state.table.dishes)
    const [selectedDish, setSelectedDish] = useState({})
    const dispatch = useDispatch()

    useEffect(
        () => {
            const getData = async () => {
                const req = await fetch(`${window.location.href}/data.json`).then(data => data.json())
                dispatch({ type: 'GETALLDATA', payload: req })
            }
            getData()
        }, [dispatch]
    )

    const selectDish = (dish) => {
        setSelectedDish(dish)
    }

    return (
        <section className="homepage">
            {/* PAGE HEADER */}
            <div className="page_header p-2 position-fixed w-100 shadow">
                <h1 className="text-white">Smart Menu</h1>
                <div className="mb-3">
                    <input type="text" className="form-control rounded shadow-sm mt-3 border-0" placeholder="search by dish name..." />
                </div>
            </div>

            {/* CATEGORY STICKY BAR */}

            {/* MAIN CONTAINER */}
            <div className="container-fluid main_container">

                {/* TODAYS SPECIAL */}
                <div className="todays_special">
                    <h5 className="section_title mb-3">TODAYS SPECIAL</h5>
                    {
                        specials.length === 0 ?
                            <></> :
                            <Swiper spaceBetween={10} slidesPerView={1.25} centeredSlides={true} virtual>
                                {
                                    specials.map((special, index) => {
                                        return (
                                            <SwiperSlide key={index} virtualIndex={index}>
                                                <SlideContent special={special} />
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                    }
                </div>

                {/* TOP SELLING */}
                <div className="todays_special">
                    <h5 className="section_title mb-3">TOP SELLING</h5>
                    {
                        specials.length === 0 ?
                            <></> :
                            <Swiper spaceBetween={10} slidesPerView={1.25} centeredSlides={true} virtual>
                                {
                                    bestSelling.map((special, index) => {
                                        return (
                                            <SwiperSlide key={index} virtualIndex={index}>
                                                <SlideContent special={special} />
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                    }
                </div>

                {/* ALL DISHES WITH PAGINATION & SEARCH*/}
                <div className="menu_section">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="section_title">STARTERS</h5>
                        <select className="form-select rounded-pill border-0 w-50 shadow-sm" aria-label="Default select example">
                            <option>choose category</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    {/* <div className="veg_toggle d-flex">
                        <input type="checkbox" id="switch" /><label className="mt-1" htmlFor="switch"></label>
                        <p className="ms-3">Veg Only</p>
                    </div> */}

                    <div className="row mt-3">
                        {
                            dishes.map((dish, index) => {
                                return (
                                    <div key={index} className="col-6 col-md-3 mb-4">
                                        <DishBox selectDish={selectDish} dish={dish} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>


            </div>


            <button className="table-button btn btn-theme rounded-circle py-2">
                <Link to="/table">
                    <i className="fas fa-shopping-basket text-white"></i>
                    {
                        dishesOnTable.length > 0 ?
                            <span className="item_table_counter">{dishesOnTable.length}</span> :
                            <></>
                    }

                </Link>
            </button>

            <DishModal dish={selectedDish} />

        </section>
    )
}

export default Homepage
