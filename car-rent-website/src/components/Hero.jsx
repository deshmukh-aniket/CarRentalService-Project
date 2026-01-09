import React, { useEffect } from 'react'
import {MapPin,Calendar,Clock,Search} from 'lucide-react'

// Scroll Reveal
import ScrollReveal from 'scrollreveal'

function Hero(){
   
  useEffect(()=>{
    ScrollReveal().reveal(".hero-reveal",{
      distance:"50px",
      easing:"ease-in-out",
      duration:1000,
      origin:"left",
      reset:false
    })

 
    ScrollReveal().reveal(".head-reveal",{
      scale:0.85,
      distance:"0px",
      easing:"ease-in-out",
      duration:1500,
      origin:"left",
      reset:false
    })

    ScrollReveal().reveal(".reveal-y",{
      distance:"100px",
      easing:"ease-in-out",
      duration:1500,
      origin:"bottom",
      interval:200,
      reset:false
    })
  },[])
  return (
    <section className="py-5 text-center hero">
  <div className="container">

    <h1 className="display-6 fw-bold mb-3 mt-2 hero-reveal">
      Find Your Perfect <span className="text-success">LuxeWheels</span>
    </h1>

    <p className="lead text-secondary mb-5 hero-reveal ">
      Discover amazing deals on quality vehicles. Book now and drive away with confidence.
    </p>

    {/* Search Box */}
    <div className=" container bg-white shadow-lg rounded-4 p-4 mx-auto mb-5 hero-reveal">

      <div className="row g-4 ">

        {/* Pickup location */}
        <div className="col-md-3 ">
          <label className="fw-semibold text-secondary mb-2 d-flex align-items-center gap-2">
            <MapPin size={20} /> Pickup Location
          </label>
          <select className="form-select rounded-3">
            <option>Select Location</option>
            <option>Phoenix</option>
            <option>London</option>
            <option>NewYork</option>
          </select>
        </div>

        {/* Pickup Date */}
        <div className="col-md-3">
          <label className="fw-semibold text-secondary mb-2 d-flex align-items-center gap-2">
            <Calendar size={20} /> Pickup Date
          </label>
          <input type="date" className="form-control rounded-3" />
        </div>

        {/* Pickup Time */}
        <div className="col-md-3">
          <label className="fw-semibold text-secondary mb-2 d-flex align-items-center gap-2">
            <Clock size={20} /> Pickup Time
          </label>
          <input type="time" className="form-control rounded-3" />
        </div>

        {/* Return Date */}
        <div className="col-md-3">
          <label className="fw-semibold text-secondary mb-2 d-flex align-items-center gap-2">
            <Calendar size={20} /> Return Date
          </label>
          <input type="date" className="form-control rounded-3" />
        </div>

      </div>

      <div className="d-flex justify-content-center mt-4">
        <button className="btn btn-primary px-4 py-2 rounded-pill fw-semibold">
          <Search className="me-2" size={18} /> Search Cars
        </button>
      </div>

    </div>

    {/* Stats */}
    <div className='container'>
      <div className="row text-center g-4 head-reveal">
      
      <div className="col-md-3">
        <h2 className="fw-bold">500+</h2>
        <p className="text-secondary">Premium Cars</p>
      </div>

      <div className="col-md-3">
        <h2 className="fw-bold">50+</h2>
        <p className="text-secondary">Locations</p>
      </div>

      <div className="col-md-3">
        <h2 className="fw-bold">24/7</h2>
        <p className="text-secondary">Support</p>
      </div>

      <div className="col-md-3">
        <h2 className="fw-bold">99%</h2>
        <p className="text-secondary">Satisfaction</p>
      </div>

    </div>
    </div>

  </div>
</section>

  )}

export default Hero