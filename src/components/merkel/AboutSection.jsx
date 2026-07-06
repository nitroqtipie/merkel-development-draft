import about from "../../assets/about.png";
import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (

    <section
      id="about"
      className="
      relative
      overflow-hidden

      bg-[#F9F7F2]

      text-[#111111]

      py-20
      md:py-32

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
        from-[#C5A059]/30
        via-[#F9F7F2]/60
        to-transparent

        pointer-events-none
        "
      ></div>



      <div
        className="
        relative
        z-10

        max-w-7xl
        mx-auto

        grid
        grid-cols-1
        md:grid-cols-2

        gap-16
        md:gap-20

        items-center
        "
      >



        {/* IMAGE */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >



          {/* GOLD FRAME */}

          <div
            className="
            absolute

            -bottom-3
            md:-bottom-5

            -right-3
            md:-right-5

            w-full
            h-full

            border
            border-[#C5A059]/60

            z-0
            "
          ></div>





          <img
            src={about}
            className="
            relative
            z-10

            w-full

            h-[420px]
            md:h-[650px]

            object-cover

            shadow-2xl
            "
          />


        </motion.div>











        {/* TEXT */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >





          <p
            className="
            tracking-[0.3em]

            text-[#C5A059]

            text-xs
            md:text-sm

            mb-6
            md:mb-8
            "
          >

            — OUR STORY

          </p>








          <h2
            className="
            font-serif

            text-4xl
            md:text-6xl

            leading-tight

            mb-8
            md:mb-10
            "
          >

            Trusted Partnership. <br />

            Luxury Crafted. <br />


            <span className="text-[#C5A059]">

              Timeless Quality.

            </span>


          </h2>











          <p className="text-gray-600 leading-8 mb-8">

            Merkel Development is a luxury residential development firm led by an owner
            with over four decades of experience in real estate and construction.
            We specialize in the planning and development of custom homes in Arcadia
            and Phoenix, Arizona, creating thoughtfully designed residences that reflect
            the vision, lifestyle, and values of our clients.

          </p>





          <p className="text-gray-600 leading-8 mb-8">

            Our approach is built on collaboration. When a project requires it, we
            coordinate with architects, engineers, interior designers, and specialized
            trades to support design intent and delivery of each project.

          </p>





          <p className="text-gray-600 leading-8">

            Each project is managed with hands-on involvement from conception through
            completion, with a focus on precision, craftsmanship, and integrity
            throughout the construction process.

          </p>











          <div
            className="
            mt-12
            md:mt-14

            border-t
            border-black/10

            pt-8
            "
          >





            <h3
              className="
              text-[#C5A059]

              text-2xl
              md:text-3xl

              font-serif

              mb-4
              "
            >

              40+ YEARS

            </h3>






            <p
              className="
              text-xs

              tracking-widest

              text-gray-500

              leading-6
              "
            >

              LED BY AN OWNER WITH MORE THAN 40 YEARS OF CONSTRUCTION EXPERIENCE.

            </p>


          </div>



        </motion.div>


      </div>


    </section>

  );
}