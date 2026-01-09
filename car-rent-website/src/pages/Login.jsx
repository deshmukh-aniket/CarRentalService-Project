import React, { useEffect } from 'react'
import { Instagram, Facebook, Mail, Lock, Car } from 'lucide-react'
import ScrollReveal from 'scrollreveal'

function Login() {

  useEffect(() => {
    ScrollReveal().reveal(".login-card", {
      origin: "right",
      distance: "100px",
      duration: 800,
      easing: "ease",
      reset: false
    });
  }, []);

  return (
    <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center form-bg py-5">

      {/* Logo */}
      <div className="text-center mb-4">
        <div className="d-flex justify-content-center align-items-center gap-3 text-white fs-2 fw-bold">
          <Car size={50} />
          <span className="text-info fs-2">LuxeWheels</span>
        </div>
      </div>

      {/* Card */}
      <div className="login-card col-4 col-sm-8 col-md-5 col-lg-4  rounded-4 shadow-lg p-4">

        {/* Heading */}
        <h2 className="fs-4 fw-bold text-center mb-1 form-title">Welcome Back</h2>
        <p className="text-center text-light mb-4">Sign in to your account</p>

        {/* Form */}
        <form className="mb-3">

          {/* Email */}
          <div className="position-relative mb-3">
            <Mail size={20} className="input-icon" />
            <input
              type="email"
              className="form-control input-with-icon"
              placeholder="Email Address"
              required
            />
          </div>

          {/* Password */}
          <div className="position-relative mb-3">
            <Lock size={20} className="input-icon" />
            <input
              type="password"
              className="form-control input-with-icon "
              placeholder="Password"
              required
            />
          </div>

          {/* Remember + forgot */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <label className="text-dark fs-5">
              <input type="checkbox" className="me-1 checkbox"  />
              Remember me
            </label>
            <a href="#" className="form-link text-decoration-none">
              Forgot password?
            </a>
          </div>

          {/* Submit */}
          <button className="btn btn-primary w-100 py-2 fw-bold rounded-3">
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="d-flex align-items-center my-3">
          <span className="border-top flex-grow-1"></span>
          <span className="mx-2 text-dark">OR</span>
          <span className="border-top flex-grow-1"></span>
        </div>

        {/* Social Buttons */}
        <div className="d-flex justify-content-center gap-3 mb-3">
          <button className="btn border rounded-circle p-2 social-icon">
            <Instagram size={22} />
          </button>
          <button className="btn border rounded-circle p-2 social-icon">
            <Facebook size={22} />
          </button>
        </div>

        {/* Register Link */}
        <p className="text-center text-light">
          Don't have an account?{" "}
          <a href="/register" className="form-link fw-semibold text-decoration-none">
            Register
          </a>
        </p>

      </div>
    </div>
  )
}

export default Login;
