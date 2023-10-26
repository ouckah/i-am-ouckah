'use client'
import { useState } from "react"
import { Tiktok, Linkedin, Youtube, Instagram, Discord } from "react-bootstrap-icons";
import TikTok from "./components/tiktok";
import SocialIcon from "./components/socialicon";

export default function Home() {

  const [ouckah, setOuckah] = useState(true);
  const selected = `text-${ouckah ? "white" : "black"} text-5xl font-bold select-none`
  const unselected = selected + " opacity-50";

  const [primary, secondary] = getColorStyle();

  const Divider = () => {
    return (
      <div className={`flex justify-center items-center w-full h-2 ${ouckah ? (primary) : (secondary)}`}>
        <div className={`w-5/6 h-full ${ouckah ? (secondary) : (primary)}`}/>
      </div>
    )
  }

  return (
    <div className="whitespace-nowrap overflow-auto no-scrollbar">
      <main className={`flex h-screen flex-col items-center justify-between ${ouckah ? (primary) : (secondary)} p-24`}>
        <div className="flex flex-row justify-center items-center w-full h-screen gap-5">
          <h1 className={`text-${ouckah ? "white" : "black"} text-5xl font-bold uppercase select-none`}>I am</h1>
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-black text-5xl select-none">{ouckah ? (".") : ("")}</h1>

            <button 
              className={ouckah ? (selected) : (unselected)}
              onClick={() => setOuckah(true)}
            >
              ouckah
            </button>

            <button 
              className={ouckah ? (unselected) : (selected)}
              onClick={() => setOuckah(false)}
            >
              aidan ouckama
            </button>

            <h1 className="text-white text-5xl select-none">{ouckah ? ("") : (".")}</h1>
          </div>
        </div>
      </main>
      
      <Divider />

      {
        ouckah ? (
          <>
            <div className="flex flex-col justify-center items-center w-full h-screen bg-black">
              <div className="flex flex-row justify-evenly items-center w-full h-1/2 bg-white bg-opacity-40 px-24 py-16">
                <img src="/selfie.jpg" className="w-1/4 h-[200%] object-cover rounded-3xl shadow-xl"/>
                <div className="flex flex-col justify-center items-start w-1/2 h-full gap-10"> 
                  <div>
                    <h1 className="text-6xl text-black font-bold">my name is</h1>
                    <div className="flex flex-row justify-start items-center w-full">
                      <h1 className="text-6xl text-white font-bold animate-bounce animation-delay-0">o</h1>
                      <h1 className="text-6xl text-white font-bold animate-bounce animation-delay-100">u</h1>
                      <h1 className="text-6xl text-white font-bold animate-bounce animation-delay-200">c</h1>
                      <h1 className="text-6xl text-white font-bold animate-bounce animation-delay-300">k</h1>
                      <h1 className="text-6xl text-white font-bold animate-bounce animation-delay-400">a</h1>
                      <h1 className="text-6xl text-white font-bold animate-bounce animation-delay-500">h</h1>
                    </div>
                  </div>

                  <p className="text-3xl text-white font-bold opacity-80">
                    and im a <span className="text-yellow-400">computer science content creator</span> <br />
                    who loves sharing my experience as a <br />
                    <span className="text-yellow-400">student</span>,
                    <span className="text-yellow-400"> intern</span>, and
                    <span className="text-yellow-400"> software engineer</span>
                  </p>
                </div>
              </div>
            </div>

            <Divider />

            <div className="flex flex-col justify-center items-center w-full h-screen bg-black p-8 gap-5">
              <h1 className="text-white text-4xl font-thin uppercase">check out my content</h1>
              <div className="flex flex-row justify-center items-center w-full h-full gap-3">
                <TikTok id={1} url="https://www.tiktok.com/@ouckah/video/7220422135536225578" />
                <TikTok id={2} url="https://www.tiktok.com/@ouckah/video/7279096539253919018" />
                <TikTok id={3} url="https://www.tiktok.com/@ouckah/video/7240867467327802667" />
                <TikTok id={4} url="https://www.tiktok.com/@ouckah/video/7217269265718644014" />
              </div>
            </div>

            <Divider />

            <div className="flex flex-col justify-center items-center w-full h-36 bg-black p-8 gap-5">
              <h1 className="text-white text-4xl font-thin uppercase">socials</h1>
              <div className="flex flex-row justify-evenly items-center w-full h-full gap-3">
                <SocialIcon url="https://tiktok.com/@ouckah" icon={<Tiktok color="white" size={36} />} />
                <SocialIcon url="https://instagram.com/ouckahs" icon={<Instagram color="white" size={36} />} />
                <SocialIcon url="https://discord.gg/tAeQ2v9zS6" icon={<Discord color="white" size={36} />} />
                <SocialIcon url="https://www.linkedin.com/in/aidan-ouckama/" icon={<Linkedin color="white" size={36} />} />
                <SocialIcon url="https://www.youtube.com/ouckah" icon={<Youtube color="white" size={36} />} />
              </div>            
            </div>

            <Divider />

            <div className="flex flex-col justify-center items-center w-full h-screen bg-black p-8 gap-5">
              <h1 className="text-white text-4xl font-thin uppercase">metrics</h1>
              <h1 className="text-white text-xl font-thin uppercase">2023</h1>
              <div className="grid grid-rows-2 grid-cols-2 justify-center items-center w-full h-full gap-3">
                <div className="flex flex-col justify-center items-center w-full h-full">
                  <h1 className="text-white font-light tracking-widest uppercase">followers</h1>
                  <p className="text-white font-bold text-4xl cursor-pointer transition-all duration-300 hover:text-6xl">18,600+</p>
                </div>

                <div className="flex flex-col justify-center items-center w-full h-full">
                  <h1 className="text-white font-light tracking-widest uppercase">likes</h1>
                  <p className="text-white font-bold text-4xl cursor-pointer transition-all duration-300 hover:text-6xl">1,200,000+</p>
                </div>

                <div className="flex flex-col justify-center items-center w-full h-full">
                  <h1 className="text-white font-light tracking-widest uppercase">monthly views</h1>
                  <p className="text-white font-bold text-4xl cursor-pointer transition-all duration-300 hover:text-6xl">500,000+</p>
                </div>

                <div className="flex flex-col justify-center items-center w-full h-full">
                  <h1 className="text-white font-light tracking-widest uppercase">montly unique viewers</h1>
                  <p className="text-white font-bold text-4xl cursor-pointer transition-all duration-300 hover:text-6xl">300,000+</p>
                </div>
              </div>
            </div>

            <Divider />

            <div className="flex flex-col justify-center items-end w-full h-12 bg-black p-12">
              <h1 className="text-white font-semibold">@ouckah</h1>
            </div>
          </>
        ) : (
          <div>
            
          </div>
        )
      }

    </div>
  )
}

/**
 * get the tailwind css color for a given status.
 *
 * NOTE: doing this to ensure tailwind knows at build time css classes.
 *
 * @returns tailwind css for background color
 */
function getColorStyle() {
  return ["bg-black", "bg-white"];
}
