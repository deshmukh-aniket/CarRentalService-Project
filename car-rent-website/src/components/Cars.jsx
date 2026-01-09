import React, { useEffect, useState } from 'react'
import cars from './Cardata'
import { MapPin,Car,Users,Fuel,Star,Cog,ArrowRight } from 'lucide-react';
import Footer from './Footer';

import ScrollReveal from 'scrollreveal';




function AvailableCar() {

    const [filterType,setFilterType]=useState("All");
    const FilteredCars=filterType==="All"?cars:cars.filter(car=>car.type===filterType);
    

    // Scrolling behaviour
    useEffect(()=>{
        ScrollReveal().reveal(".hero-reveal",{
            distance:"50px",
            origin:'bottom',
            duration:'800',
            interval:'100',
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
    <>
        <section className='bg-light py-4 px-4'>
        <div className='max-auto text-center mb-5 mt-2 p-4  head-reveal'>
            <h2 className='fs-2 fw-bold mb-2'>
            <span className='text-success'>Available Cars</span>
            </h2>
            <p className='text-secondary fs-5 '>Discover our handpicked selection of premium vehicles,perfect for any journey.</p>
            
        </div>
        
        <div className='mb-4 d-flex justify-content-start me-5 col-3 head-reveal'>
            <label className='me-3 ms-5 text-dark fw-bold'>Type</label>
            <select className='px-2 py-1 form-select w-50 ' value={filterType} onChange={(e)=>setFilterType(e.target.value)}>
                <option value="All">All</option>
                <option value="Sedan">Sedan</option>
                <option value="Electric">Electric</option>
                <option value="SUV">SUV</option>
            
            </select>
        </div>

        <div className="container mb-5 ">
  <div className="row g-5 justify-content-center ">

    {FilteredCars.map(car => (
      <div className="col-6 col-md-4 col-lg-4 reveal-y " key={car.id}>
        
        <div className="card border-0 shadow-sm h-100 rounded-4 d-flex flex-column ">

          {/* Square Image */}
          <div className="position-relative">
            <div style={{ height: "180px", overflow: "hidden" }}>
             <img src={car.image} alt={car.name} className="w-100 h-100 object-fit-cover rounded-top-4" />
            </div>
              <span className="badge bg-primary position-absolute start-0 top-0 m-2 p-2 fs-6">
                {car.type}
              </span>
              <span className="badge bg-success position-absolute end-0 top-0 m-2 p-2 fs-6">
                {car.status}
              </span>
           </div>
          

          {/* Details */}
          <div className="card-body d-flex flex-column">

            <div className='d-flex justify-content-between align-items-center'>
              <h5 className="fw-bold mt-2">{car.name}</h5>

            <div className="d-flex align-items-center gap-1 mb-2 text-warning">
              <Star size={20}/> {car.rating}
            </div>
            </div>

           <div className='d-flex justify-content-between align-items-center'>
             <p className="text-muted mb-1">{car.year}</p>

            <div className="d-flex align-items-center mb-2 text-muted gap-2">
              <MapPin size={20}/> <span>{car.location}</span>
            </div>
           </div>

            <div className="text-muted small d-flex flex-wrap gap-3">
              <span><Users size={20}/> {car.seats} seats</span>
              <span><Cog size={20}/> {car.transmission}</span>
              <span><Fuel size={20}/> {car.fuel}</span>
            </div>

            <div className="text-muted small d-flex flex-wrap gap-3 mt-3" >
              {car.badges.map((badge,i) =>(
                <span key={i} className='bg-light border border-secondary rounded px-1 py-1'>{badge}</span>
              ))}
            </div>

            {/* Push price & button to bottom */}
            <div className="mt-auto d-flex justify-content-between align-items-center pt-3">
              <span className="fw-bold fs-5 text-success">${car.price}/day</span> 

              {/* <button className="btn btn-outline-primary btn-sm rounded">
                Book <ArrowRight size={16}/>
              </button> */}
           </div>

          </div>
          
          {/* Buttons */}
          <div className='d-flex  gap-4 justify-content-center py-3'>
            <button className=' border border-secondary px-2 py-1 rounded bg-primary text-white'>Veiw Details</button>
            <button className=' border border-secondary px-2 py-1 rounded bg-success  text-white'>Book Now</button>
          </div>
        </div>
      </div>
    ))}

  </div>
     
</div>
    
    </section>
    <Footer/>
    </>
    
  )
}

export default AvailableCar;