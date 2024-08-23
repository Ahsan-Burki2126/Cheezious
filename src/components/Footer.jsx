import React from "react";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import LOGO from "../assets/images/LOGO.png";
import AppStore from "../assets/images/AppStore.svg"
import PlayStore from "../assets/images/PlayStore.svg"
import facebook from '../assets/images/facebook.png'
import instagram from '../assets/images/instagram.png'

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 w-[85%] mx-auto rounded-r-lg rounded-l-lg">
      <div className="container mx-auto flex flex-wrap justify-between items-start px-14 lg:px-0">
        {/* Company Contact and Links Section */}
        <div className="w-full lg:w-2/3 mb-8 lg:mb-0 flex flex-col justify-center lg:flex-row items-start lg:items-center gap-24 h-full">
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
              <div className="flex space-x-4 mt-12 ">
                <img
                  src={PlayStore}
                  alt="Google Play Store"
                  className="w-32 cursor-pointer"
                />
                <img
                  src={AppStore}
                  alt="App Store"
                  className="w-32 cursor-pointer"
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
            <img src={facebook} alt="insta"  className="w-10 cursor-pointer"/>
            <img src={instagram} alt="facebook"  className="w-10 cursor-pointer"/>
          </div>
        </div>
      </div>

      {/* Horizontal Rule and Copyright Text */}
      <hr className="border-black mt-8 w-[85%] mx-auto" />
      <div className="text-center py-4 text-sm">
        © 2024 Cheezious. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
