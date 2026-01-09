import React, { useEffect } from "react";
import car from "../assets/about_video.mp4";
import { Target, Heart, TrendingUp } from "lucide-react";
import Footer from "../components/Footer";
import ScrollReveal from "scrollreveal";

function About() {
  const values = [
    {
      title: "Our Mission",
      description: "To provide reliable, affordable, and convenient car rental services that exceed customer expectations while maintaining the highest standards of safety and quality.",
      icon: <Target size={48} className="p-2" />,
    },
    {
      title: "Customer First",
      description: "We put our customers at the heart of everything we do. Your satisfaction and safety are our top priorities, and we go the extra mile to ensure a seamless experience.",
      icon: <Heart size={48} className="p-2" />,
    },
    {
      title: "Innovation",
      description: "We continuously invest in the latest technology and modern vehicles to provide you with the best driving experience and user-friendly booking services.",
      icon: <TrendingUp size={48} className="p-2" />,
    },
  ];

  useEffect(() => {
    ScrollReveal().reveal(".head-reveal", {
      scale: 0.85,
      distance: "0px",
      easing: "ease-in-out",
      duration: 1500,
      origin: "left",
      reset: false
    });
    ScrollReveal().reveal(".reveal-y", {
      distance: "100px",
      easing: "ease-in-out",
      duration: 1500,
      origin: "bottom",
      interval: 200,
      reset: false
    });
  }, []); // Added dependency array to prevent re-running on every render

  return (
    <>
      {/* Hero Section */}
      <section className="">
        <div className="position-relative overflow-hidden bg-dark" style={{ minHeight: "50vh", height: "60vh" }}>
          {/* Background Video - Changed objectFit to cover for full responsiveness */}
          <video 
            src={car} 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="position-absolute top-50 start-50 translate-middle w-100 h-100"
            style={{ objectFit: "cover" }} 
          />

          {/* Dark Overlay */}
          <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "rgba(0,0,0,0.5)" }}></div>

          {/* Content */}
          <div className="position-relative z-1 d-flex flex-column justify-content-center align-items-center text-center h-100 text-white px-4">
            <h2 className="fw-bold display-4 display-md-6 mb-3">About Us</h2>
            <div className="col-12 col-md-8 col-lg-6">
              <p className="fs-5 text-light">
                We provide exceptional car rental experiences with reliability, convenience, and premium service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="container py-5 bg-white">
        {/* Changed to row-cols to handle small screens better */}
        <div className="row text-center g-4 head-reveal row-cols-2 row-cols-md-4">
          <div className="col">
            <h2 className="fw-bold display-5">15+</h2>
            <p className="text-secondary">Years Experience</p>
          </div>
          <div className="col">
            <h2 className="fw-bold display-5">500+</h2>
            <p className="text-secondary">Happy Customers</p>
          </div>
          <div className="col">
            <h2 className="fw-bold display-5">50+</h2>
            <p className="text-secondary">Vehicles</p>
          </div>
          <div className="col">
            <h2 className="fw-bold display-5">50+</h2>
            <p className="text-secondary">Locations</p>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5 px-3">
            <h2 className="fw-bold text-dark mb-2">Our Values</h2>
            <p className="text-muted">The principles that guide everything we do</p>
          </div>

          <div className="row g-4 px-2">
            {values.map((value, index) => (
              <div key={index} className="col-12 col-md-4 reveal-y">
                <div className="card h-100 border-0 shadow-sm p-4 text-center" style={{ borderRadius: '20px' }}>
                  <div className="card-body p-0">
                    <div className="mx-auto bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mb-4"
                         style={{ width: "70px", height: "70px" }}>
                      {value.icon}
                    </div>
                    <h5 className="fw-bold mb-3">{value.title}</h5>
                    <p className="text-secondary" style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-light">
        <Footer />
      </div>
    </>
  );
}

export default About;