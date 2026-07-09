import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MapPin, Mail, Phone } from "lucide-react";


export default function ContactSection() {


  const form = useRef();


  const sendEmail = (e) => {

    e.preventDefault();


    emailjs.sendForm(

      "service_klmyljd",

      "template_dzk8k4a",

      form.current,

      "_MFYruFOunX5iviUo"

    )

    .then(() => {

      alert("Message sent successfully!");

      form.current.reset();

    })

    .catch((error) => {

      console.log(error);

      alert("Message failed. Please try again.");

    });


  };





  return (

    <section

      id="contact"

      className="
      bg-[#F9F7F2]

      text-[#111111]

      py-24

      px-6
      md:px-8
      "
    >




      <div

        className="
        max-w-7xl

        mx-auto

        grid

        grid-cols-1
        lg:grid-cols-[1.1fr_0.9fr]

        gap-20

        items-start
        "
      >







        {/* LEFT SIDE */}

        <div>



          <p

            className="
            text-[#C5A059]

            tracking-[0.35em]

            text-xs

            mb-8
            "
          >

            — CONNECT

          </p>






          <h2

            className="
            font-serif

            text-5xl
            md:text-6xl

            leading-tight

            mb-10
            "
          >


            Partner With <br />

            <span className="text-[#C5A059]">

              Merkel Development.

            </span>


          </h2>






          <p

            className="
            max-w-xl

            text-gray-600

            leading-8

            mb-16
            "
          >


            Whether planning a custom residence, exploring a development
            opportunity, or considering investment partnerships — connect
            with our team.


          </p>










          {/* FORM */}


          <form

            ref={form}

            onSubmit={sendEmail}

            className="space-y-10"
          >




            <div

              className="
              grid

              grid-cols-1
              md:grid-cols-2

              gap-10
              "
            >




              <input

                required

                name="name"

                placeholder="NAME"

                className="
                bg-transparent

                border-b

                border-black/30

                py-3

                outline-none
                "
              />





              <input

                required

                name="email"

                type="email"

                placeholder="EMAIL"

                className="
                bg-transparent

                border-b

                border-black/30

                py-3

                outline-none
                "
              />



            </div>








            <input

              name="phone"

              placeholder="PHONE"

              className="
              w-full

              bg-transparent

              border-b

              border-black/30

              py-3

              outline-none
              "
            />








            <textarea

              required

              name="message"

              placeholder="MESSAGE"

              rows="5"

              className="
              w-full

              bg-transparent

              border-b

              border-black/30

              py-3

              outline-none

              resize-none
              "
            />









            <button

              type="submit"

              className="
              bg-[#C5A059]

              px-14

              py-4

              text-black

              text-sm

              tracking-widest

              hover:bg-[#B98D38]

              transition
              "
            >


              SEND MESSAGE →


            </button>



          </form>




        </div>









        {/* RIGHT CONTACT DETAILS */}


        <div

          className="
          pt-32

          space-y-14
          "
        >






          <div className="flex gap-8">


            <MapPin

              className="
              text-[#C5A059]

              shrink-0
              "
            />



            <div>


              <p

                className="
                tracking-widest

                text-sm

                mb-4
                "
              >

                LOCATION

              </p>


              <p className="text-gray-600">

                Arcadia • Phoenix, Arizona

              </p>


            </div>


          </div>










          <div className="flex gap-8">


            <Mail

              className="
              text-[#C5A059]

              shrink-0
              "
            />



            <div>


              <p

                className="
                tracking-widest

                text-sm

                mb-4
                "
              >

                EMAIL

              </p>


              <p className="text-gray-600">

                info@merkeldevelopment.com

              </p>


            </div>


          </div>










          <div className="flex gap-8">


            <Phone

              className="
              text-[#C5A059]

              shrink-0
              "
            />



            <div>


              <p

                className="
                tracking-widest

                text-sm

                mb-4
                "
              >

                PHONE

              </p>


              <p className="text-gray-600">

                480-798-8354

              </p>


            </div>


          </div>






        </div>





      </div>




    </section>

  );

}