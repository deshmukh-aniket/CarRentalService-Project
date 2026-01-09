import React from "react";
import { useState } from "react";
import { Send } from "lucide-react";
import Footer from "./Footer";

function Contact(){
     const [validate,setValidate]=useState(false);

     const handleSubmit=(e)=>{const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidate(true);
     }
    return(
        <>
            <section className="bg-light  d-flex flex-column align-items-center justify-content-center py-5">
                <h1>Get In Touch</h1>
                <p className="fs-5 text-secondary"> Have questions about our services? We're here to help! Reach out to us through any of the channels below or fill out the contact form.</p>
            </section>

            {/* Form */}
            <div className="container py-5   bg-light">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          {/* Form Container with Shadow and Rounded Corners */}
          <div className="card border-2 border-primary shadow-sm p-4 p-md-  " style={{ borderRadius: '15px' }}>
            <h3 className="mb-4 fw-bold text-primary  text-center" style={{ fontSize: '1.25rem' }}>
              Send Us a Message
            </h3>

            <form noValidate
          className={`row g-3 needs-validation ${validate ? "was-validated" : ""}`}
          onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="mb-4">
                  <label className="form-label text-secondary small fw-bold">Full Name *</label>
                  <input 
                    required 
                    type="text" 
                    className="form-control form-control-lg border-2" 
                    placeholder="Enter Name"
                    style={{ borderRadius: '10px' }}
                  />
                  {/* FEEDBACK MUST BE INSIDE THIS DIV */}
                  <div className="invalid-feedback">Name is required!</div>
                </div>

                <div className="row">
                  {/* Email */}
                  <div className="col-md-6 mb-4">
                    <label className="form-label text-secondary small fw-bold">Email Address *</label>
                    <input 
                      required 
                      type="email" 
                      className="form-control form-control-lg border-2" 
                      placeholder="Email"
                      style={{ borderRadius: '10px' }}
                    />
                    <div className="invalid-feedback">Please enter a valid email!</div>
                  </div>

                  {/* Phone */}
                  <div className="col-md-6 mb-4">
                    <label className="form-label text-secondary small fw-bold">Phone Number</label>
                    <input 
                      type="tel" 
                      className="form-control form-control-lg border-2" 
                      placeholder="Phone"
                      style={{ borderRadius: '10px' }}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="mb-4">
                  <label className="form-label text-secondary small fw-bold">Subject *</label>
                  <select 
                    required 
                    className="form-select form-select-lg border-2"
                    style={{ borderRadius: '10px' }}
                    defaultValue=""
                  >
                    <option value="" disabled>Select a subject</option>
                    <option value="1">General Inquiry</option>
                    <option value="2">Technical Support</option>
                  </select>
                  <div className="invalid-feedback">Please select a subject!</div>
                </div>

                {/* Message */}
                <div className="mb-4">
                  <label className="form-label text-secondary small fw-bold">Message *</label>
                  <textarea 
                    required 
                    className="form-control form-control-lg border-2" 
                    rows="4" 
                    placeholder="How can we help?"
                    style={{ borderRadius: '10px' }}
                  ></textarea>
                  <div className="invalid-feedback">Message cannot be empty!</div>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary btn-lg w-100 py-3 fw-bold d-flex align-items-center justify-content-center"
                  style={{ backgroundColor: '#1d4ed8', border: 'none', borderRadius: '10px' }}
                >
                  <Send size={18} className="me-2" />
                  Send Message
                </button>
              </form>
          </div>
        </div>
      </div>
    </div>
    <Footer/> 
  
        </>
    );
};
export default Contact;