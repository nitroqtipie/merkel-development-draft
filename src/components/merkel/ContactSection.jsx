import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";

export default function ContactSection() {

  return (

    <section
      id="contact"
      className="
      relative
      overflow-hidden

      bg-[#F9F7F2]
      text-[#111111]

      py-20

      px-6
      md:px-8
      "
    >


      {/* GOLD RIGHT FADE */}
      <div
        className="
        absolute
        inset-0

        bg-gradient-to-l
        from-[#C5A059]/25
        via-[#F9F7F2]/60
        to-transparent

        pointer-events-none
        "
      ></div>



      <div
        className="
        relative
        z-10

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

            Build With <br />

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
              type="submit"

              onClick={(e)=>{

                const form = e.currentTarget.form;

                if(form.checkValidity()){

                  e.preventDefault();

                  alert("Message sent successfully.");

                  form.reset();

                }

              }}

              className="
              bg-[#C5A059]

              text-black

              w-full
              md:w-auto

              px-10
              py-4

              tracking-widest

              text-xs

              hover:bg-[#111111]
              hover:text-white

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


            <MapPin className="text-[#C5A059] shrink-0" />


            <div>

              <h3 className="text-sm tracking-widest">

                LOCATION

              </h3>


              <p className="text-gray-600 mt-3">

                Arcadia • Phoenix, Arizona

              </p>


            </div>


          </div>








          <div className="flex gap-6">


            <Mail className="text-[#C5A059] shrink-0" />


            <div>


              <h3 className="text-sm tracking-widest">

                EMAIL

              </h3>


              <p className="text-gray-600 mt-3 break-all">

                info@merkeldevelopment.com

              </p>


            </div>


          </div>









          <div className="flex gap-6">


            <Phone className="text-[#C5A059] shrink-0" />


            <div>


              <h3 className="text-sm tracking-widest">

                PHONE

              </h3>


              <p className="text-gray-600 mt-3">

                (602) 555-1234

              </p>


            </div>


          </div>








          <div
            className="
            border-t
            border-black/10

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