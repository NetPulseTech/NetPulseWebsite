import Link from "next/link";
import Image from "next/image";
import LogoImg from "@/images/fixed-header-logo.svg";
import NetPulse from "@/images/netpulse-dark-bg.svg";

const Header = () => {
  return (
    <header className="container sticky top-0 p-5 z-10 mx-auto">
      <div className="flex justify-between items-center gap-3  md:h-[96px]">
        <Link href="/" className="block sm:hidden flex-shrink-0">
          <Image src={LogoImg} width={45} alt="logo" />
        </Link>

        <Link href="/" className="hidden sm:block">
          <Image src={NetPulse} width={155} alt="logo" />
        </Link>

        <nav className="text-lg font-semibold hidden md:block">
          <ul className="flex gap-5">
            <li>
              <Link href="#">Home</Link>
            </li>

            <li>
              <Link href="#">Our Services</Link>
            </li>

            <li>
              <Link href="#">Our Benefits</Link>
            </li>

            <li>
              <Link href="#">Contact Us</Link>
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
