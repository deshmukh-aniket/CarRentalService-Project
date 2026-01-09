import React, { useEffect } from "react";
import car from "../assets/about_video.mp4";
import { Target,Heart,TrendingUp } from "lucide-react";
import Footer from "../components/Footer";
import ScrollReveal from "scrollreveal";

function About() {
  const values=[{
      title: "Our Mission",
      description: "To provide reliable, affordable, and convenient car rental services that exceed customer expectations while maintaining the highest standards of safety and quality.",
      icon: <Target size={48} className=" p-2" />,
    },
    {
      title: "Customer First",
      description: "We put our customers at the heart of everything we do. Your satisfaction and safety are our top priorities, and we go the extra mile to ensure a seamless experience.",
      icon: <Heart size={48} className=" p-2" />,
    },
    {
      title: "Innovation",
      description: "We continuously invest in the latest technology and modern vehicles to provide you with the best driving experience and user-friendly booking services.",
      icon: <TrendingUp size={48} className=" p-2" />,
    },
  ];
  
  // Animation
  useEffect(()=>{
    ScrollReveal().reveal(".head-reveal",{
      scale:0.85,
      distance:"0px",
      easing:"ease-in-out",
      duration:1500,
      origin:"left",
      reset:false
    });
    ScrollReveal().reveal(".reveal-y",{
      distance:"100px",
      easing:"ease-in-out",
      duration:1500,
      origin:"bottom",
      interval:200,
      reset:false
    })
  })
  return (
   <>
     <section>
    <div className="position-relative overflow-hidden mt-0 bg-light"
      style={{ height: "60vh" }}>
      {/* Background Video */}
      <video src={car} autoPlay muted loop playsInline className="position-absolute top-50 start-50 translate-middle w-100 h-100"
        style={{  objectFit: "contain"}} />

      {/* Dark Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ background: "rgba(0,0,0,0.45)" }}
      ></div>

      {/* Center Content */}
      <div className="position-relative z-1 d-flex flex-column justify-content-center align-items-center text-center h-100 text-white px-3">
        <h2 className="fw-bold display-6 mb-2 ">About Us</h2>
        <div className="text-center  d-flex justify-content-center">
          <p className="fs-5 text-light col-md-8 text-light ">
          We provide exceptional car rental experiences with reliability,
          convenience, and premium service.
        </p>
        </div>
      </div>
      </div>
    </section>
    <div className='container py-5 bg-white'>
      <div className="row text-center g-4 head-reveal">
      
      <div className="col-md-3">
        <h2 className="fw-bold fs-1">15+</h2>
        <p className="text-secondary fs-5">Years Experience</p>
      </div>

      <div className="col-md-3">
        <h2 className="fw-bold fs-1">500+</h2>
        <p className="text-secondary fs-5">Happy Customer</p>
      </div>

      <div className="col-md-3">
        <h2 className="fw-bold fs-1">50+</h2>
        <p className="text-secondary fs-5">Vehicles Availabel</p>
      </div>

      <div className="col-md-3">
        <h2 className="fw-bold fs-1">50+</h2>
        <p className="text-secondary fs-5">Locations</p>
      </div>

    </div>
    </div>
    

    {/* Our Values */}

    <section className="py-5   bg-light">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-dark mb-2">Our Values</h2>
          <p className="text-muted">The principles that guide everything we do</p>
        </div>

        {/* Values Grid */}
        <div className="row g-4">
          {values.map((value, index) => (
            <div key={index} className="col-12 col-md-4 reveal-y">
              <div className="card h-100 bg-white border-3 shadow-sm shadow-light p-4" style={{ borderRadius: '20px' }}>
                <div className="card-body p-0 ">
                  {/* Icon Container */}
                  <div className="mx-auto bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mb-3"
               style={{ width: "60px", height: "60px" }}>
                    {value.icon}
                  </div>
                  
                  {/* Content */}
                  <h5 className="card-title text-center fw-bold mb-3">{value.title}</h5>
                  <p className="card-text text-secondary lh-lg" style={{ fontSize: '0.95rem' }}>
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <div className="bg-light pt-5">
      <Footer/>
    </div>
   </>
    
  );
}

export default About;
