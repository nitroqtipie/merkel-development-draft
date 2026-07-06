import React from "react";

import process1 from "../../assets/process1.jpg";
import process2 from "../../assets/process2.png";
import process3 from "../../assets/process3.png";
import process4 from "../../assets/process4.png";
import process5 from "../../assets/process5.png";


export default function ProcessSection() {


  const steps = [

    {
      phase: "01",
      image: process1,
      title: "Planning",
      text:
        "Every project begins with feasibility, design coordination, and structured planning to ensure disciplined execution from inception."
    },


    {
      phase: "02",
      image: process2,
      title: "Foundation",
      text:
        "Precision-engineered foundations establish structural integrity and long-term performance."
    },


    {
      phase: "03",
      image: process3,
      title: "Framing",
      text:
        "Structural systems define scale, proportion, and architectural clarity."
    },


    {
      phase: "04",
      image: process4,
      title: "Craftsmanship",
      text:
        "Premium materials and detailed execution bring design intent into physical form."
    },


    {
      phase: "05",
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
      bg-[#161616]
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
            md:text-sm

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





          <div
            className="
            space-y-6

            text-gray-300

            leading-8
            "
          >


            <p>
              Prior development projects executed through affiliated entities are reviewed during due diligence with qualified investors.
            </p>


            <p>
              Every phase of construction will be guided by precision, quality, and an unrelenting commitment to the craft. We believe the process is as important as the result.
            </p>


            <p>
              Carefully curated luxury residential opportunities in established Arcadia locations, guided by the founder’s background in custom home development and executed through Merkel Development’s vertically integrated construction and development platform.
            </p>


          </div>


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


            <div key={index}>


              <div className="relative overflow-hidden">


                <img
                  src={item.image}

                  className={`
                  w-full

                  h-[420px]
                  md:h-[500px]

                  object-cover

                  ${
                    index === 3
                    ? "object-[47%_center]"
                    : "object-center"
                  }

                  hover:scale-105

                  transition

                  duration-700
                  `}
                />



                <p
                  className="
                  absolute

                  top-5
                  left-5

                  text-white/60

                  text-xs

                  tracking-widest
                  "
                >

                  {item.phase}

                </p>



              </div>






              <h3
                className="
                mt-6
                md:mt-8

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


            </div>


          ))}


        </div>



      </div>


    </section>

  );

}