import React from "react";
import servicesBg from "../../assets/services.png";

export default function ServicesSection() {


  const services = [

    {
      title: "Custom Home Construction",
      text:
        "Luxury residences guided by decades of hands-on construction experience, with a focus on precision, premium materials, and thoughtful craftsmanship from concept through completion."
    },


    {
      title: "Design + Build & Project Delivery",
      text:
        "Collaborative project oversight connecting architectural vision, planning, and construction execution to ensure alignment, quality, and attention to detail throughout each phase."
    },


    {
      title: "Pre-Construction & Planning",
      text:
        "Strategic feasibility analysis, budgeting, scheduling, permitting coordination, and development planning designed to establish a strong foundation for successful projects."
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






      {/* BACKGROUND */}

      <div
        className="
        absolute
        inset-0

        bg-cover
        bg-center

        opacity-45
        "

        style={{
          backgroundImage:`url(${servicesBg})`
        }}
      ></div>







      {/* DARK OVERLAY */}

      <div
        className="
        absolute
        inset-0

        bg-gradient-to-r

        from-[#1F2527]/95
        via-[#1F2527]/80
        to-[#1F2527]/50
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

          mb-16
          "
        >

          Comprehensive Expertise. <br/>


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

            gap-6
            md:gap-10

            border-t
            border-white/20

            py-12
            "
          >








            <h3
              className="
              md:col-span-5

              font-serif

              text-3xl
              "
            >

              {item.title}

            </h3>









            <p
              className="
              md:col-span-7

              text-gray-300

              leading-8
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