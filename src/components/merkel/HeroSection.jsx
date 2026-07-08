import heroVideo from "../../assets/hero.mp4";

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

      overflow-hidden
      "
    >



      {/* VIDEO BACKGROUND */}

      <video

        autoPlay
        muted
        loop
        playsInline

        className="
        absolute
        inset-0

        w-full
        h-full

        object-cover

        z-0
        "
      >

        <source src={heroVideo} type="video/mp4" />

      </video>








      {/* DARK CINEMATIC OVERLAY */}

      <div
        className="
        absolute
        inset-0

        bg-gradient-to-r

        from-black/90
        via-black/55
        to-black/20

        z-10
        "
      ></div>








      {/* BOTTOM FADE */}

      <div
        className="
        absolute
        inset-0

        bg-gradient-to-t

        from-black/90
        via-transparent
        to-transparent

        z-10
        "
      ></div>









      {/* CONTENT */}

      <div
        className="
        relative

        z-20

        max-w-5xl
        "
      >




        <p
          className="
          text-champagne

          uppercase

          tracking-[5px]

          text-sm

          mb-8
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

          text-xl

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

            href="#investment"

            className="
            bg-[#C5A059]

            text-black

            px-10
            py-4

            tracking-widest

            text-sm

            font-semibold

            text-center

            hover:bg-white

            transition
            "
          >

            EXPLORE INVESTMENT OPPORTUNITIES

          </a>








          <a

            href="#contact"

            className="
            border
            border-white/40

            px-10
            py-4

            tracking-widest

            text-sm

            text-white

            font-semibold

            text-center

            hover:bg-[#C5A059]
            hover:text-black

            transition
            "
          >

            CONNECT WITH US

          </a>



        </div>




      </div>


    </section>

  );

}