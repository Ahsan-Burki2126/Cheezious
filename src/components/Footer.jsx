import React from "react";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import LOGO from "../assets/images/LOGO.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto flex flex-wrap justify-between items-start">
        {/* Company Contact and Links Section */}
        <div className="w-full lg:w-2/3 mb-8 lg:mb-0 flex flex-col justify-start items-center lg:flex-row  lg:items-center gap-24 ">
          {/* Logo */}
          <div className="mt-4 lg:mt-0 lg:ml-8">
            <img
              src={LOGO}
              alt="Logo"
              className="w-40 lg:w-52 rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Cheezious</h2>
            <div className="mt-4">
              <div className="flex items-center mb-2">
                <Mail color="#d90002" />
                <a href="mailto:info@example.com" className="ml-2">
                  info@example.com
                </a>
              </div>
              <div className="flex items-center mb-2">
                <Phone color="#d90002" />
                <a href="tel:+1234567890" className="ml-2">
                  +123 456 7890
                </a>
              </div>
              <div className="flex items-center mb-4">
                <MapPin color="#d90002" />
                <a href="https://goo.gl/maps/example" className="ml-2">
                  123 Main Street, Islamabad
                </a>
              </div>
              <div className="flex space-x-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play Store"
                  className="w-24"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/67/Download_on_the_App_Store_Badge_US-UK_RGB_blk.svg"
                  alt="App Store"
                  className="w-24"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Our Timings Section */}
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
          <h2 className="text-xl font-semibold">Our Timings</h2>
          <ul className="mt-4 space-y-2">
            <li>Monday: 9:00 AM - 5:00 PM</li>
            <li>Tuesday: 9:00 AM - 5:00 PM</li>
            <li>Wednesday: 9:00 AM - 5:00 PM</li>
            <li>Thursday: 9:00 AM - 5:00 PM</li>
            <li>Friday: 9:00 AM - 5:00 PM</li>
            <li>Saturday: 9:00 AM - 5:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <Instagram color="#d90002" />
            <Facebook color="#d90002" />
          </div>
        </div>
      </div>

      {/* Horizontal Rule and Copyright Text */}
      <hr className="border-black mt-8" />
      <div className="text-center py-4 text-sm">
        © 2024 Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
