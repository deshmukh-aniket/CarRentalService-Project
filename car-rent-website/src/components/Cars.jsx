import React, { useEffect, useState } from 'react'
import cars from './Cardata'
import { MapPin, Car, Users, Fuel, Star, Cog, ArrowRight } from 'lucide-react';
import Footer from './Footer';
import ScrollReveal from 'scrollreveal';

function AvailableCar() {
    const [filterType, setFilterType] = useState("All");
    const FilteredCars = filterType === "All" ? cars : cars.filter(car => car.type === filterType);

    useEffect(() => {
        ScrollReveal().reveal(".hero-reveal", {
            distance: "50px",
            origin: 'bottom',
            duration: 800,
            interval: 100,
            reset: false
        })

        ScrollReveal().reveal(".head-reveal", {
            scale: 0.85,
            distance: "0px",
            easing: "ease-in-out",
            duration: 1500,
            origin: "left",
            reset: false
        })

        ScrollReveal().reveal(".reveal-y", {
            distance: "100px",
            easing: "ease-in-out",
            duration: 1500,
            origin: "bottom",
            interval: 200,
            reset: false
        })
    }, [])

    return (
        <>
            <section className='bg-light py-4 px-2 px-md-4'>
                {/* Header Section */}
                <div className='container text-center mb-5 mt-2 p-2 p-md-4 head-reveal'>
                    <h2 className='display-6 fw-bold mb-2'>
                        <span className='text-success'>Available Cars</span>
                    </h2>
                    <div className="col-12 col-md-8 mx-auto">
                        <p className='text-secondary fs-5'>Discover our handpicked selection of premium vehicles, perfect for any journey.</p>
                    </div>
                </div>

                {/* Filter Section - Made Responsive */}
                <div className='container mb-4'>
                    <div className='row head-reveal'>
                        <div className='col-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-center gap-3'>
                            <label className='text-dark fw-bold'>Type</label>
                            <select 
                                className='form-select shadow-sm' 
                                value={filterType} 
                                onChange={(e) => setFilterType(e.target.value)}
                            >
                                <option value="All">All Vehicles</option>
                                <option value="Sedan">Sedan</option>
                                <option value="Electric">Electric</option>
                                <option value="SUV">SUV</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Cars Grid */}
                <div className="container mb-5">
                    {/* Mobile: 1 column (col-12)
                        Tablet: 2 columns (col-md-6)
                        Desktop: 3 columns (col-lg-4)
                    */}
                    <div className="row g-3 g-md-4 justify-content-center">
                        {FilteredCars.map(car => (
                            <div className="col-12 col-md-6 col-lg-4 reveal-y" key={car.id}>
                                <div className="card border-0 shadow-sm h-100 rounded-4 overflow-hidden">
                                    
                                    {/* Responsive Image Height */}
                                    <div className="position-relative">
                                        <div style={{ height: "200px" }}>
                                            <img src={car.image} alt={car.name} className="w-100 h-100 object-fit-cover" />
                                        </div>
                                        <span className="badge bg-primary position-absolute start-0 top-0 m-2 p-2 shadow-sm">
                                            {car.type}
                                        </span>
                                        <span className="badge bg-success position-absolute end-0 top-0 m-2 p-2 shadow-sm">
                                            {car.status}
                                        </span>
                                    </div>

                                    <div className="card-body d-flex flex-column p-3 p-md-4">
                                        <div className='d-flex justify-content-between align-items-start mb-2'>
                                            <h5 className="fw-bold m-0">{car.name}</h5>
                                            <div className="d-flex align-items-center gap-1 text-warning">
                                                <Star size={18} fill="currentColor" /> 
                                                <span className='text-dark fw-semibold'>{car.rating}</span>
                                            </div>
                                        </div>

                                        <div className='d-flex justify-content-between align-items-center mb-3 text-muted small'>
                                            <p className="mb-0">{car.year}</p>
                                            <div className="d-flex align-items-center gap-1">
                                                <MapPin size={16} /> <span>{car.location}</span>
                                            </div>
                                        </div>

                                        {/* Icons Grid - Using smaller icons for mobile */}
                                        <div className="text-muted small d-flex flex-wrap gap-2 gap-md-3 mb-3">
                                            <span className='d-flex align-items-center gap-1'><Users size={16} /> {car.seats} seats</span>
                                            <span className='d-flex align-items-center gap-1'><Cog size={16} /> {car.transmission}</span>
                                            <span className='d-flex align-items-center gap-1'><Fuel size={16} /> {car.fuel}</span>
                                        </div>

                                        {/* Badges */}
                                        <div className="d-flex flex-wrap gap-2 mt-2">
                                            {car.badges.map((badge, i) => (
                                                <span key={i} className='bg-light border rounded-pill px-2 py-1 x-small' style={{fontSize: '0.75rem'}}>
                                                    {badge}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Price and Action */}
                                        <div className="mt-4 pt-3 border-top d-flex justify-content-between align-items-center">
                                            <div>
                                                <span className="fw-bold fs-4 text-success">${car.price}</span>
                                                <span className='text-muted small'>/day</span>
                                            </div>
                                        </div>

                                        {/* Buttons - Stacked on extra small, side-by-side on larger */}
                                        <div className='d-flex flex-column flex-sm-row gap-2 mt-3'>
                                            <button className='btn btn-outline-primary flex-grow-1 py-2 rounded-3'>Details</button>
                                            <button className='btn btn-success flex-grow-1 py-2 rounded-3'>Book Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default AvailableCar;