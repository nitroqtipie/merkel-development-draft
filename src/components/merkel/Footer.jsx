import React from "react";
import footerLogo from "../../assets/logofooter.png";

export default function Footer() {

  return (

    <footer
      className="
      bg-gradient-to-b
      from-[#B8AE98]
      via-[#706B5F]
      to-[#30302C]

      text-white

      px-6
      md:px-8

      py-10
      "
    >


      <div className="max-w-7xl mx-auto">


        <div
          className="
          grid

          grid-cols-1
          md:grid-cols-3

          gap-14

          mb-8
          "
        >







          {/* BRAND */}

          <div>



            <img

              src={footerLogo}

              alt="Merkel Development Logo"

              className="
              h-52
              md:h-64

              w-auto

              object-contain

              mb-2
              "
            />







            <p
              className="
              text-[#FFF9EE]

              leading-8

              max-w-md
              "
            >

              Luxury residential development in Arcadia and Phoenix, Arizona.
              Building homes. Creating wealth.

            </p>






            <p
              className="
              text-[#F4C96A]

              mt-5

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
              text-[#F4C96A]

              tracking-widest

              text-sm

              mb-6
              "
            >

              NAVIGATION

            </p>






            <div
              className="
              space-y-5

              text-[#FFF9EE]
              "
            >


              <a href="#about" className="block hover:text-[#F4C96A] transition">
                About
              </a>


              <a href="#services" className="block hover:text-[#F4C96A] transition">
                Services
              </a>


              <a href="#investment" className="block hover:text-[#F4C96A] transition">
                Investment
              </a>


              <a href="#process" className="block hover:text-[#F4C96A] transition">
                Portfolio
              </a>


              <a href="#contact" className="block hover:text-[#F4C96A] transition">
                Contact
              </a>



            </div>



          </div>















          {/* CONTACT */}

          <div>


            <p
              className="
              text-[#F4C96A]

              tracking-widest

              text-sm

              mb-6
              "
            >

              CONTACT

            </p>







            <div
              className="
              space-y-5

              text-[#FFF9EE]
              "
            >


              <p>
                Arcadia • Phoenix, Arizona
              </p>


              <p className="break-all">
                info@merkeldevelopment.com
              </p>


              <p>
                480-798-8354
              </p>



            </div>



          </div>





        </div>













        {/* COPYRIGHT */}

        <div
          className="
          border-t
          border-white/30

          pt-6

          text-[#EDE8DC]

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