import { useEffect, useState, useRef, RefObject } from "react";
import Link from "next/link";
import Image from "next/image";
import LogoImg from "@/images/fixed-header-logo.svg";
import NetPulse from "@/images/netpulse-logo.svg";

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const sections = useRef<(Element | null)[]>([]);

  const handleNavLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    event.preventDefault();
    const targetElement = document.querySelector(targetId);
    const headerElement = document.querySelector("header");
    const headerOffset = headerElement ? headerElement?.offsetHeight : 104;
    const elementPosition = targetElement?.getBoundingClientRect().top || 0;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    setActiveSection(targetId);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    sections.current = Array.from(document.querySelectorAll("section"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.6, // Adjust this value based on when you want the link to activate
      },
    );

    sections.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 p-5 z-10 mx-auto transition-colors border-b-[1px] duration-300 ${isScrolled ? " border-white/10 bg-custom-dark" : "border-custom-dark"}`}
    >
      <div
        className={`container mx-auto flex justify-between items-center gap-3 transition-[height] duration-300 ${isScrolled ? "h-[48px] md:h-[64px]" : "h-[64px] md:h-[96px]"}`}
      >
        <Link href="/" className="block lg:hidden flex-shrink-0">
          <Image src={LogoImg} width={56} alt="logo" />
        </Link>

        <Link href="/" className="hidden lg:block">
          <Image src={NetPulse} width={152} alt="logo" />
        </Link>

        <nav className="text-lg font-semibold hidden md:block">
          <ul className="flex gap-6">
            <li>
              <Link
                href="#home"
                className={`transition-colors duration-300 ${activeSection === "#home" ? "text-custom-pink" : ""}`}
                onClick={(e) => handleNavLinkClick(e, "#home")}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="#services"
                className={`transition-colors duration-300 ${
                  activeSection === "#services" ? "text-custom-pink" : ""
                }`}
                onClick={(e) => handleNavLinkClick(e, "#services")}
              >
                Our Services
              </Link>
            </li>

            <li>
              <Link
                href="#benefits"
                className={`transition-colors duration-300 ${
                  activeSection === "#benefits" ? "text-custom-pink" : ""
                }`}
                onClick={(e) => handleNavLinkClick(e, "#benefits")}
              >
                Our Benefits
              </Link>
            </li>

            <li>
              <Link
                href="#contact-us"
                className={`transition-colors duration-300 ${
                  activeSection === "#contact-us" ? "text-custom-pink" : ""
                }`}
                onClick={(e) => handleNavLinkClick(e, "#contact-us")}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        <button className="bg-custom-green text-custom-dark text-lg font-bold rounded-full px-6 py-2 md:px-8 md:py-3 md:text-xl">
          Connect wallet
        </button>
      </div>
    </header>
  );
};

export default Header;
