import React, { useEffect, useState } from "react";
import {
  Instagram,
  Facebook,
  Mail,
  Lock,
  Car,
  User
} from "lucide-react";
import ScrollReveal from "scrollreveal";

function Register() {

  const [validated, setValidated] = useState(false);

  useEffect(() => {
    ScrollReveal().reveal(".login-card", {
      origin: "left",
      distance: "80px",
      duration: 800,
      easing: "ease-in-out",
      reset: false
    });
  }, []);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();

    if (form.checkValidity() === false) {
      e.stopPropagation();
    }

    setValidated(true);
  };

  return (
    
    <div className="min-vh-100 d-flex justify-content-center align-items-center form-bg px-3">

      {/* Card */}
      <div className="login-card col-12 col-sm-10 col-md-6 col-lg-4  rounded-4 shadow-lg p-4">

        {/* Logo */}
        

        <h5 className="text-center text-info mb-1">Create Account</h5>
        <p className="text-center text-dark mb-4 ">
          Join millions of users today
        </p>

        {/* Form */}
        <form
          noValidate
          className={`row g-3 needs-validation ${validated ? "was-validated" : ""}`}
          onSubmit={handleSubmit}
        >

          {/* First Name */}
          <div className="col-md-6">
            <label className="form-label text-dark">First Name</label>
            <div className="input-group">
              <span className="input-group-text">
                <User size={18} />
              </span>
              <input
                type="text"
                className="form-control rounded-end"
                placeholder="Name"
                required
              />
              <div className="invalid-feedback error-text">
                First name required
              </div>
            </div>
          </div>

          {/* Last Name */}
          <div className="col-md-6">
            <label className="form-label text-dark">Last Name</label>
            <div className="input-group">
              <span className="input-group-text">
                <User size={18} />
              </span>
              <input
                type="text"
                className="form-control rounded-end"
                placeholder="Last Name"
                required
              />
              <div className="invalid-feedback error-text">
                Last name required
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="col-12">
            <label className="form-label text-dark">Email</label>
            <div className="input-group">
              <span className="input-group-text">
                <Mail size={18} />
              </span>
              <input
                type="email"
                className="form-control rounded-end"
                placeholder="example@email.com"
                required
              />
              <div className="invalid-feedback error-text">
                Enter valid email
              </div>
            </div>
          </div>

          {/* Password */}
          <div className="col-12">
            <label className="form-label text-dark">Password</label>
            <div className="input-group">
              <span className="input-group-text">
                <Lock size={18} />
              </span>
              <input
                type="password"
                className="form-control rounded-end"
                placeholder="Minimum 6 characters"
                minLength={6}
                required
              />
              <div className="invalid-feedback err">
                Password must be 6 characters
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="col-12">
            <button className="btn btn-primary w-100 fw-semibold">
              Sign Up
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="d-flex align-items-center my-3 text-dark">
          <span className="flex-grow-1 border-top"></span>
          <span className="mx-2 ">or continue with</span>
          <span className="flex-grow-1 border-top"></span>
        </div>

        {/* Social */}
        <div className="d-flex justify-content-center gap-3">
          <button className="btn border border-light rounded-circle p-2 social-icon">
            <Instagram size={20} />
          </button>
          <button className="btn border border-light rounded-circle p-2 social-icon">
            <Facebook size={20} />
          </button>
        </div>

        <p className="text-center text-dark mt-3 mb-0">
          Already have an account?
          <a href="/login" className="text-primary form-link  ms-1 text-decoration-none">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}

export default Register;
