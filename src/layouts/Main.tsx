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
import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({ subsets: ["latin"], weight: ["600"] });

const Main = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="relative w-full flex flex-col justify-center items-center h-[60vh] text-center mb-14">
        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-2 -z-10">
          <Image src={DotsBgImg} width={5000} alt="background" className="" />
        </div>

        <div className="flex flex-col justify-center items-center bg-black rounded-full w-[30%] aspect-square flex-shrink-0">
          <div>
            <Image
              src={NetPulseImg}
              width={350}
              alt="logo"
              className="max-w-full"
            />
          </div>

          <p>A new world based on</p>

          <div className="bg-purple-600 py-[2px] px-2 max-w-min rounded-md">
            <div className="bg-black font-bold rounded-md max-w-min py-1 px-4 mx-auto">
              Blockchain
            </div>
          </div>
        </div>
      </section>

      <section className="text-center mb-14">
        <h2 className="font-bold text-2xl mb-14">How do you work</h2>

        <ul className="border-gray-500 border-[1px] rounded-xl mx-3 sm:flex md:rounded-2xl">
          <li className="relative p-5 sm:my-10 sm:py-0 md:px-8">
            <span
              className={`${rajdhani.className} text-2xl absolute left-4 top-3 sm:-top-8`}
            >
              01
            </span>

            <div className="mb-3">
              <Image
                src={GameImg}
                width={45}
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
              <p className="font-bold mb-1">Mine coins</p>
              <p className="text-xs">Start playing and earn coins</p>
            </div>
          </li>

          <li className="relative p-5 border-gray-500 border-y-[1px] sm:border-y-0 sm:border-x-[1px] sm:my-10 sm:py-0 md:px-8">
            <span
              className={`${rajdhani.className} text-2xl absolute left-4 top-3 sm:-top-8`}
            >
              02
            </span>

            <div className="mb-3">
              <Image
                src={ContactImg}
                width={45}
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
              <p className="font-bold mb-1">Create a community</p>
              <p className="text-xs">Create a community with your friends</p>
            </div>
          </li>

          <li className="relative p-5 sm:my-10 sm:py-0 md:px-8">
            <span
              className={`${rajdhani.className} text-2xl absolute left-4 top-3 sm:-top-8`}
            >
              03
            </span>

            <div className="mb-3">
              <Image
                src={DollarImg}
                width={45}
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
              <p className="font-bold mb-1">Earn income</p>
              <p className="text-xs">Make money in this community</p>
            </div>
          </li>
        </ul>
      </section>

      <section className="text-center">
        <h2 className="font-bold text-2xl mb-4">What is our benefit?</h2>

        <div className="mb-4">
          <div className="bg-purple-600 py-[2px] px-2 max-w-min rounded-md mx-auto">
            <div className="bg-black font-bold rounded-md w-max py-1 px-4 mx-auto">
              Win-Win
            </div>
          </div>
        </div>

        <p className="text-xs max-w-64 mx-auto mb-12">
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
          <p className="max-w-64 text-xl font-semibold mx-auto text-center mb-4">
            To start, just connect your wallet to our token
          </p>

          <button className="bg-green-600 text-black font-bold px-6 py-2 rounded-full">
            Connect wallet
          </button>
        </div>
      </section>
    </main>
  );
};

export default Main;
