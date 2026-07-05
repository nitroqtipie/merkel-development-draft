import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";

export default function ContactSection() {

  return (

    <section
      id="contact"
      className="
      bg-gradient-to-r
      from-[#353636]
      via-[#252626]
      to-[#111111]
      text-white
      py-20
      px-8
      "
    >

      <div
        className="
        max-w-6xl
        mx-auto
        grid
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
            text-5xl
            leading-tight
            mb-8
            "
          >

            Build With <br />

            <span className="text-[#C5A059]">
              Merkel Development.
            </span>

          </h2>


          <p
            className="
            text-gray-400
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


            <div className="grid grid-cols-2 gap-8">

              <input
                placeholder="NAME"
                className="
                bg-transparent
                border-b
                border-white/30
                py-3
                outline-none
                text-sm
                "
              />


              <input
                placeholder="EMAIL"
                className="
                bg-transparent
                border-b
                border-white/30
                py-3
                outline-none
                text-sm
                "
              />

            </div>



            <input
              placeholder="PHONE"
              className="
              w-full
              bg-transparent
              border-b
              border-white/30
              py-3
              outline-none
              text-sm
              "
            />



            <textarea
              placeholder="MESSAGE"
              rows="3"
              className="
              w-full
              bg-transparent
              border-b
              border-white/30
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
              hover:bg-white
              transition
              "
            >

              SEND MESSAGE →

            </button>


          </form>


        </div>





        {/* RIGHT */}

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

              <h3 className="text-sm tracking-widest">
                LOCATION
              </h3>

              <p className="text-gray-400 mt-3">
                Arcadia • Phoenix, Arizona
              </p>

            </div>

          </div>




          <div className="flex gap-6">

            <Mail className="text-[#C5A059]" />

            <div>

              <h3 className="text-sm tracking-widest">
                EMAIL
              </h3>

              <p className="text-gray-400 mt-3">
                merkeldevelopment@gmail.com
              </p>

            </div>

          </div>





          <div className="flex gap-6">

            <Phone className="text-[#C5A059]" />

            <div>

              <h3 className="text-sm tracking-widest">
                PHONE
              </h3>

              <p className="text-gray-400 mt-3">
                (602) 555-1234
              </p>

            </div>

          </div>



          <div
            className="
            border-t
            border-white/10
            pt-10
            italic
            text-gray-500
            font-serif
            "
          >

            "Every home we build is a promise kept."

          </div>



        </div>


      </div>


    </section>

  );

}