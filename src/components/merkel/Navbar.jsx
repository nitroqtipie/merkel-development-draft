import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);


  const links = [
    { name: "ABOUT", id: "about" },
    { name: "SERVICES", id: "services" },
    { name: "INVESTMENT", id: "investment" },
    { name: "PROCESS", id: "process" },
    { name: "CONTACT", id: "contact" },
  ];


  return (

    <nav
      className={`
      fixed
      top-0
      left-0
      w-full
      z-50
      transition-all
      duration-500

      ${
        scrolled
        ? "bg-[#080808]/95 backdrop-blur border-b border-white/10"
        : "bg-transparent"
      }

      `}
    >

      <div
        className="
        max-w-7xl
        mx-auto
        px-8
        py-4
        flex
        justify-between
        items-center
        "
      >


        {/* LOGO + NAME */}
        <a
          href="#"
          className="
          flex
          items-center
          gap-3
          "
        >

          <img
            src={logo}
            alt="Merkel Development Logo"
            className="
            h-9
            w-auto
            object-contain
            "
          />


          <span
            className="
            font-serif
            text-2xl
            tracking-widest
            text-white
            "
          >

            MERKEL

          </span>

        </a>



        {/* MENU */}
        <div className="hidden md:flex gap-12">

          {links.map((link)=>(

            <a
              key={link.id}
              href={`#${link.id}`}
              className="
              text-xs
              font-semibold
              tracking-[0.18em]
              text-white
              hover:text-[#C5A059]
              transition
              "
            >

              {link.name}

            </a>

          ))}

        </div>


      </div>

    </nav>

  );

}