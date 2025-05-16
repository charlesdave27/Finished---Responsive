import HeroGif from "../../assets/roller.gif";
import { useModalContext } from "../../contexts/ModalContext";
import ArrowRight from "../icons/ArrowRight";
import ArrowRightLine from "../icons/ArrowRightLine";

export default function Hero() {
  const { setActiveModal } = useModalContext();

  return (
    <div className="relative isolate overflow-hidden h-screen">
      {/* Background GIF */}
      <img
        src={HeroGif}
        alt="Background animation"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-90"
      />

      {/* Optional overlay to improve contrast */}
      <div className="absolute inset-0 bg-black/30 -z-10" />

      {/* Foreground content - centered */}
      <div className="flex items-center justify-center h-full px-6">
        <div className="text-center mx-auto max-w-3xl">
          <h1 className="text-primary-50 mb-6 text-6xl/none font-semibold tracking-tighter 
            max-xl:mb-4 max-xl:text-5xl max-lg:text-4xl max-sm:text-3xl"
          >
            Roll into Fun at ROLLERSPACE
          </h1>
          <p className="text-primary-100 mb-10 text-xl font-light 
            max-xl:mb-8 max-xl:text-lg max-lg:text-base"
          >
            Glide into a galaxy of fun where every lap is an adventure!
            Whether you're rolling with family, skating into date night, or celebrating something special, the rink is your launchpad.
          </p>
          <button
            className="text-primary-1300 bg-primary-500 border-primary-500 hover:border-primary-50 hover:bg-primary-50 
              transition-properties primary-glow-hover primary-glow group flex cursor-pointer items-center gap-x-3 
              rounded-full border-2 px-8 py-3.5 max-xl:gap-x-2 max-xl:px-6 max-xl:py-3 mx-auto"
            onClick={() => setActiveModal("sign-up")}
          >
            <p className="text-lg max-xl:text-base">Roll with Rewards</p>
            <div className="w-5 max-xl:w-4 max-sm:hidden">
              <ArrowRightLine
                alt="Arrow right line"
                className="stroke-primary-1300 transition-properties -mr-3 inline w-0 opacity-0 ease-in-out group-hover:w-3 group-hover:opacity-100"
                width={2.5}
              />
              <ArrowRight
                alt="Arrow right icon"
                className="stroke-primary-1300 inline w-5 max-xl:w-4"
                width={2}
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
