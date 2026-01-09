import React from 'react'
import { Link } from 'react-router-dom'
import {Car,Facebook,Twitter,Instagram,Phone,Mail,MapPin} from 'lucide-react'

const Footer = () => {
  return (
    <footer className='bg-dark text-white py-4 px-4'>
        <div className='container'>
            {/* Added g-4 for vertical spacing when columns stack */}
            <div className='row justify-content-center g-4'>
            
            {/* Company Info - col-12 on mobile, col-md-3 on desktop */}
            <div className='col-12 col-md-3'>
                <Link to={'/'} className='d-flex align-items-center gap-2 text-decoration-none'>
                  <Car size={40} className='text-primary'/>
                  <span className='fw-bold fs-4 text-white'>LuxeWheels</span>
                </Link>
                <p className='my-4 lh-small'>Your Trusted partner for premium car rentals. Experience the freedom of the road with our quality vehicles and exceptional services.</p>
                <div className='d-flex gap-4 mt-2'>
                    <Facebook className='cursor-pointer'/>
                    <Twitter className='cursor-pointer'/>
                    <Instagram className='cursor-pointer'/>
                </div>
            </div>

            {/* Quick Links - col-6 on mobile, col-md-3 on desktop */}
            <div className='col-6 col-md-3'>
                <h4 className='fw-bold fs-6 mb-4'>Quick Links</h4>
                <ul className='list-unstyled lh-lg'>
                    <li><a href='#' className='text-decoration-none text-light'>Home</a></li>
                    <li><a href='#' className='text-decoration-none text-light'>Our Cars</a></li>
                    <li><a href='#' className='text-decoration-none text-light'>About Us</a></li>
                    <li><a href='#' className='text-decoration-none text-light'>Contact</a></li>
                    <li><a href='#' className='text-decoration-none text-light'>Terms & Conditions</a></li>
                </ul>
            </div>

            {/* Services - col-6 on mobile, col-md-3 on desktop */}
            <div className='col-6 col-md-3'>
                <h4 className='fw-bold fs-6 mb-4'>Services</h4>
                <ul className='list-unstyled lh-lg'>
                    <li><a href='' className='text-decoration-none text-light'>Economy Cars</a></li>
                    <li><a href='' className='text-decoration-none text-light'>Luxury Vehicles</a></li>
                    <li><a href='' className='text-decoration-none text-light'>SUVs & Trucks</a></li>
                    <li><a href='' className='text-decoration-none text-light'>Electric Cars</a></li>
                    <li><a href='' className='text-decoration-none text-light'>Long-term Rentals</a></li>
                </ul>
            </div>

            {/* Contact - col-12 on mobile, col-md-3 on desktop */}
            <div className='col-12 col-md-3'>
                <h4 className='fw-bold fs-6 mb-4'>Contact Us</h4>
                <ul className='list-unstyled lh-lg'>
                    <li className='d-flex align-items-center gap-2'><Phone size={20}/>+1(555) 123-4569</li>
                    <li className='d-flex align-items-center gap-2'><Mail size={20}/>info@luxewheels.com</li>
                    <li className='d-flex align-items-center gap-2'><MapPin size={20}/>123 Main St. NewYork</li>
                </ul>
            </div>
        </div>

        {/* Bottom Bar - flex-column on mobile, flex-row on desktop */}
        <div className='border-top border-secondary mt-4 py-4 fs-6 d-flex flex-column flex-md-row justify-content-between align-items-center text-secondary text-center text-md-start'>
            <p className='mb-3 mb-md-0'>&copy;{new Date().getFullYear()} LuxeWheels. All rights reserved.</p>
            <div className='d-flex gap-4 '>
                <a href='' className='text-secondary text-decoration-none'>Privacy Policy</a>
                <a href='' className='text-secondary text-decoration-none'>Terms of Services</a>
            </div>
        </div>
        </div>
    </footer>
  )
}

export default Footer