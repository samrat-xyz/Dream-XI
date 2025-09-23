import React from "react";
import footerLogo from "../assets/logo-footer.png";

function Footer() {
  return (
    <div className="mt-5 bg-[#06091A] text-white">
      {/* Logo */}
      <div className="flex justify-center items-center my-3 p-4">
        <img src={footerLogo} alt="Footer Logo" className="w-32 sm:w-40" />
      </div>

      {/* Main Footer Section */}
      <footer
        className="
        flex flex-col md:flex-row 
        items-start md:items-center 
        justify-between gap-8
        text-neutral-content px-6 md:px-16 py-8
      "
      >
        {/* About Us */}
        <nav className="flex-1">
          <h6 className="footer-title text-lg font-semibold mb-2">About Us</h6>
          <p className="text-sm leading-relaxed">
            We are a passionate team <br /> dedicated to providing the best{" "}
            <br /> services to our customers.
          </p>
        </nav>

        {/* Quick Links */}
        <nav className="flex-1">
          <h6 className="footer-title text-lg font-semibold mb-2">Quick Links</h6>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li><a className="link link-hover">Home</a></li>
            <li><a className="link link-hover">Services</a></li>
            <li><a className="link link-hover">About</a></li>
            <li><a className="link link-hover">Contact</a></li>
          </ul>
        </nav>

        {/* Subscribe */}
        <nav className="flex-1">
          <h6 className="footer-title text-lg font-semibold mb-2">Subscribe</h6>
          <p className="text-sm mb-3">
            Subscribe to our newsletter for the latest updates.
          </p>
          <div className="flex flex-col sm:flex-row w-full">
            <input
              type="text"
              placeholder="Write your Email"
              className="py-3 px-4 bg-white text-gray-700 rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none outline-none w-full"
            />
            <button className="py-3 px-6 bg-amber-200 text-black font-bold rounded-b-xl sm:rounded-r-xl sm:rounded-bl-none">
              Subscribe
            </button>
          </div>
        </nav>
      </footer>

      {/* Bottom Footer */}
      <footer className="flex flex-col md:flex-row items-center justify-between gap-4 bg-[#06091A] border-t-2 border-gray-800 text-neutral-content px-6 py-4">
        <aside className="flex items-center gap-2 text-sm text-center md:text-left">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811..."></path>
          </svg>
          <p>
            Copyright © {new Date().getFullYear()} - All rights reserved by Md
            Samrat
          </p>
        </aside>

        {/* Social Links */}
        <nav className="flex gap-4">
          <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M24 4.557..."></path></svg></a>
          <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M19.615 3.184..."></path></svg></a>
          <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M9 8h-3v4..."></path></svg></a>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
