import React from "react";
import footerLogo from "../../assets/logofooter.png";

export default function Footer() {

  return (

    <footer
      className="
      bg-[#252525]
      text-white

      px-6
      md:px-8

      py-16
      md:py-20
      "
    >


      <div className="max-w-7xl mx-auto">


        <div
          className="
          grid

          grid-cols-1
          md:grid-cols-3

          gap-16
          md:gap-20

          mb-20
          "
        >





          {/* BRAND */}

          <div>



            {/* FOOTER LOGO */}

            <div
              className="
              flex
              items-center

              mb-8
              "
            >


              <img
                src={footerLogo}

                alt="Merkel Development Logo"

                className="
                h-20
                md:h-24

                w-auto

                object-contain
                "
              />


            </div>








            <p
              className="
              text-gray-300

              leading-8
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







            <div className="space-y-4 text-gray-300">


              <a
                href="#about"
                className="block hover:text-[#C5A059] transition"
              >

                About

              </a>




              <a
                href="#services"
                className="block hover:text-[#C5A059] transition"
              >

                Services

              </a>




              <a
                href="#investment"
                className="block hover:text-[#C5A059] transition"
              >

                Investment

              </a>




              <a
                href="#process"
                className="block hover:text-[#C5A059] transition"
              >

                Portfolio

              </a>




              <a
                href="#contact"
                className="block hover:text-[#C5A059] transition"
              >

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








            <div className="space-y-4 text-gray-300">


              <p>

                Arcadia • Phoenix, Arizona

              </p>




              <p className="break-all">

                info@merkeldevelopment.com

              </p>




              <p>

                ROC #364263

              </p>



            </div>



          </div>




        </div>















        {/* COPYRIGHT */}

        <div
          className="
          border-t
          border-white/15

          pt-10

          text-gray-400

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