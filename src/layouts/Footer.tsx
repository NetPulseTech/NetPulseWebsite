import Image from "next/image";
import LogoImg from "@/images/fixed-header-logo.svg";
import TelegramImg from "@/images/telegram-icon.svg";
import DiscordImg from "@/images/discord-icon.svg";
import InstagramImg from "@/images/instagram-icon.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container text-center mt-8 mx-auto sm:p-5">
      <div className="sm:flex sm:justify-between sm:items-center sm:gap-5">
        <ul className="flex justify-center items-center gap-4 py-7 border-y-[1px] border-white/10 sm:order-2 sm:border-0">
          <li>
            <a href="#">
              <Image src={TelegramImg} width={56} alt="telegram logo" />
            </a>
          </li>
          <li>
            <a href="#">
              <Image src={DiscordImg} width={56} alt="discord logo" />
            </a>
          </li>
          <li>
            <a href="#">
              <Image src={InstagramImg} width={56} alt="instagram logo" />
            </a>
          </li>
        </ul>

        <div className="sm:flex sm:order-1 sm:items-center sm: gap-4">
          <div className="hidden sm:block">
            <Image src={LogoImg} width={60} alt="logo" />
          </div>

          <p className="font-normal text-sm py-[0.875rem]">{`© ${currentYear} Netpulse.com All rights reserved`}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
