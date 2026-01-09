import React from 'react'
import Car from './Cardata'
import { MapPin, Users, Cog, Fuel, Star, ArrowRight } from 'lucide-react'

const FeaturedCars = () => {
  return (
    <section className='bg-light py-4 px-2 px-md-4'>
      <div className='container text-center mb-5 mt-2 head-reveal'>
        <h2 className='fs-2 fw-bold mb-2'>
          Our <span className='text-success'>Cars</span>
        </h2>
        {/* Added col-md-8 mx-auto to keep text readable on large screens */}
        <p className='text-secondary fs-5 col-md-8 mx-auto'>
          Discover our handpicked selection of premium vehicles, perfect for any journey.
        </p>
      </div>

      <div className="container">
        {/* g-4 provides consistent spacing between cards when they stack */}
        <div className="row g-4">
          {Car.map(car => (
            /* Changed col-6 to col-12 for mobile, col-sm-6 for tablets, col-lg-4 for desktop */
            <div className="col-12 col-sm-6 col-lg-4 reveal-y" key={car.id}>
              <div className="card border-0 shadow-sm h-100 rounded-4 d-flex flex-column overflow-hidden">

                {/* Image Section */}
                <div className="position-relative">
                  <div style={{ height: "180px", overflow: "hidden" }}>
                    <img src={car.image} alt={car.name} className="w-100 h-100 object-fit-cover" />
                  </div>
                  <span className="badge bg-primary position-absolute start-0 top-0 m-2 p-2 fs-6">
                    {car.type}
                  </span>
                  <span className="badge bg-success position-absolute end-0 top-0 m-2 p-2 fs-6">
                    {car.status}
                  </span>
                </div>

                {/* Details Section */}
                <div className="card-body d-flex flex-column">
                  <div className='d-flex justify-content-between align-items-center'>
                    <h5 className="fw-bold mt-2">{car.name}</h5>
                    <div className="d-flex align-items-center gap-1 mb-2 text-warning">
                      <Star size={20} fill='currentColor' /> {car.rating}
                    </div>
                  </div>

                  <p className="text-muted mb-1">{car.year}</p>

                  <div className="d-flex align-items-center mb-2 text-muted gap-2">
                    <MapPin size={20} /> <span>{car.location}</span>
                  </div>

                  <div className="text-muted small d-flex flex-wrap gap-3">
                    <span className='d-flex align-items-center gap-1'><Users size={20} /> {car.seats} seats</span>
                    <span className='d-flex align-items-center gap-1'><Cog size={20} /> {car.transmission}</span>
                    <span className='d-flex align-items-center gap-1'><Fuel size={20} /> {car.fuel}</span>
                  </div>

                  <div className="text-muted small d-flex flex-wrap gap-2 mt-3">
                    {car.badges.map((badge, i) => (
                      <span key={i} className='bg-light border border-secondary rounded px-1 py-1'>{badge}</span>
                    ))}
                  </div>

                  <div className="mt-auto d-flex justify-content-between align-items-center pt-3">
                    <span className="fw-bold fs-5 text-success">${car.price}/day</span>
                  </div>
                </div>

                {/* Buttons Section - Added flex-sm-row to keep side-by-side on tablet/desktop */}
                <div className='d-flex flex-column flex-sm-row gap-2 gap-sm-4 justify-content-center p-3'>
                  <button className='btn btn-primary border-secondary px-2 py-1 rounded text-white flex-grow-1 flex-sm-grow-0'>Veiw Details</button>
                  <button className='btn btn-success border-secondary px-2 py-1 rounded text-white flex-grow-1 flex-sm-grow-0'>Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-5">
           <button className='btn btn-primary d-inline-flex align-items-center justify-content-center border px-3 py-2 text-white rounded gap-1'>
            View All Cars <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedCars;