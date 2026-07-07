import investment from "../../assets/investment.png";
import React from "react";
import { motion } from "framer-motion";
import { Shield, TrendingUp, Eye, Users, Leaf, BarChart3 } from "lucide-react";

export default function InvestmentSection() {

  const items = [

    {
      icon: Shield,
      title: "Development Opportunities",
      text:
        "Carefully curated luxury residential opportunities in established Arcadia locations, informed by the founder’s extensive background delivering custom homes in partnership with experienced builders."
    },


    {
      icon: TrendingUp,
      title: "Strong Market Fundamentals",
      text:
        "Strategic investments backed by robust Phoenix real estate market dynamics."
    },


    {
      icon: Eye,
      title: "Transparent Communication",
      text:
        "Clear, consistent reporting and open dialogue throughout every project phase."
    },


    {
      icon: Users,
      title: "Experienced Leadership",
      text:
        "Investment decisions guided by the founder’s four decades of development experience."
    },


    {
      icon: Leaf,
      title: "Sustainable Growth",
      text:
        "Long-term value creation strategies designed to preserve and grow capital."
    },


    {
      icon: BarChart3,
      title: "Selected Properties",
      text:
        "Rigorous evaluation criteria ensuring only exceptional opportunities move forward."
    },

  ];




  return (

    <section
      id="investment"

      className="
      bg-[#F9F7F2]

      text-[#0F0F0F]

      py-20
      md:py-32

      px-6
      md:px-8
      "
    >


      <div className="max-w-7xl mx-auto">





        {/* HEADER */}

        <motion.div

          initial={{ opacity:0, y:40 }}

          whileInView={{ opacity:1, y:0 }}

          transition={{ duration:1 }}

          className="max-w-3xl mb-20"
        >





          <p
            className="
            tracking-[0.3em]

            text-[#C5A059]

            text-sm

            mb-8
            "
          >

            — INVESTMENT

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

            Investing in Quality. <br />


            <span className="text-[#C5A059]">

              Building Long-Term Value.

            </span>


          </h2>








          <p
            className="
            text-gray-600

            text-lg

            leading-8
            "
          >

            Merkel Development offers select partnership opportunities
            for investors seeking stable, high-quality exposure to
            Arizona's premier residential market.

          </p>



        </motion.div>









        {/* CONTENT */}

        <div
          className="
          grid

          grid-cols-1
          md:grid-cols-2

          gap-16
          md:gap-20

          items-start
          "
        >





          <img

            src={investment}

            className="
            w-full

            h-[450px]
            md:h-[700px]

            object-cover
            "
          />









          <div>


            <div
              className="
              grid

              grid-cols-1
              md:grid-cols-2

              gap-12
              md:gap-14
              "
            >




              {items.map((item)=>{


                const Icon = item.icon;


                return (

                  <div key={item.title}>



                    <Icon

                      size={24}

                      className="
                      text-[#C5A059]

                      mb-6
                      "
                    />




                    <h3
                      className="
                      font-serif

                      text-2xl

                      mb-4
                      "
                    >

                      {item.title}

                    </h3>






                    <p
                      className="
                      text-gray-600

                      leading-7
                      "
                    >

                      {item.text}

                    </p>



                  </div>

                );

              })}



            </div>









            <a

              href="#contact"

              className="
              inline-block

              mt-20

              bg-[#080808]

              text-white

              px-12

              py-5

              tracking-widest

              text-xs

              font-semibold

              hover:bg-[#C5A059]
              hover:text-black

              transition
              "
            >

              DISCUSS INVESTMENT OPPORTUNITIES

            </a>




          </div>


        </div>



      </div>


    </section>

  );

}