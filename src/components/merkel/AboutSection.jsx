import founder from "../../assets/founder.png";
import about from "../../assets/about.png";
import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {

  return (

    <section
      id="about"
      className="
      relative

      bg-[#F9F7F2]

      text-[#111111]

      py-20
      md:py-32

      px-6
      md:px-8

      overflow-hidden
      "
    >



      {/* GOLD FADE */}

      <div
        className="
        absolute
        right-0
        top-0

        w-1/2
        h-full

        bg-gradient-to-l
        from-[#C5A059]/20
        to-transparent
        "
      ></div>






      <div
        className="
        relative

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







        {/* FOUNDER IMAGE */}

        <motion.div

          initial={{ opacity:0, y:40 }}

          whileInView={{ opacity:1, y:0 }}

          transition={{duration:1}}

          className="
          relative
          "
        >



          <img
            src={founder}

            className="
            relative

            z-10

            w-[85%]

            h-[520px]

            object-cover

            shadow-2xl
            "
          />






          {/* OLD ABOUT IMAGE */}

          <img
            src={about}

            className="
            absolute

            right-0
            -bottom-10

            w-[45%]

            h-[220px]

            object-cover

            shadow-xl

            border-4
            border-[#F9F7F2]

            z-20
            "
          />



        </motion.div>










        {/* TEXT */}

        <motion.div

          initial={{ opacity:0, y:40 }}

          whileInView={{ opacity:1, y:0}}

          transition={{duration:1}}

        >



          <p
            className="
            tracking-[0.3em]

            text-[#C5A059]

            text-xs
            md:text-sm

            mb-8
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

            mb-10
            "
          >

            Trusted Partnership. <br/>

            Luxury Crafted. <br/>


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






        </motion.div>



      </div>


    </section>

  );

}