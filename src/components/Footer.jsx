import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import BASE_URL from "../config/api";
import { FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import Newsletter from "./Newsletter";

const Footer = () => {
  const text =
    "Sign up to our newsletter and get  an exclusive 10% off on your first order.You'll get early notification about our new products, blogs or anything we release.";
  const title = "NewsLetter";

  return (
    <div className="flex flex-col justify-between items-center lg:flex-row lg:justify-between p-4 md:p-8 bg-[#FFFFFF]  bottom-0 gap-4 font-sans font-normal">
      <div className="w-full p-2 flex flex-col items-center justify-center lg:items-start lg:justify-start gap-2 tracking-wide">
        <img
          src="/Images/Logo_Footer.png"
          className="object-cover w-44"
          alt="Logo"
          loading="lazy"
        />

        <div className="flex items-center gap-2 text-[#090914]">
          <FaLocationDot />

          <p>Thamel, Kathmandu, Nepal</p>
        </div>

        <div className="flex gap-2 text-[#090914]">
          <div className="flex mt-1 gap-1">
            <FaPhone />
            <IoLogoWhatsapp className="text-lg" />
          </div>
          <div className="flex flex-col">
            <a href="tel:+9779849779890" className="hover:underline">
              +977-9849779890
            </a>
            <a href="tel:+9779849779322" className="hover:underline">
              +977-9849779322
            </a>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[#090914]">
          <IoMail />
          <a href="mailto:himalayascraft@gmail.com" className="hover:underline">
            himalayascraft@gmail.com
          </a>
        </div>

        <div className="flex w-full items-center justify-center lg:items-start lg:justify-start mt-4">
          <div className="relative group overflow-hidden border p-4">
            <div className="absolute inset-0 bg-[#0B4D81] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
            <a
              href="https://www.facebook.com/himalayascraftnepal/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 text-[#0B4D81] group-hover:text-white transition-colors"
            >
              <FaFacebook />
            </a>
          </div>

          <div className="relative  group overflow-hidden border p-4">
            <div className="absolute inset-0 bg-[#0B4D81] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
            <a
              href="https://www.instagram.com/himalayascraftnepal/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 text-[#0B4D81] group-hover:text-white transition-colors"
            >
              <FaInstagram />
            </a>
          </div>

          <div className="relative group overflow-hidden border p-4">
            <div className="absolute inset-0 bg-[#0B4D81] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
            <a
              href="https://www.youtube.com/channel/UCgxP4Bc3CJ_qxzbN4DD4zgQ"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 text-[#0B4D81] group-hover:text-white transition-colors"
            >
              <FaYoutube />
            </a>
          </div>

          <div className="relative group overflow-hidden border p-4">
            <div className="absolute inset-0 bg-[#0B4D81] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
            <a
              href="https://www.tiktok.com/@himalayas.craft?_r=1&_t=ZS-96C0BCbApKa"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 text-[#0B4D81] group-hover:text-white transition-colors"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      <div className="flex  justify-between w-full p-4">
        <div className="">
          <h1 className="text-[#bb2821] font-semibold">About Us</h1>

          <div className="text-[#090914] text-sm flex flex-col gap-2 mt-2">
            <NavLink
              to="/about/story"
              className="text-[#111111] hover:text-[#0B4D81]"
            >
              About HCN
            </NavLink>

            <NavLink
              to="/gallery"
              className="text-[#111111] hover:text-[#0B4D81]"
            >
              Gallery
            </NavLink>

            <NavLink
              to="/about/team"
              className="text-[#111111] hover:text-[#0B4D81]"
            >
              HCN Team
            </NavLink>

            <NavLink
              to="/policies/terms-condition"
              className="text-[#111111] hover:text-[#0B4D81]"
            >
              Terms and Conditions
            </NavLink>

            <NavLink
              to="/about"
              className="text-[#111111] hover:text-[#0B4D81]"
            >
              Refund Policy
            </NavLink>

            <NavLink
              to="/wholesale"
              className="text-[#111111] hover:text-[#0B4D81]"
            >
              Wholesale
            </NavLink>

            <NavLink
              to="/policies/private-policy"
              className="text-[#111111] hover:text-[#0B4D81]"
            >
              Privacy Policy
            </NavLink>

            <NavLink
              to="/shipping-policy"
              className="text-[#111111] hover:text-[#0B4D81]"
            >
              Shipping Policy
            </NavLink>
          </div>
        </div>

        <div className=" ">
          <h1 className="text-[#bb2821] font-semibold">Resources</h1>
          <div className="text-[#090914] text-sm flex flex-col gap-2 mt-2">
            <a
              href="https://www.himalayascraftnepal.com/blogs/68203c6fa859c49dbb6ebea1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#111111] hover:text-[#0B4D81]"
            >
              History of Singing Bowls
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.himalayascraftnepal.com/blogs/682598e888f223446c359d1b"
              className="text-[#111111] hover:text-[#0B4D81]"
            >
              How to play singing bowl?
            </a>

            <a
              href="https://www.himalayascraftnepal.com/blogs/68258d0c88f223446c359d0d"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#111111] hover:text-[#0B4D81]"
            >
              How to clean your singing bowl?
            </a>

            <a
              href="https://www.himalayascraftnepal.com/blogs/6860ef427be7fbaccc8a3817"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#111111] hover:text-[#0B4D81]"
            >
              Benefits of Sound Healing and Sound Bath
            </a>

            <a
              href="https://www.himalayascraftnepal.com/blogs/6863945b895a2227a0fe5834"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#111111] hover:text-[#0B4D81]"
            >
              Choosing the best shop for buying healing products
            </a>

            <a
              href="https://www.himalayascraftnepal.com/blogs/6863bbec47d926ea427ff064"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#111111] hover:text-[#0B4D81]"
            >
              How do we make singing bowls?
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full p-3 justify-center items-center md:justify-end md:items-end">
        <Newsletter text={text} title={title} />
      </div>
    </div>
  );
};

export default Footer;
