import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="bg-[#F8F8F8] py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="col-span-2 lg:col-span-1">
              <h1 className="text-[#22C55E] font-bold text-2xl mb-5">Logo</h1>
              <p className="text-[#4F4F4F] text-sm mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at purus eu risus aliquet dignissim.{" "}
              </p>
              <div className="flex items-center">
                <div className="bg-[#22C55E] rounded-full h-10 w-10 flex items-center justify-center mr-3">
                  <i className="fab fa-facebook-f text-white"></i>
                </div>
                <div className="bg-[#22C55E] rounded-full h-10 w-10 flex items-center justify-center mr-3">
                  <i className="fab fa-twitter text-white"></i>
                </div>
                <div className="bg-[#22C55E] rounded-full h-10 w-10 flex items-center justify-center mr-3">
                  <i className="fab fa-instagram text-white"></i>
                </div>
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <h1 className="text-[#22C55E] font-bold text-2xl mb-5">
                Quick Links
              </h1>
              <ul className="text-[#4F4F4F] text-sm">
                <li className="mb-3">About Us</li>
                <li className="mb-3">Contact Us</li>
                <li className="mb-3">Terms of Service</li>
                <li className="mb-3">Privacy Policy</li>
              </ul>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <h1 className="text-[#22C55E] font-bold text-2xl mb-5">
                Contact Us
              </h1>
              <ul className="text-[#4F4F4F] text-sm">
                <li className="mb-3">+91 9876543210</li>
                <li className="mb-3">+91 9876543210</li>
                <li className="mb-3">+91 9876543210</li>
                <li className="mb-3">+91 9876543210</li>
              </ul>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <h1 className="text-[#22C55E] font-bold text-2xl mb-5">
                Address
              </h1>
              <p className="text-[#4F4F4F] text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at purus eu risus aliquet dignissim.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#EAEAEA] mt-10 pt-10">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <p className="text-[#4F4F4F] text-sm">
                © 2021 All Rights Reserved.
              </p>
              <div className="flex items-center">
                <p className="text-[#4F4F4F] text-sm mr-5">
                  Made with <i className="fas fa-heart text-[#22C55E]"></i> by{" "}
                  <span className="text-[#22C55E]">Khalid</span>
                </p>
                <div className="bg-[#22C55E] rounded-full h-10 w-10 flex items-center justify-center mr-3">
                  <i className="fab fa-facebook-f text-white"></i>
                </div>
                <div className="bg-[#22C55E] rounded-full h-10 w-10 flex items-center justify-center mr-3">
                  <i className="fab fa-twitter text-white"></i>
                </div>
                <div className="bg-[#22C55E] rounded-full h-10 w-10 flex items-center justify-center mr-3">
                  <i className="fab fa-instagram text-white"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
