import Image from "next/image";
import NetPulseImg from "@/images/netpulse-logo.svg";
import GameImg from "@/images/game-icon.svg";
import UsersImg from "@/images/users-icon.svg";
import DollarImg from "@/images/dollar-icon.svg";
import CharacterImg from "@/images/character.svg";
import CharacterLargeImg from "@/images/character-large.svg";
import CircleImg from "@/images/circle.svg";
import CircleLargeImg from "@/images/circle-large.svg";
import StarsBgImg from "@/images/stars-background.svg";
import RightArrowImg from "@/images/right-arrow-icon.svg";
import ThousandImg from "@/images/1000.svg";
import ProgressBar from "@/components/ProgressBar";

const Main = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section
        id="home"
        className="dots-background-settings relative w-full flex flex-col justify-center items-center h-[30.25rem] text-center mb-14 pt-20 bg-dotss bg-no-repeat bg-bottom md:h-[48rem] lg:h-[56rem]"
      >
        <div className="hidden md:block absolute md:top-[-100px] lg:top-[-180px] inset-x-0 mx-auto md:bg-custom-pink/60 lg:bg-custom-pink/70 md:blur-[200px] lg:blur-[300px] aspect-square md:h-[250px] lg:h-[360px]"></div>

        <div className="flex flex-col px-6 bg-transparent justify-center items-center w-full rounded-full flex-shrink-0 lg:mt-10">
          <div className="lg:flex items-center gap-6">
            <p className="font-extrabold mb-6 text-[2rem] md:text-4xl lg:text-[3.125rem] sm:mb-6 lg:mb-6 lg:flex-shrink-0">
              New world in
            </p>

            <div className="mb-6">
              <div className="bg-custom-linear-gradient py-1 px-4 max-w-min rounded-xl mx-auto lg:rounded-3xl lg:px-6">
                <div className="flex items-center bg-black font-extrabold text-[1.75rem] h-14 rounded-xl w-max py-1 px-6 mx-auto lg:text-[2.5rem] lg:h-[5.5rem] lg:rounded-3xl lg:px-[1.55rem]">
                  Blockchain
                </div>
              </div>
            </div>
          </div>

          <p className="text-xl md:text-3xl lg:text-[2.375rem] lg:leading-[3.75rem] max-w-[950px]">
            Play, create a community, have your own token, earn different income
            models
          </p>
        </div>
      </section>

      <section
        id="services"
        className="px-6 sm:min-w-[22.875rem] mb-10 lg:px-6 lg:w-full lg:mb-[7.5rem] 2xl:container"
      >
        <h2 className="text-center font-bold text-[2rem] mb-10 lg:text-[2.75rem]">
          How do you work
        </h2>

        <ul className="relative border-white/10 backdrop-blur-sm bg-white/10 px-6 border-2 rounded-3xl lg:w-full lg:max-w-[1392px] lg:mx-auto lg:rounded-6 md:px-12 md:py-5 lg:px-24 lg:py-10">
          <div className="absolute inset-x-0 top-1/2 mx-auto -translate-y-1/2 -z-10 bg-custom-pink/70 blur-[240px] aspect-square h-[300px]"></div>

          <li className="py-6 gap-10 items-center md:flex lg:gap-20 md:h-[1/3] lg:py-11">
            <div className="text-white/10 text-6xl font-semibold mb-6 ms-3 flex-shrink-0 lg:text-[5rem] md:m-0 md:w-[102px]">
              01
            </div>

            <div>
              <p className="font-bold text-xl mb-3 lg:text-[1.75rem] lg:mb-5">
                To begin: Connect wallet
              </p>

              <p className="font-normal text-base lg:text-xl">
                First, you have to connect your wallet with us so that you can
                collect tokens later during the airdrop
              </p>
            </div>
          </li>

          <li className="py-6 gap-10 items-center md:flex lg:gap-20 md:h-[1/3] lg:py-11 border-white/10 border-y-[1px]">
            <div className="text-white/10 text-6xl font-semibold mb-6 ms-3 flex-shrink-0 lg:text-[5rem] md:m-0 md:w-[102px]">
              02
            </div>

            <div>
              <p className="font-bold text-xl mb-3 lg:text-[1.75rem] lg:mb-5">
                Getting an airdrop
              </p>

              <p className="font-normal text-base lg:text-xl">
                To get airdrops, after connecting your Volt, you need to start
                collecting coins in Foxy Miner game, so that later you will
                receive airdrops in exchange for coins.
              </p>
            </div>
          </li>

          <li className="py-6 gap-10 items-center md:flex lg:gap-20 md:h-[1/3] lg:py-11">
            <div className="text-white/10 text-6xl font-semibold mb-6 ms-3 flex-shrink-0 lg:text-[5rem] md:m-0 md:w-[102px]">
              03
            </div>

            <div>
              <p className="font-bold text-xl mb-3 lg:text-[1.75rem] lg:mb-5">
                Airdrop to income
              </p>

              <p className="font-normal text-base lg:text-xl">
                During a certain period of time, after starting the game and
                after receiving the airdrop, our token will be listed and you
                can change the airdrops.
              </p>
            </div>
          </li>
        </ul>
      </section>

      <section
        id="services"
        className="w-full text-center px-6 pb-10 lg:pb-[7.5rem]"
      >
        <h2 className="font-bold text-[2rem] mb-10 lg:text-[2.75rem]">
          Progress
        </h2>

        <div className="block lg:hidden w-full overflow-x-scroll pb-6">
          <ul className="flex gap-6" style={{ width: "120%" }}>
            <li className="w-1/3 min-w-[260px] flex-shrink-0 py-10 px-6 border-[1px] border-[#96EA63] rounded-3xl">
              <div className="mb-6">
                <Image
                  src={UsersImg}
                  alt="users"
                  width={56}
                  className="mx-auto"
                />
              </div>

              <p className="font-semibold text-xl min-w-max text-[#96EA63]">
                Join the waiting list
              </p>
            </li>

            <li className="w-1/3 min-w-[260px] flex-shrink-0 py-10 px-6 border-[1px] border-white/10 rounded-3xl">
              <div className="mb-6">
                <Image
                  src={GameImg}
                  alt="game"
                  width={56}
                  className="mx-auto"
                />
              </div>

              <p className="font-semibold text-xl min-w-max">Start the game</p>
            </li>

            <li className="w-1/3 min-w-[260px] flex-shrink-0 py-10 px-6 border-[1px] border-white/10 rounded-3xl">
              <div className="mb-6">
                <Image
                  src={DollarImg}
                  alt="dollar"
                  width={56}
                  className="mx-auto"
                />
              </div>

              <p className="font-semibold text-xl min-w-max">Airdrop start</p>
            </li>
          </ul>
        </div>

        <div className="hidden lg:block">
          <ul className="flex">
            <li className="w-1/3 flex flex-col gap-10">
              <div>
                <Image
                  src={UsersImg}
                  alt="users"
                  width={56}
                  className="mx-auto"
                />
              </div>

              <ProgressBar isLeftDone={true} isRightDone={false} />

              <p className="font-semibold text-2xl">Join the waiting list</p>
            </li>

            <li className="w-1/3 flex flex-col gap-10">
              <div>
                <Image
                  src={GameImg}
                  alt="game"
                  width={56}
                  className="mx-auto"
                />
              </div>

              <ProgressBar isLeftDone={false} isRightDone={false} />

              <p className="font-semibold text-2xl">Start the game</p>
            </li>

            <li className="w-1/3 flex flex-col gap-10">
              <div>
                <Image
                  src={DollarImg}
                  alt="dollar"
                  width={56}
                  className="mx-auto"
                />
              </div>

              <ProgressBar isLeftDone={false} isRightDone={false} />

              <p className="font-semibold text-2xl">Airdrop start</p>
            </li>
          </ul>
        </div>
      </section>

      <section
        id="benefits"
        className="relative w-full text-center border-t-[1px] border-white/5 pt-10"
      >
        <div className="hidden lg:block absolute top-[18%] inset-x-0 mx-auto">
          <Image
            src={StarsBgImg}
            alt="stars and planets background"
            className="mx-auto"
          />
        </div>

        <h2 className="font-extrabold text-[2rem] mb-6 lg:font-extrabold lg:text-[2.75rem] lg:mb-10">
          What is our benefit?
        </h2>

        <div className="mb-10">
          <div className="bg-custom-linear-gradient py-1 px-4 max-w-min rounded-xl mx-auto lg:rounded-3xl lg:px-6">
            <div className="flex items-center bg-black font-extrabold text-[1.75rem] h-14 rounded-xl w-max py-1 px-4 mx-auto lg:text-[2.5rem] lg:h-[5.5rem] lg:rounded-3xl lg:px-[2.9rem]">
              Win-Win
            </div>
          </div>
        </div>

        <p className="font-normal text-xl max-w-[22rem] mx-auto  lg:text-xl lg:max-w-[60rem]">
          We give you the power to build different communities, the stronger you
          build a community, the stronger we become, to succeed in this work, we
          give you all the facilities
        </p>

        <div className="mb-12 pt-12 lg:pt-20 overflow-hidden">
          <div className="relative border-b-2 border-white/10">
            <div className="absolute inset-x-0 top-[90%] sm:top-2/3 mx-auto -z-10 bg-custom-pink/60 blur-[150px] md:blur-[180px] md:bg-custom-pink/70 aspect-square h-[180px] md:h-[250px] lg:h-[350px] lg:blur-[210px]"></div>

            <Image
              src={CharacterImg}
              alt="girl character"
              className="max-w-full md:hidden mx-auto scale-[.995]"
            />

            <Image
              src={CharacterLargeImg}
              alt="girl character"
              className="max-w-full hidden md:block mx-auto"
            />
          </div>

          <div className="lg:pb-32 bg-custom-dark">
            <Image
              src={CircleImg}
              alt="logos align as a circle"
              className="max-w-full md:hidden mx-auto"
            />

            <Image
              src={CircleLargeImg}
              alt="logos align as a circle"
              className="max-w-full hidden md:block mx-auto"
            />
          </div>
        </div>
      </section>

      <section id="contact-us" className="text-center bg-custom-dark">
        <div>
          <p className="font-normal text-[1.375rem] mb-6 md:text-3xl lg:text-[2.75rem]">
            Connect your wallet and get
          </p>

          <div className="flex flex-col items-center gap-6 mb-6 lg:flex-row lg:gap-3">
            <div>
              <Image
                width={214}
                src={ThousandImg}
                alt="right-arrow"
                className="lg:hidden"
              />

              <Image
                width={164}
                src={ThousandImg}
                alt="right-arrow"
                className="hidden lg:block mt-7"
              />
            </div>

            <p className="font-semibold text-[2.125rem] lg:text-[4rem] lg:font-normal">
              Bonus Netpulse coin
            </p>
          </div>

          <button className="flex justify-center items-center gap-2 bg-custom-green text-black text-2xl font-bold px-16 py-5 rounded-full mx-auto lg:text-4xl lg:py-9 lg:gap-3">
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
