import React from 'react'
import Car from './Cardata'
import {MapPin,Users,Cog,Fuel,Star,ArrowRight} from 'lucide-react'



const FeaturedCars = () => {
  return (
    <section className='bg-light py-4 px-4'>
        <div className='max-auto text-center mb-5 mt-2  head-reveal'>
            <h2 className='fs-2 fw-bold mb-2'>
            <span className='text-success'>Our Cars</span>
            </h2>
            <p className='text-secondary fs-5 '>Discover our handpicked selection of premium vehicles,perfect for any journey.</p>
            
        </div>

        <div className="container ">
  <div className="row g-5">

    {Car.map(car => (
      <div className="col-6 col-md-4 col-lg-4 reveal-y" key={car.id}>
        
        <div className="card border-0 shadow-sm h-100 rounded-4 d-flex flex-column">

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

            <p className="text-muted mb-1">{car.year}</p>

            <div className="d-flex align-items-center mb-2 text-muted gap-2">
              <MapPin size={20}/> <span>{car.location}</span>
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
     <button className='d-flex mx-auto align-items-center justify-content-center mt-5 border bg-primary px-2 py-2 text-white rounded gap-1 '>View All Cars <ArrowRight size={20}/></button>
</div>

    </section>
  )
}

export default FeaturedCars;