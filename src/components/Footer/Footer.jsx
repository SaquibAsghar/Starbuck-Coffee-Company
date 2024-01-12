import React from "react";
import Spotify from "../../assets/Spotify";

const Footer = () => {
  return (
    <div className="container-[100%] py-6 px-10">
      <footer className="mb-5 py-6">
        <nav className="flex justify-evenly">
          <div className="w-[190px] max-w-[190px]">
            <h3 className="mb-6">About Us</h3>
            <ul>
              <li className="py-2">
                <a href="#">Our Company</a>
              </li>
              <li className="py-2">
                <a href="#">Our Coffe</a>
              </li>
              <li className="py-2">
                <a href="#">Stories and News</a>
              </li>
              <li className="py-2">
                <a href="#">Starbucks Archive</a>
              </li>
              <li className="py-2">
                <a href="#">Investor Relations</a>
              </li>
              <li className="py-2">
                <a href="#">Customer Service</a>
              </li>
              <li className="py-2">
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="w-[190px] max-w-[190px]">
            <h3 className="mb-6">Careers</h3>
            <ul>
              <li className="py-2">
                <a href="#">Cultures and Values</a>
              </li>
              <li className="py-2">
                <a href="#">Inclusion, Diversity, and Equity</a>
              </li>
              <li className="py-2">
                <a href="#">College Achievement Plan</a>
              </li>
              <li className="py-2">
                <a href="#">Alumni Community</a>
              </li>
              <li className="py-2">
                <a href="#">U.S. Careers</a>
              </li>
              <li className="py-2">
                <a href="#">International Careers</a>
              </li>
            </ul>
          </div>
          <div className="w-[190px] max-w-[190px]">
            <h3 className="mb-6">Social Impacts</h3>
            <ul>
              <li className="py-2">
                <a href="#">People</a>
              </li>
              <li className="py-2">
                <a href="#">Planet</a>
              </li>
              <li className="py-2">
                <a href="#">Environmental and Social Impact Reporting</a>
              </li>
            </ul>
          </div>
          <div className="w-[190px] max-w-[190px]">
            <h3 className="mb-6">For Business Partners</h3>
            <ul>
              <li className="py-2">
                <a href="#">Landlord Support Center</a>
              </li>
              <li className="py-2">
                <a href="#">Suppliers</a>
              </li>
              <li className="py-2">
                <a href="#">Corporate Gift Card Sales</a>
              </li>
              <li className="py-2">
                <a href="#">Office and Foodservice Coffee</a>
              </li>
            </ul>
          </div>
          <div className="w-[190px] max-w-[190px]">
            <h3 className="mb-6">Order and Pick Up</h3>
            <ul>
              <li className="py-2">
                <a href="#">Order on the App</a>
              </li>
              <li className="py-2">
                <a href="#">Order on the Web</a>
              </li>
              <li className="py-2">
                <a href="#">Delivery</a>
              </li>
              <li className="py-2">
                <a href="#">Order and Pick Up Options</a>
              </li>
              <li className="py-2">
                <a href="#">Explore and Find Coffee for Home</a>
              </li>
            </ul>
          </div>
        </nav>
      </footer>
      <section>
        <ul>
          <li>
            <a href="https://open.spotify.com/user/starbucks">
              <Spotify />
            </a>
          </li>
          <li>
            <a href="#"></a>
          </li>
          <li>
            <a href="#"></a>
          </li>
          <li>
            <a href="#"></a>
          </li>
          <li>
            <a href="#"></a>
          </li>
        </ul>
      </section>
      <section className="mt-4 mb-1">
        <ul className="flex justify-start">
          <li>
            <a href="" className=" no-underline hover:underline">
              Privacy Notice
            </a>
          </li>
          <li>
            <span className="px-2">|</span>
            <a className="px-4  no-underline hover:underline" href="">
              Term of Use
            </a>
          </li>
          <li>
            <span className="px-2">|</span>
            <a className="px-4 no-underline hover:underline" href="">
              Do not Share My Personal Information
            </a>
          </li>
          <li>
            <span className="px-2">|</span>
            <a className="px-4  no-underline hover:underline" href="">
              CA Supply Chain Act
            </a>
          </li>
          <li>
            <span className="px-2">|</span>
            <a className="px-4  no-underline hover:underline" href="">
              Accessibilty
            </a>
          </li>
          <li>
            <span className="px-2">|</span>
            <a className="px-4  no-underline hover:underline" href="">
              Cookie Preference
            </a>
          </li>
        </ul>
        <p className="text-gray-500 py-4 text-sm">
          © 2024 Starbucks Coffee Company. All rights reserved.
        </p>
      </section>
    </div>
  );
};

export default Footer;
