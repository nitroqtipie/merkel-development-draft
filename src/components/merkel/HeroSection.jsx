import hero from "../../assets/hero.png";

export default function HeroSection() {
  return (

    <section
      className="
      relative
      h-screen
      flex
      items-center
      px-20
      bg-cover
      bg-center
      overflow-hidden
      "
      style={{
        backgroundImage: `url(${hero})`
      }}
    >


      {/* LEFT TO RIGHT GRADIENT */}
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-r
        from-black/90
        via-black/50
        to-transparent
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





      <div className="relative z-10">


        <p className="text-champagne uppercase tracking-[5px] text-sm mb-8">
          Arcadia • Phoenix, Arizona
        </p>




        <h1 className="
        font-heading
        text-parchment
        text-8xl
        leading-none
        tracking-wide
        ">

          MERKEL <br />
          DEVELOPMENT

        </h1>





        <p className="mt-8 text-xl italic text-parchment/80">

          Luxury Homes Shaped by Purpose

        </p>





        <p className="mt-3 tracking-widest text-champagne">

          BUILDING HOMES. CREATING WEALTH.

        </p>






        {/* BUTTONS */}
        <div className="mt-10 flex gap-4">


          <a
            href="#contact"
            className="
            bg-[#C5A059]
            text-black
            px-10
            py-4
            tracking-widest
            text-sm
            font-semibold
            hover:bg-white
            transition
            "
          >

            BUILD WITH US

          </a>




          <a
            href="#investment"
            className="
            border
            border-white/40
            px-10
            py-4
            tracking-widest
            text-sm
            text-white
            font-semibold
            hover:bg-[#C5A059]
            hover:text-black
            transition
            "
          >

            EXPLORE INVESTMENT OPPORTUNITIES

          </a>


        </div>



      </div>


    </section>

  );
}