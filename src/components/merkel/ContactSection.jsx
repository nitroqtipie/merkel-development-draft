import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";

export default function ContactSection() {

  return (

    <section
      id="contact"

      className="
      bg-[#F9F7F2]

      text-[#111111]

      py-20

      px-6
      md:px-8
      "
    >



      <div
        className="
        max-w-6xl
        mx-auto

        grid
        grid-cols-1
        md:grid-cols-2

        gap-16
        "
      >






        {/* LEFT */}

        <div>



          <p
            className="
            tracking-[0.3em]

            text-[#C5A059]

            text-xs

            mb-6
            "
          >

            — CONNECT

          </p>








          <h2
            className="
            font-serif

            text-4xl
            md:text-5xl

            leading-tight

            mb-8
            "
          >

            Partner With <br />


            <span className="text-[#C5A059]">

              Merkel Development.

            </span>


          </h2>








          <p
            className="
            text-gray-600

            leading-7

            mb-12

            max-w-xl
            "
          >

            Whether planning a custom residence, exploring a
            development opportunity, or considering investment partnerships —
            connect with our team.

          </p>










          <form className="space-y-7">



            <div
              className="
              grid

              grid-cols-1
              md:grid-cols-2

              gap-8
              "
            >



              <input

                required

                placeholder="NAME"

                className="
                bg-transparent

                border-b
                border-black/30

                py-3

                outline-none

                text-sm
                "
              />




              <input

                required

                placeholder="EMAIL"

                className="
                bg-transparent

                border-b
                border-black/30

                py-3

                outline-none

                text-sm
                "
              />



            </div>








            <input

              required

              placeholder="PHONE"

              className="
              w-full

              bg-transparent

              border-b
              border-black/30

              py-3

              outline-none

              text-sm
              "
            />









            <textarea

              required

              placeholder="MESSAGE"

              rows="3"

              className="
              w-full

              bg-transparent

              border-b
              border-black/30

              py-3

              outline-none

              text-sm
              "
            />









            <button

              className="
              bg-[#C5A059]

              text-black

              px-10

              py-4

              tracking-widest

              text-xs

              hover:bg-black
              hover:text-white

              transition
              "
            >

              SEND MESSAGE →

            </button>




          </form>



        </div>









        {/* RIGHT CONTACT INFO */}

        <div
          className="
          flex
          flex-col

          justify-center

          space-y-12
          "
        >







          <div className="flex gap-6">

            <MapPin className="text-[#C5A059]" />


            <div>

              <h3 className="tracking-widest text-sm">
                LOCATION
              </h3>


              <p className="text-gray-600 mt-3">

                Arcadia • Phoenix, Arizona

              </p>


            </div>


          </div>









          <div className="flex gap-6">


            <Mail className="text-[#C5A059]" />


            <div>


              <h3 className="tracking-widest text-sm">

                EMAIL

              </h3>



              <p className="text-gray-600 mt-3">

                info@merkeldevelopment.com

              </p>


            </div>


          </div>










          <div className="flex gap-6">


            <Phone className="text-[#C5A059]" />


            <div>


              <h3 className="tracking-widest text-sm">

                PHONE

              </h3>



              <p className="text-gray-600 mt-3">

                480-798-8354

              </p>


            </div>


          </div>






        </div>


      </div>


    </section>

  );

}