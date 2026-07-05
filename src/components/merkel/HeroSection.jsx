import hero from "../../assets/hero.png";

export default function HeroSection() {
  return (

    <section
      className="
      relative

      min-h-screen

      flex
      items-center

      px-6
      md:px-20

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
        via-black/60
        to-black/20
        "
      ></div>





      {/* BOTTOM CINEMATIC FADE */}
      <div
        className="
        absolute
        inset-0

        bg-gradient-to-t

        from-black/90
        via-transparent
        to-transparent
        "
      ></div>








      <div
        className="
        relative
        z-10

        max-w-5xl
        "
      >



        <p
          className="
          text-champagne
          uppercase

          tracking-[4px]
          md:tracking-[5px]

          text-xs
          md:text-sm

          mb-6
          md:mb-8
          "
        >

          Arcadia • Phoenix, Arizona

        </p>








        <h1
          className="
          font-heading

          text-parchment

          text-5xl
          md:text-8xl

          leading-none

          tracking-wide
          "
        >

          MERKEL <br />

          DEVELOPMENT

        </h1>








        <p
          className="
          mt-8

          text-lg
          md:text-xl

          italic

          text-parchment/80
          "
        >

          Luxury Homes Shaped by Purpose

        </p>








        <p
          className="
          mt-3

          tracking-widest

          text-xs
          md:text-base

          text-champagne
          "
        >

          BUILDING HOMES. CREATING WEALTH.

        </p>











        {/* BUTTONS */}

        <div
          className="
          mt-10

          flex

          flex-col
          md:flex-row

          gap-4
          "
        >



          <a
            href="#contact"
            className="
            bg-[#C5A059]

            text-black

            px-8
            md:px-10

            py-4

            tracking-widest

            text-xs
            md:text-sm

            font-semibold

            text-center

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

            px-8
            md:px-10

            py-4

            tracking-widest

            text-xs
            md:text-sm

            text-white

            font-semibold

            text-center

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