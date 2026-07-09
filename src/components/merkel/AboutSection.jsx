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



      {/* SOFT GOLD BACKGROUND */}

      <div
        className="
        absolute
        inset-0

        bg-gradient-to-l

        from-[#C5A059]/20
        via-transparent
        to-transparent
        "
      />







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

          initial={{ opacity:0, y:40 }}

          whileInView={{ opacity:1, y:0 }}

          transition={{ duration:1 }}

          className="
          max-w-[520px]

          mx-auto
          "
        >








          <img

            src={about}

            alt="Merkel Development Expertise"

            className="
            w-full

            h-auto

            max-h-[850px]

            object-contain

            shadow-2xl
            "
          />








        </motion.div>














        {/* CONTENT */}

        <motion.div

          initial={{ opacity:0, y:40 }}

          whileInView={{ opacity:1, y:0 }}

          transition={{ duration:1 }}

        >







          <p
            className="
            tracking-[0.3em]

            text-[#C5A059]

            text-sm

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

            Trusted Partnership. <br />

            Luxury Crafted. <br />


            <span className="text-[#C5A059]">

              Timeless Quality.

            </span>


          </h2>










          <p className="text-gray-600 leading-8 mb-8">

            Merkel Development is a luxury residential development firm led by an owner
            with over four decades of experience in real estate and construction.

          </p>










          <p className="text-gray-600 leading-8 mb-8">

            We specialize in planning and developing custom homes throughout
            Arcadia and Phoenix, Arizona, with a commitment to craftsmanship,
            integrity, and long-term quality.

          </p>










          <p className="text-gray-600 leading-8">

            Each project is guided through hands-on leadership, careful coordination,
            and attention to detail from concept through completion.

          </p>









          <div
            className="
            mt-12

            border-t
            border-black/10

            pt-8
            "
          >








            <h3
              className="
              text-[#C5A059]

              text-3xl

              font-serif

              mb-4
              "
            >

              40+ YEARS

            </h3>










            <p
              className="
              text-gray-500

              text-xs

              tracking-widest
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