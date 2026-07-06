import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { Menu, X } from "lucide-react";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);


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
      duration-500


      ${
        scrolled || open
        ? "bg-[#151515]/95 backdrop-blur border-b border-white/10"
        : "bg-transparent"
      }

      `}
    >



      <div
        className="
        max-w-7xl
        mx-auto

        px-6
        md:px-8

        py-1

        flex
        justify-between
        items-center
        "
      >






        {/* LOGO */}

        <a
          href="#"

          className="
          flex
          items-center
          "
        >


          <img
            src={logo}

            alt="Merkel Development Logo"

            className="
            h-12
            md:h-14

            w-auto
            object-contain
            "
          />


        </a>









        {/* DESKTOP MENU */}

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









        {/* MOBILE BUTTON */}

        <button
          onClick={()=>setOpen(!open)}

          className="
          md:hidden
          text-white
          "
        >


          {open ? <X size={26}/> : <Menu size={26}/>}


        </button>





      </div>











      {/* MOBILE MENU */}

      {open && (

        <div
          className="
          md:hidden

          bg-[#151515]/95

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

              hover:text-[#C5A059]

              transition
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