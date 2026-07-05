import React from "react";

import process1 from "../../assets/process1.jpg";
import process2 from "../../assets/process2.jpg";
import process3 from "../../assets/process3.png";
import process4 from "../../assets/process4.jpg";
import process5 from "../../assets/process5.jpg";


export default function ProcessSection() {


  const steps = [

    {
      phase: "PHASE 01",
      image: process1,
      title: "Planning",
      text:
        "Every exceptional home begins with meticulous planning — feasibility studies, architectural vision, and strategic coordination before ground is ever broken."
    },


    {
      phase: "PHASE 02",
      image: process2,
      title: "Foundation",
      text:
        "Precision-engineered foundations set the standard. Structural integrity is non-negotiable — it’s the bedrock of every Merkel home."
    },


    {
      phase: "PHASE 03",
      image: process3,
      title: "Framing",
      text:
        "Architectural framing reveals the geometry of the home. Clean lines, structural connections, and the skeleton of something extraordinary."
    },


    {
      phase: "PHASE 04",
      image: process4,
      title: "Craftsmanship",
      text:
        "Premium materials meet skilled hands. Hand-troweled plaster, reclaimed hardwoods, and custom millwork define our attention to detail."
    },


    {
      phase: "PHASE 05",
      image: process5,
      title: "Completion",
      text:
        "The final vision realized — a luxury residence that stands as a testament to purpose, patience, and uncompromising quality."
    },

  ];



  return (

    <section
      id="process"
      className="
      bg-[#080808]
      text-white
      px-8
      py-24
      "
    >


      <div className="max-w-7xl mx-auto">


        {/* HEADER */}

        <div className="mb-16 max-w-3xl">


          <p
            className="
            text-[#C5A059]
            tracking-[0.4em]
            text-sm
            mb-6
            "
          >

            — PROCESS

          </p>




          <h2
            className="
            font-serif
            text-5xl
            leading-tight
            mb-8
            "
          >

            The Honest Build. <br />
            From Vision to Reality.

          </h2>




          <p
            className="
            text-gray-400
            leading-8
            "
          >

            Every phase of construction will be guided by precision,
            quality, and an unrelenting commitment to the craft.
            We believe the process is as important as the result.

          </p>


        </div>







        {/* PROCESS CARDS */}

        <div
          className="
          grid
          grid-cols-5
          gap-8
          "
        >


          {steps.map((item,index)=>(


            <div key={index}>


              <div className="relative overflow-hidden">


                <img
                  src={item.image}
                  className="
                  h-[500px]
                  w-full
                  object-cover
                  hover:scale-105
                  transition
                  duration-700
                  "
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
                text-gray-500
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