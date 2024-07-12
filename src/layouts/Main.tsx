import Image from "next/image";
import NetPulseImg from "@/images/netpulse-logo.svg";
import GameImg from "@/images/game-icon.svg";
import GameLargeImg from "@/images/game-icon-large.svg";
import ContactImg from "@/images/contact-icon.svg";
import ContactLargeImg from "@/images/contact-icon-large.svg";
import DollarImg from "@/images/dollar-icon.svg";
import DollarLargeImg from "@/images/dollar-icon-large.svg";
import CharacterImg from "@/images/character.svg";
import CharacterLargeImg from "@/images/character-large.svg";
import CircleImg from "@/images/circle.svg";
import CircleLargeImg from "@/images/circle-large.svg";
import DotsBgImg from "@/images/dots-background.svg";
import RightArrowImg from "@/images/right-arrow-icon.svg";
import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({ subsets: ["latin"], weight: ["600"] });

const Main = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section
        id="home"
        className="dots-background-settings relative w-full flex flex-col justify-center items-center h-[30.25rem] text-center mb-14 pt-20 bg-dots bg-bottom bg-no-repeat md:h-[48rem] lg:h-[56rem]"
      >
        <div className="flex flex-col justify-center items-center w-[284px] aspect-square backdrop-blur-md bg-custom-radial-gradient rounded-full flex-shrink-0 md:w-[435px] lg:w-[525px] lg:mt-10">
          <div className="mb-3 lg:mb-6">
            <Image
              src={NetPulseImg}
              width={182}
              alt="logo"
              className="max-w-full md:hidden"
            />

            <Image
              src={NetPulseImg}
              width={364}
              alt="logo"
              className="max-w-full hidden md:block"
            />
          </div>

          <p className="font-normal mb-3 text-[1.375rem] md:text-4xl lg:text-[2.5rem] sm:mb-6 lg:mb-6">
            A new world based on
          </p>

          <div className="mb-6">
            <div className="bg-custom-linear-gradient py-1 px-4 max-w-min rounded-xl mx-auto lg:rounded-3xl lg:px-6">
              <div className="flex items-center bg-black font-extrabold text-[1.75rem] h-14 rounded-xl w-max py-1 px-6 mx-auto lg:text-[2.5rem] lg:h-[5.5rem] lg:rounded-3xl lg:px-[1.55rem]">
                Blockchain
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="px-2 sm:px-0 sm:min-w-[22.875rem] text-center mb-20 lg:px-6 lg:w-full lg:mb-40 2xl:container"
      >
        <h2 className="font-bold text-[1.75rem] mb-14 lg:text-[2.75rem]">
          How do you work
        </h2>

        <ul className="border-white/10 backdrop-blur-sm bg-white/10 border-2 rounded-3xl lg:flex lg:w-full lg:max-w-[1392px]s lg:mx-auto lg:rounded-[2.5rem]">
          <li className="relative p-8 pt-9 lg:w-1/3 lg:mb-20 lg:mt-[7.5rem] lg:p-0">
            <span
              className={`${rajdhani.className} text-white/10 text-[2.5rem] font-semibold absolute left-5 top-2 lg:-top-[6.6rem] lg:left-8 lg:text-[4rem]`}
            >
              01
            </span>

            <div className="mb-5 lg:mb-10">
              <Image
                src={GameImg}
                width={88}
                alt="logo"
                className="mx-auto lg:hidden"
              />

              <Image
                src={GameLargeImg}
                width={160}
                alt="logo"
                className="mx-auto hidden lg:block"
              />
            </div>

            <div>
              <p className="font-bold text-[1.375rem] mb-2 lg:text-[1.75rem] lg:mb-5">
                Mine coins
              </p>
              <p className="font-normal text-base lg:text-xl">
                Start playing and earn coins
              </p>
            </div>
          </li>

          <li className="relative p-8 pt-9 border-white/10 border-y-[1px] lg:border-y-0 lg:border-x-[1px] lg:w-1/3 lg:mb-20 lg:mt-[7.5rem] lg:p-0">
            <span
              className={`${rajdhani.className} text-white/10 text-[2.5rem] font-semibold absolute left-5 top-2 lg:-top-[6.6rem] lg:left-8 lg:text-[4rem]`}
            >
              02
            </span>

            <div className="mb-5 lg:mb-10">
              <Image
                src={ContactImg}
                width={88}
                alt="logo"
                className="mx-auto lg:hidden"
              />

              <Image
                src={ContactLargeImg}
                width={160}
                alt="logo"
                className="mx-auto hidden lg:block"
              />
            </div>

            <div>
              <p className="font-bold text-[1.375rem] mb-2 lg:text-[1.75rem] lg:mb-5">
                Create a community
              </p>
              <p className="font-normal text-base lg:text-xl">
                Create a community with your friends
              </p>
            </div>
          </li>

          <li className="relative p-8 pt-9 lg:w-1/3 lg:mb-20 lg:mt-[7.5rem] lg:p-0">
            <span
              className={`${rajdhani.className} text-white/10 text-[2.5rem] font-semibold absolute left-5 top-2 lg:-top-[6.6rem] lg:left-8 lg:text-[4rem]`}
            >
              03
            </span>

            <div className="mb-5 lg:mb-10">
              <Image
                src={DollarImg}
                width={88}
                alt="logo"
                className="mx-auto lg:hidden"
              />

              <Image
                src={DollarLargeImg}
                width={160}
                alt="logo"
                className="mx-auto hidden lg:block"
              />
            </div>

            <div>
              <p className="font-bold text-[1.375rem] mb-2 lg:text-[1.75rem] lg:mb-5">
                Earn income
              </p>
              <p className="font-normal text-base lg:text-xl">
                Make money in this community
              </p>
            </div>
          </li>
        </ul>
      </section>

      <section id="benefits" className="text-center">
        <h2 className="font-bold text-[1.75rem] mb-6 lg:font-extrabold lg:text-[2.75rem] lg:mb-10">
          What is our benefit?
        </h2>

        <div className="mb-6 lg:mb-10">
          <div className="bg-custom-linear-gradient py-1 px-4 max-w-min rounded-xl mx-auto lg:rounded-3xl lg:px-6">
            <div className="flex items-center bg-black font-extrabold text-[1.75rem] h-14 rounded-xl w-max py-1 px-10 mx-auto lg:text-[2.5rem] lg:h-[5.5rem] lg:rounded-3xl lg:px-[2.9rem]">
              Win-Win
            </div>
          </div>
        </div>

        <p className="font-normal text-base max-w-[22rem] mx-auto mb-12 lg:text-xl lg:max-w-[60rem] lg:mb-[11.5rem]">
          When you play, create a group, you can have your own token, this way
          both you and we become stronger, this is a win-win game.
        </p>

        <div className="mb-12">
          <div>
            <Image
              src={CharacterImg}
              alt="girl character"
              className="max-w-full md:hidden"
            />

            <Image
              src={CharacterLargeImg}
              alt="girl character"
              className="max-w-full hidden md:block mx-auto"
            />
          </div>

          <div className="lg:mb-32">
            <Image
              src={CircleImg}
              alt="logos align as a circle"
              className="max-w-full md:hidden"
            />

            <Image
              src={CircleLargeImg}
              alt="logos align as a circle"
              className="max-w-full hidden md:block mx-auto"
            />
          </div>
        </div>
      </section>

      <section id="contact-us" className="text-center">
        <div>
          <p className="max-w-72 text-[1.375rem] font-semibold mx-auto text-center mb-5 lg:text-[2rem] lg:max-w-[44rem] lg:mb-10">
            To start, just connect your wallet to our token
          </p>

          <button className="flex justify-center items-center gap-2 bg-custom-green text-black text-2xl font-bold px-16 py-6 rounded-full mx-auto lg:text-4xl lg:py-9 lg:gap-3">
            <span>Connect wallet</span>

            <div>
              <Image
                width={27}
                src={RightArrowImg}
                alt="right-arrow"
                className="lg:hidden"
              />

              <Image
                width={32}
                src={RightArrowImg}
                alt="right-arrow"
                className="hidden lg:block"
              />
            </div>
          </button>
        </div>
      </section>
    </main>
  );
};

export default Main;
