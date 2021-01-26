import React, { useEffect } from 'react'
import SwiperCore, { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'
import DishBox from '../Components/DishBox';
import SlideContent from '../Components/SlideContent';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"

SwiperCore.use([Virtual]);

const Homepage = () => {
    const dishes = useSelector(state => state.dishes.allDishes)
    const specials = useSelector(state => state.dishes.specials)
    const bestSelling = useSelector(state => state.dishes.bestSelling)
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

    return (
        <section className="homepage">
            <div className="container-fluid">

                {/* TODAYS SPECIAL */}
                <div className="todays_special p-3 ps-0">
                    <h6 className="fw-bold">TODAYS SPECIAL</h6>
                    {
                        specials.length === 0 ?
                            <></> :
                            <Swiper spaceBetween={10} slidesPerView={3} virtual>
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
                <div className="todays_special p-3 ps-0">
                    <h6 className="fw-bold">BEST SELLING</h6>
                    {
                        bestSelling.length === 0 ?
                            <></> :
                            <Swiper spaceBetween={10} slidesPerView={2} virtual>
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

                {/* ALL DISHES WITH PAGINATION & SEARCH*/}
                <div className="menu_section">
                    <h6 className="fw-bold">ALL DISHES</h6>
                    <div className="veg_toggle d-flex">
                        <input type="checkbox" id="switch" /><label className="mt-1" htmlFor="switch"></label>
                        <p className="ms-3">Veg Only</p>
                    </div>

                    <div className="row">
                        {
                            dishes.map((dish, index) => {
                                return (
                                    <div key={index} className="col-6 col-md-3 mb-4">
                                        <DishBox dish={dish} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                {/* CATEGORY POPUP */}
                <div className="menu_categories">
                    <div className="btn-group dropup">
                        <button className="btn btn-theme rounded-pill fw-bold category_toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fas fa-utensils"></i> menu
                    </button>
                        <ul className="dropdown-menu">
                            {
                                specials.map((special, index) => <li key={index}>{special.name}</li>)
                            }
                        </ul>
                    </div>
                </div>

            </div>

            <Link to="/table">
                <button className="btn btn-primary">go to table</button>
            </Link>
        </section>
    )
}

export default Homepage
