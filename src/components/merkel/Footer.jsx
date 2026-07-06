import React from "react";
import footerLogo from "../../assets/logofooter.png";

export default function Footer() {

  return (

    <footer
      className="
      relative

      bg-gradient-to-b
      from-[#B8AF9E]
      via-[#4A4944]
      to-[#252525]

      text-white

      px-6
      md:px-8

      py-10
      md:py-12

      overflow-hidden
      "
    >


      <div className="max-w-7xl mx-auto">


        <div
          className="
          grid

          grid-cols-1
          md:grid-cols-3

          gap-10
          md:gap-16

          mb-10
          "
        >





          {/* BRAND */}

          <div>



            {/* FOOTER LOGO */}

            <div
              className="
              flex
              items-center

              mb-2
              "
            >


              <img
                src={footerLogo}

                alt="Merkel Development Logo"

                className="
                h-28
                md:h-36

                w-auto

                object-contain
                "
              />


            </div>








            <p
              className="
              text-gray-100

              leading-7

              max-w-sm
              "
            >

              Luxury residential development in Arcadia and Phoenix, Arizona.
              Building homes. Creating wealth.

            </p>



          </div>












          {/* NAVIGATION */}

          <div>


            <p
              className="
              text-[#D6B25E]

              tracking-widest

              text-sm

              mb-5
              "
            >

              NAVIGATION

            </p>






            <div
              className="
              space-y-3

              text-gray-100
              "
            >



              <a href="#about" className="block hover:text-[#D6B25E] transition">
                About
              </a>



              <a href="#services" className="block hover:text-[#D6B25E] transition">
                Services
              </a>



              <a href="#investment" className="block hover:text-[#D6B25E] transition">
                Investment
              </a>



              <a href="#process" className="block hover:text-[#D6B25E] transition">
                Portfolio
              </a>



              <a href="#contact" className="block hover:text-[#D6B25E] transition">
                Contact
              </a>



            </div>



          </div>












          {/* CONTACT */}

          <div>


            <p
              className="
              text-[#D6B25E]

              tracking-widest

              text-sm

              mb-5
              "
            >

              CONTACT

            </p>






            <div
              className="
              space-y-3

              text-gray-100
              "
            >



              <p>

                Arcadia • Phoenix, Arizona

              </p>



              <p className="break-all">

                info@merkeldevelopment.com

              </p>



            </div>



          </div>




        </div>












        {/* COPYRIGHT */}

        <div
          className="
          border-t
          border-white/15

          pt-6

          text-gray-300

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