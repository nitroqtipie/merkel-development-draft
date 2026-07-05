import React from "react";
import logo from "../../assets/logo.png";

export default function Footer() {

  return (

    <footer
      className="
      bg-[#080808]
      text-white

      px-6
      md:px-8

      py-14
      md:py-20
      "
    >

      <div className="max-w-7xl mx-auto">



        <div
          className="
          grid

          grid-cols-1
          md:grid-cols-3

          gap-14
          md:gap-20

          mb-16
          md:mb-20
          "
        >




          {/* BRAND */}

          <div>


            <div
              className="
              flex
              items-center

              gap-3
              md:gap-4

              mb-8
              "
            >


              <img
                src={logo}
                alt="Merkel Development Logo"

                className="
                h-10
                md:h-12

                w-auto

                object-contain
                "
              />



              <h2
                className="
                font-serif

                text-2xl
                md:text-3xl

                tracking-widest
                "
              >

                MERKEL

              </h2>



            </div>







            <p
              className="
              text-gray-500

              leading-7
              md:leading-8
              "
            >

              Luxury residential development in Arcadia and Phoenix, Arizona.
              Building homes. Creating wealth.

            </p>





            <p
              className="
              text-[#C5A059]

              mt-8

              tracking-widest

              text-sm
              "
            >

              ROC #364263

            </p>




          </div>









          {/* NAVIGATION */}

          <div>


            <p
              className="
              text-[#C5A059]
              tracking-widest

              text-sm

              mb-8
              "
            >

              NAVIGATION

            </p>




            <div
              className="
              space-y-4

              text-gray-400
              "
            >


              <a href="#about" className="block hover:text-[#C5A059] transition">
                About
              </a>


              <a href="#services" className="block hover:text-[#C5A059] transition">
                Services
              </a>


              <a href="#investment" className="block hover:text-[#C5A059] transition">
                Investment
              </a>


              <a href="#process" className="block hover:text-[#C5A059] transition">
                Process
              </a>


              <a href="#contact" className="block hover:text-[#C5A059] transition">
                Contact
              </a>



            </div>



          </div>










          {/* CONTACT */}

          <div>



            <p
              className="
              text-[#C5A059]

              tracking-widest

              text-sm

              mb-8
              "
            >

              CONTACT

            </p>





            <div
              className="
              space-y-4

              text-gray-400
              "
            >



              <p>

                Arcadia • Phoenix, Arizona

              </p>



              <p className="break-all">

                merkeldevelopment@gmail.com

              </p>




              <p>

                ROC #364263

              </p>




            </div>




          </div>





        </div>










        {/* BOTTOM */}

        <div
          className="
          border-t
          border-white/10

          pt-10

          text-gray-600

          text-sm

          flex

          flex-col
          md:flex-row

          justify-between

          gap-4

          text-center
          md:text-left
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