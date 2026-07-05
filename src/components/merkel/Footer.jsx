import React from "react";
import logo from "../../assets/logo.png";

export default function Footer() {

  return (

    <footer className="bg-[#080808] text-white px-8 py-20">

      <div className="max-w-7xl mx-auto">


        <div className="grid md:grid-cols-3 gap-20 mb-20">



          {/* BRAND */}
          <div>


            <div
              className="
              flex
              items-center
              gap-4
              mb-8
              "
            >

              <img
                src={logo}
                alt="Merkel Development Logo"
                className="
                h-12
                w-auto
                object-contain
                "
              />


              <h2
                className="
                font-serif
                text-3xl
                tracking-widest
                "
              >

                MERKEL

              </h2>


            </div>




            <p className="text-gray-500 leading-8">

              Luxury residential development in Arcadia and Phoenix, Arizona.
              Building homes. Creating wealth.

            </p>



            <p className="text-[#C5A059] mt-8 tracking-widest text-sm">

              ROC #364263

            </p>


          </div>






          {/* NAVIGATION */}
          <div>

            <p className="text-[#C5A059] tracking-widest text-sm mb-8">
              NAVIGATION
            </p>


            <div className="space-y-4 text-gray-400">


              <a href="#about" className="block hover:text-[#C5A059]">
                About
              </a>


              <a href="#services" className="block hover:text-[#C5A059]">
                Services
              </a>


              <a href="#investment" className="block hover:text-[#C5A059]">
                Investment
              </a>


              <a href="#process" className="block hover:text-[#C5A059]">
                Process
              </a>


              <a href="#contact" className="block hover:text-[#C5A059]">
                Contact
              </a>


            </div>


          </div>






          {/* CONTACT */}
          <div>


            <p className="text-[#C5A059] tracking-widest text-sm mb-8">

              CONTACT

            </p>



            <div className="space-y-4 text-gray-400">


              <p>
                Arcadia • Phoenix, Arizona
              </p>


              <p>
                merkeldevelopment@gmail.com
              </p>


              <p>
                ROC #364263
              </p>


            </div>


          </div>



        </div>







        <div
          className="
          border-t
          border-white/10
          pt-10
          text-gray-600
          text-sm
          flex
          justify-between
          flex-wrap
          gap-4
          "
        >


          <p>

            © 2026 Merkel Development. All rights reserved.

          </p>



          <p>

            Arizona Licensed Contractor • ROC #364263

          </p>


        </div>



      </div>


    </footer>

  );

}