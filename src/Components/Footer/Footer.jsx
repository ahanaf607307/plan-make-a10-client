import React from 'react'
import { FaFirefoxBrowser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer text-base-content p-10">
  <nav>
  <Link className="btn btn-ghost text-xl text-blue-500">
        <FaFirefoxBrowser className="text-blue-500 text-2xl"/> PlanMake
        </Link>
    <p>
      PlanMake LTD Limited
      <br />
      By Ahanaf Mubasshir Rishad 2024
    </p>
  </nav>
  <nav>

    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
   
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
  )
}

export default Footer
