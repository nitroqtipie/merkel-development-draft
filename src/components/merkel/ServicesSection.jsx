import React from "react";
import servicesBg from "../../assets/services.png";

export default function ServicesSection() {


  const services = [

    {
      number: "01",
      title: "Custom Home Construction",
      text:
        "Luxury residences built with precision, premium materials, and an unwavering attention to detail shaped by the founder’s decades of hands-on construction experience."
    },


    {
      number: "02",
      title: "Design + Build & Project Delivery",
      text:
        "Comprehensive coordination from architectural planning through construction, focused on seamless execution at every stage."
    },


    {
      number: "03",
      title: "Pre-Construction & Planning",
      text:
        "Feasibility analysis, budgeting, scheduling, permitting, and comprehensive development preparation to support successful project execution."
    }

  ];



  return (

    <section
      id="services"
      className="
      relative

      min-h-screen

      text-white

      py-20

      px-6
      md:px-8

      overflow-hidden
      "
    >





      {/* BACKGROUND IMAGE */}

      <div
        className="
        absolute
        inset-0

        bg-cover
        bg-center

        opacity-40
        "
        style={{
          backgroundImage: `url(${servicesBg})`
        }}
      ></div>








      {/* LEFT TO RIGHT LUXURY FADE */}

      <div
        className="
        absolute
        inset-0

        bg-gradient-to-r

        from-black/90
        via-black/65
        to-black/35
        "
      ></div>







      {/* BOTTOM CINEMATIC FADE */}

      <div
        className="
        absolute
        inset-0

        bg-gradient-to-t

        from-black/80
        via-transparent
        to-transparent
        "
      ></div>









      <div
        className="
        relative

        z-10

        max-w-7xl

        mx-auto
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

          — WHAT WE DO

        </p>










        <h2
          className="
          font-serif

          text-4xl
          md:text-5xl

          leading-tight

          mb-14
          md:mb-20
          "
        >

          Comprehensive Expertise. <br />


          <span className="text-[#C5A059]">

            Singular Vision.

          </span>


        </h2>









        {services.map((item,index)=>(



          <div
            key={index}

            className="
            grid

            grid-cols-1
            md:grid-cols-12

            gap-5
            md:gap-10

            border-t
            border-white/20

            py-10
            md:py-12
            "
          >





            <p
              className="
              md:col-span-1

              text-[#C5A059]

              font-serif

              text-lg
              "
            >

              {item.number}

            </p>








            <h3
              className="
              md:col-span-5

              font-serif

              text-2xl
              "
            >

              {item.title}

            </h3>









            <p
              className="
              md:col-span-6

              text-gray-300

              leading-7
              "
            >

              {item.text}

            </p>




          </div>


        ))}



      </div>



    </section>

  );

}