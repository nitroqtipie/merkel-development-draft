import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { Menu, X } from "lucide-react";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);


  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };


    window.addEventListener("scroll", handleScroll);


    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);





  const links = [

    { name: "ABOUT", id: "about" },
    { name: "SERVICES", id: "services" },
    { name: "INVESTMENT", id: "investment" },
    { name: "PORTFOLIO", id: "process" },
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
      duration-700


      ${
        scrolled || open
        ? "bg-[#111111]/95 backdrop-blur-md"
        : "bg-transparent"
      }

      `}
    >



      <div
        className="
        relative

        max-w-7xl
        mx-auto

        px-6
        md:px-8

        h-16

        flex
        items-center
        justify-between
        "
      >







        {/* LOGO */}

        <a
          href="#"

          className="
          absolute

          left-6
          md:left-8

          top-1/2

          -translate-y-[42%]

          flex
          items-center
          "
        >


          <img
            src={logo}

            alt="Merkel Development Logo"

            className="
            h-20
            md:h-24

            w-auto

            object-contain
            "
          />


        </a>











        <div></div>










        {/* DESKTOP MENU */}

        <div
          className="
          hidden
          md:flex

          gap-12

          ml-auto
          "
        >


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









        {/* MOBILE */}

        <button
          onClick={()=>setOpen(!open)}

          className="
          md:hidden

          text-white

          ml-auto
          "
        >

          {open ? <X size={28}/> : <Menu size={28}/>}

        </button>


      </div>









      {open && (

        <div
          className="
          md:hidden

          bg-[#111111]/95

          px-6

          py-6

          space-y-6
          "
        >


          {links.map((link)=>(


            <a

              key={link.id}

              href={`#${link.id}`}

              onClick={()=>setOpen(false)}

              className="
              block

              text-sm

              tracking-widest

              text-white
              "
            >

              {link.name}

            </a>


          ))}


        </div>

      )}



    </nav>

  );

}