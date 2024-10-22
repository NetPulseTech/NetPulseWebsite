import Image from "next/image";
import LogoImg from "@/images/fixed-header-logo.svg";
import TelegramImg from "@/images/telegram-icon.svg";
import DiscordImg from "@/images/discord-icon.svg";
import InstagramImg from "@/images/instagram-icon.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative text-center mt-10 sm:p-5 lg:mt-[7.5rem] lg:py-6 sm:border-t-[1px] sm:border-white/10">
      <div className="container sm:flex sm:justify-between sm:items-center sm:gap-5 lg:gap-6 mx-auto">
        <div className="hidden md:block absolute inset-x-0 mx-auto bg-custom-pink/85 amd:bg-custom-pink/60 alg:bg-custom-pink/70 md:blur-[200px] lg:blur-[250px] bottom-0 w-[350px] h-4/6 rounded-t-full"></div>

        <ul className="flex justify-center items-center gap-4 py-6 border-y-[1px] border-white/10 sm:order-2 sm:border-0 md:py-0">
          <li>
            <a href="#">
              <Image
                src={TelegramImg}
                width={56}
                alt="telegram logo"
                className="lg:hidden"
              />

              <Image
                src={TelegramImg}
                width={64}
                alt="telegram logo"
                className="hidden lg:block"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <Image
                src={DiscordImg}
                width={56}
                alt="discord logo"
                className="lg:hidden"
              />

              <Image
                src={DiscordImg}
                width={64}
                alt="discord logo"
                className="hidden lg:block"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <Image
                src={InstagramImg}
                width={56}
                alt="instagram logo"
                className="lg:hidden"
              />

              <Image
                src={InstagramImg}
                width={64}
                alt="instagram logo"
                className="hidden lg:block"
              />
            </a>
          </li>
        </ul>

        <div className="sm:flex sm:order-1 sm:items-center sm:gap-4 lg:gap-6">
          <div className="hidden sm:flex justify-center items-center w-14 flex-shrink-0 bg-[#69106B] rounded-full aspect-square">
            <Image src={LogoImg} alt="logo" className="mt-2" />
          </div>

          <p className="font-normal text-sm py-3">{`© ${currentYear} Netpulse.social - All rights reserved`}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
