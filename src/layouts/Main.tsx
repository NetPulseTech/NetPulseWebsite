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
      <section className="relative w-full flex flex-col justify-center items-center h-[30rem] text-center mb-14">
        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-2 -z-10">
          <Image src={DotsBgImg} width={5000} alt="background" className="" />
        </div>

        <div className="flex flex-col justify-center items-center backdrop-blur-sm bg-custom-radial-gradient rounded-full md:w-[40%] aspect-square flex-shrink-0">
          <div className="mb-3">
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

          <p className="font-normal text-[1.375rem] md:text-[2.5rem] mb-6">
            A new world based on
          </p>

          <div className="mb-6">
            <div className="bg-custom-linear-gradient py-1 px-4 max-w-min rounded-xl mx-auto">
              <div className="flex items-center bg-black font-extrabold text-[1.75rem] h-14 rounded-xl w-max py-1 px-6 mx-auto">
                Blockchain
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-3 text-center mb-20">
        <h2 className="font-bold text-[1.75rem] mb-14">How do you work</h2>

        <ul className="border-white/10 backdrop-blur-sm bg-white/10 border-2 rounded-3xl  sm:flex md:rounded-2xl">
          <li className="relative p-8 pt-9 sm:my-10 sm:py-0 md:px-8">
            <span
              className={`${rajdhani.className} text-white/10 text-[2.5rem] font-semibold absolute left-5 top-2 sm:-top-8`}
            >
              01
            </span>

            <div className="mb-5">
              <Image
                src={GameImg}
                width={88}
                alt="logo"
                className="mx-auto sm:hidden"
              />

              <Image
                src={GameLargeImg}
                width={45}
                alt="logo"
                className="mx-auto hidden sm:block"
              />
            </div>

            <div>
              <p className="font-bold text-[1.375rem] mb-2">Mine coins</p>
              <p className="font-normal text-base">
                Start playing and earn coins
              </p>
            </div>
          </li>

          <li className="relative p-8 pt-9 border-gray-500 border-y-[1px] sm:border-y-0 sm:border-x-[1px] sm:my-10 sm:py-0 md:px-8">
            <span
              className={`${rajdhani.className} text-white/10 text-[2.5rem] font-semibold absolute left-5 top-2 sm:-top-8`}
            >
              02
            </span>

            <div className="mb-5">
              <Image
                src={ContactImg}
                width={88}
                alt="logo"
                className="mx-auto sm:hidden"
              />

              <Image
                src={ContactLargeImg}
                width={45}
                alt="logo"
                className="mx-auto hidden sm:block"
              />
            </div>

            <div>
              <p className="font-bold text-[1.375rem] mb-2">
                Create a community
              </p>
              <p className="font-normal text-base">
                Create a community with your friends
              </p>
            </div>
          </li>

          <li className="relative p-8 pt-9 sm:my-10 sm:py-0 md:px-8">
            <span
              className={`${rajdhani.className} text-white/10 text-[2.5rem] font-semibold absolute left-5 top-2 sm:-top-8`}
            >
              03
            </span>

            <div className="mb-5">
              <Image
                src={DollarImg}
                width={88}
                alt="logo"
                className="mx-auto sm:hidden"
              />

              <Image
                src={DollarLargeImg}
                width={45}
                alt="logo"
                className="mx-auto hidden sm:block"
              />
            </div>

            <div>
              <p className="font-bold text-[1.375rem] mb-2">Earn income</p>
              <p className="font-normal text-base">
                Make money in this community
              </p>
            </div>
          </li>
        </ul>
      </section>

      <section className="text-center">
        <h2 className="font-bold text-[1.75rem] mb-6">What is our benefit?</h2>

        <div className="mb-6">
          <div className="bg-custom-linear-gradient py-1 px-4 max-w-min rounded-xl mx-auto">
            <div className="flex items-center bg-black font-extrabold text-[1.75rem] h-14 rounded-xl w-max py-1 px-10 mx-auto">
              Win-Win
            </div>
          </div>
        </div>

        <p className="font-normal text-base max-w-[22rem] mx-auto mb-12">
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

          <div>
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

        <div>
          <p className="max-w-72 text-[1.375rem] font-semibold mx-auto text-center mb-5">
            To start, just connect your wallet to our token
          </p>

          <button className="flex justify-center items-center gap-3 bg-custom-green text-black text-2xl font-bold px-16 py-6 rounded-full mx-auto">
            <span>Connect wallet</span>

            <div>
              <Image width={27} src={RightArrowImg} alt="right-arrow" />
            </div>
          </button>
        </div>
      </section>
    </main>
  );
};

export default Main;
