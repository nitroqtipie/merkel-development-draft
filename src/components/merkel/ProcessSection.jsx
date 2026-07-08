import React from "react";
import { motion } from "framer-motion";

import process1 from "../../assets/process1.png";
import process2 from "../../assets/process2.png";
import process3 from "../../assets/process3.png";
import process4 from "../../assets/process4.png";
import process5 from "../../assets/process5.png";


export default function ProcessSection() {


  const steps = [

    {
      image: process1,
      title: "Planning",
      text:
        "Every project begins with feasibility, design coordination, and structured planning to ensure disciplined execution from inception."
    },


    {
      image: process2,
      title: "Foundation",
      text:
        "Precision-engineered foundations establish structural integrity and long-term performance."
    },


    {
      image: process3,
      title: "Framing",
      text:
        "Structural systems define scale, proportion, and architectural clarity."
    },


    {
      image: process4,
      title: "Craftsmanship",
      text:
        "Premium materials and detailed execution bring design intent into physical form."
    },


    {
      image: process5,
      title: "Completion",
      text:
        "A fully realized residential asset delivered with focus on quality, longevity, and market positioning."
    },

  ];




  return (

    <section
      id="process"

      className="
      bg-[#252525]

      text-white

      px-6
      md:px-8

      py-20
      md:py-24
      "
    >


      <div className="max-w-7xl mx-auto">






        {/* HEADER */}

        <div
          className="
          mb-16

          max-w-4xl
          "
        >



          <p
            className="
            text-[#C5A059]

            tracking-[0.35em]

            text-xs

            mb-6
            "
          >

            — FOUNDER PORTFOLIO

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

            Founder Portfolio

          </h2>







          <p className="text-gray-400 leading-8 mb-6">

            Prior development projects executed through affiliated entities are reviewed during due diligence with qualified investors.

          </p>



          <p className="text-gray-400 leading-8 mb-6">

            Every phase of construction will be guided by precision, quality, and an unrelenting commitment to the craft. We believe the process is as important as the result.

          </p>



          <p className="text-gray-400 leading-8">

            Carefully curated luxury residential opportunities in established Arcadia locations, guided by the founder’s background in custom home development and executed through Merkel Development’s vertically integrated construction and development platform.

          </p>




        </div>









        {/* PORTFOLIO CARDS */}

        <div
          className="
          grid

          grid-cols-1
          md:grid-cols-5

          gap-12
          md:gap-8
          "
        >



          {steps.map((item,index)=>(


            <motion.div

              key={index}

              initial={{
                opacity:0,
                y:60
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              transition={{
                duration:0.8,
                delay:index * 0.15
              }}

            >




              <div className="overflow-hidden">


                <img

                  src={item.image}

                  className="
                  w-full

                  h-[420px]
                  md:h-[500px]

                  object-cover

                  hover:scale-110

                  transition

                  duration-1000
                  "
                />



              </div>







              <h3
                className="
                mt-8

                font-serif

                text-2xl
                "
              >

                {item.title}

              </h3>







              <p
                className="
                mt-5

                text-gray-400

                leading-7

                text-sm
                "
              >

                {item.text}

              </p>



            </motion.div>


          ))}



        </div>


      </div>


    </section>

  );

}