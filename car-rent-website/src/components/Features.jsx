import React from 'react'
import {Shield,Clock4,CreditCard,MapPin,Headphones,FileBadge,Users,Zap} from 'lucide-react'

const features=[
    {
        title:'Fully Insured',
        description:"All vehicles include full insurance for safe, worry-free travel.",
        icon:<Shield size={40}/>
    },
    {
        title:'24/7 Availability',
        description:"Book or rent cars anytime with our round-the-clock service.",
        icon:<Clock4 size={40}/>
    },
    {
        title:'Secure Payments',
        description:"Make fast, secure payments using trusted and protected gateways.",
        icon:<CreditCard size={40}/>
    },
    {
        title:'Multiple Locations',
        description:"Convenient pickup and drop locations available across major city areas.",
        icon:<MapPin size={40}/>
    },
    {
        title:'Customer Support',
        description:"Friendly support whenever you need help.",
        icon:<Headphones size={40}/>
    },
    {
        title:'Verified Vehicles',
        description:"All cars are inspected and certified.",
        icon:<FileBadge size={40}/>
    },
    {
        title:'Trusted by 10,000+ Users',
        description:"Customers trust us for quality cars and smooth rentals.",
        icon:<Users size={40}/>
    },
    {
        title:'Instant Booking',
        description:"Reserve your preferred car instantly in just a few clicks.",
        icon:<Zap size={40}/>
    }
]

const Features = () => {
    
  return (
    <section className='py-5 bg-light px-4 sm-px-4 lg-px-6'>
        <div className='mx-auto text-center'>
            <h2 className='fs-3 fw-bld text-dark mb-4 hero-reveal'>Why Choose LuxeWheels?</h2>
            <p className='text-secondary mb-5 mx-auto hero-reveal'>We're Committed to providing you with the best car rental experience through our premium services and customer-first approach.</p>
            <div className="container py-4">
  <div className="row justify-content-center g-4">

    {features.map((feature, index) => (
      <div
        key={index}
        className="col-10 col-sm-6 col-md-4 col-lg-3 d-flex reveal-y"
      >
        <div className="w-100 bg-white  text-center border border-secondary shadow-sm rounded-4 p-4 hover-card">
          
          <div className="mx-auto bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mb-3"
               style={{ width: "60px", height: "60px" }}>
            {feature.icon}
          </div>

          <h5 className="fw-bold mb-2">{feature.title}</h5>
          <p className="text-muted small">{feature.description}</p>
        </div>
      </div>
    ))}

  </div>
</div>

        </div>
    </section>
  )
}

export default Features