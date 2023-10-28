'use client'
import { useState } from "react"
import { Tiktok, Linkedin, Youtube, Instagram, Discord, Github } from "react-bootstrap-icons";
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

            <h1 className="text-gray-100 text-5xl select-none">{ouckah ? ("") : (".")}</h1>
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
          <>

            <div className="flex flex-col justify-center items-center w-full h-screen bg-gray-100">
              <div className="flex flex-row justify-evenly items-center w-full h-1/2 bg-black bg-opacity-40 px-24 py-16">
                <img src="/pfp.png" className="w-1/5 h-full object-cover rounded-full shadow-xl"/>
                <div className="flex flex-col justify-center items-start w-1/2 h-full gap-10"> 
                  <div>
                    <h1 className="text-6xl text-gray-100 font-bold">my name is</h1>
                    <div className="flex flex-row justify-start items-center w-full">
                      <h1 className="text-6xl text-black font-bold animate-pulse animation-delay-0">a</h1>
                      <h1 className="text-6xl text-black font-bold animate-pulse animation-delay-100">i</h1>
                      <h1 className="text-6xl text-black font-bold animate-pulse animation-delay-200">d</h1>
                      <h1 className="text-6xl text-black font-bold animate-pulse animation-delay-300">a</h1>
                      <h1 className="text-6xl text-black font-bold animate-pulse animation-delay-400">n</h1>
                    </div>
                  </div>

                  <p className="text-3xl text-black font-bold opacity-80">
                    and im a <span className="text-yellow-400">computer science student</span> <br />
                    with a passion for <span className="text-yellow-400"> software engineering</span> <br />
                    and <span className="text-yellow-400"> machine learning</span>
                  </p>
                </div>
              </div>
            </div>

            <Divider /> 

            <div className="flex flex-col justify-center items-center w-full h-screen bg-gray-100 p-8 gap-5">
              <h1 className="text-black text-4xl font-extralight uppercase">education</h1>

              <div className="group flex flex-row justify-center items-center w-full h-1/4">
                <img className="h-full rounded-full transition-all duration-500 group-hover:rounded-l-2xl group-hover:rounded-r-none" src="/stevens.jpg"/>
                <div className="flex flex-row justify-center items-center w-0 h-full bg-white opacity-0 rounded-r-2xl drop-shadow-lg transition-all duration-700 group-hover:w-3/4 group-hover:p-12 group-hover:opacity-100 overflow-hidden">
                  <div className="flex flex-col justify-start items-center w-1/2 h-full">
                    <h1 className="text-black font-bold text-2xl">Stevens Institute of Technology</h1>
                    <h1 className="text-black font-light text-xl">Bachelors in Computer Science, Minor in Mathematics</h1>
                    <h1>_</h1>
                    <h1 className="text-black font-light text-xl"><span className="font-normal">Awards:</span> Pinnacle Scholar 🞄 Dean’s List: Fall 2022, Spring 2023</h1>
                    <h1 className="text-black font-light text-xl"><span className="font-normal">Clubs:</span> Ultimate Frisbee 🞄 Blueprint 🞄 Chess 🞄 Poker</h1>
                  </div>
                </div>
              </div>

              <div className="w-0.5 h-12 bg-black"/>

              <div className="group flex flex-row justify-center items-center w-full h-1/4">
                <div className="flex flex-row justify-center items-center w-0 h-full bg-white opacity-0 rounded-l-2xl drop-shadow-lg transition-all duration-700 group-hover:w-3/4 group-hover:p-12 group-hover:opacity-100 overflow-hidden">
                  <div className="flex flex-col justify-start items-center w-1/2 h-full">
                    <h1 className="text-black font-bold text-2xl">Montclair State University</h1>
                    <h1 className="text-black font-light text-xl">Co-op Program</h1>
                    <h1>_</h1>
                    <h1 className="text-black font-light text-xl"><span className="font-normal">Classes:</span> Calculus I, II 🞄 Introduction to Java Programming</h1>
                    <h1 className="text-black font-light text-xl"><span className="font-normal">Clubs:</span> None. I was scared.</h1>
                  </div>
                </div>
                <img className="h-full rounded-full transition-all duration-500 group-hover:rounded-r-2xl group-hover:rounded-l-none" src="/msu.png"/>
              </div>

            </div>

            <Divider /> 

            <div className="flex flex-col justify-center items-center w-full h-screen bg-gray-100 p-8 gap-5">
              <h1 className="text-black text-4xl font-extralight uppercase">experience</h1>

              <div className="group flex flex-row justify-center items-center w-full h-1/6">
                <img className="h-full rounded-full transition-all duration-500 group-hover:rounded-l-2xl group-hover:rounded-r-none" src="/datadog-logo.png"/>
                <div className="flex flex-row justify-center items-center w-0 h-full bg-white opacity-0 rounded-r-2xl drop-shadow-lg transition-all duration-700 group-hover:w-3/4 group-hover:p-4 group-hover:opacity-100 overflow-hidden">
                  <div className="flex flex-col justify-start items-center w-1/2 h-full">
                    <h1 className="text-black font-bold text-2xl">Datadog</h1>
                    <h1 className="text-black font-light text-xl">Incoming Software Engineer Intern</h1>
                    <h1 className="text-black font-light italic text-xl">September 2024 - December 2024</h1>
                    <h1 className="text-black font-light italic text-xl">New York, NY</h1>
                  </div>
                </div>
              </div>

              <div className="w-0.5 h-12 bg-black"/>

              <div className="group flex flex-row justify-center items-center w-full h-1/6">
                <div className="flex flex-row justify-center items-center w-0 h-full bg-white opacity-0 rounded-l-2xl drop-shadow-lg transition-all duration-700 group-hover:w-3/4 group-hover:p-4 group-hover:opacity-100 overflow-hidden">
                  <div className="flex flex-col justify-start items-center w-1/2 h-full">
                    <h1 className="text-black font-bold text-2xl">DoorDash</h1>
                    <h1 className="text-black font-light text-xl">Incoming Software Engineer Intern</h1>
                    <h1 className="text-black font-light italic text-xl">May 2024 - August 2024</h1>
                    <h1 className="text-black font-light italic text-xl">New York, NY</h1>
                  </div>
                </div>
                <img className="h-full rounded-full transition-all duration-500 group-hover:rounded-r-2xl group-hover:rounded-l-none" src="/doordash-logo.png"/>
              </div>

              <div className="w-0.5 h-12 bg-black"/>

              <div className="group flex flex-row justify-center items-center w-full h-1/6">
                <img className="h-full rounded-full transition-all duration-500 group-hover:rounded-l-2xl group-hover:rounded-r-none" src="/stevens.jpg"/>
                <div className="flex flex-row justify-center items-center w-0 h-full bg-white opacity-0 rounded-r-2xl drop-shadow-lg transition-all duration-700 group-hover:w-3/4 group-hover:p-4 group-hover:opacity-100 overflow-hidden">
                  <div className="flex flex-col justify-start items-center w-1/2 h-full">
                    <h1 className="text-black font-bold text-2xl">Stevens Institute of Technology</h1>
                    <h1 className="text-black font-light text-xl">Undergraduate Researcher</h1>
                    <h1 className="text-black font-light italic text-xl">May 2023 - September 2023</h1>
                    <h1 className="text-black font-light italic text-xl">Hoboken, NJ</h1>
                  </div>
                </div>
              </div>

              <div className="w-0.5 h-12 bg-black"/>

              <div className="group flex flex-row justify-center items-center w-full h-1/6">
                <div className="flex flex-row justify-center items-center w-0 h-full bg-white opacity-0 rounded-l-2xl drop-shadow-lg transition-all duration-700 group-hover:w-3/4 group-hover:p-4 group-hover:opacity-100 overflow-hidden">
                  <div className="flex flex-col justify-start items-center w-1/2 h-full">
                    <h1 className="text-black font-bold text-2xl">Stanford University</h1>
                    <h1 className="text-black font-light text-xl">Student Instructor</h1>
                    <h1 className="text-black font-light italic text-xl">April 2023 - June 2023</h1>
                    <h1 className="text-black font-light italic text-xl">Stanford, CA</h1>
                  </div>
                </div>
                <img className="h-full rounded-full transition-all duration-500 group-hover:rounded-r-2xl group-hover:rounded-l-none" src="/stanford.jpg"/>
              </div>

            </div>

            <Divider />

            <div className="flex flex-col justify-center items-center w-full h-36 bg-gray-100 p-8 gap-5">
              <h1 className="text-black text-4xl font-extralight uppercase">socials</h1>
              <div className="flex flex-row justify-evenly items-center w-full h-full gap-3">
                <SocialIcon url="https://tiktok.com/@ouckah" icon={<Tiktok color="black" size={36} />} />
                <SocialIcon url="https://www.linkedin.com/in/aidan-ouckama/" icon={<Linkedin color="black" size={36} />} />
                <SocialIcon url="https://www.github.com/ouckah" icon={<Github color="black" size={36} />} />
              </div>            
            </div>

            <Divider /> 

            <div className="flex flex-col justify-center items-center w-full h-screen bg-gray-100 p-8 gap-5">
              <h1 className="text-black text-4xl font-extralight uppercase">projects</h1>

              <div className="grid grid-rows-1 grid-cols-3 justify-center items-center w-full h-5/6">
                
                <div className="flex flex-col justify-center items-center w-full h-full p-12 drop-shadow-xl transition-all duration-300 hover:scale-90">
                  <div className="w-full h-full">
                    <img className="w-full h-1/2 object-cover" src="snapcart.png"/>
                    <div className="flex flex-col justify-center items-start w-full h-1/2 bg-white p-12">
                      <h1 className="text-black font-bold text-2xl">Snap Cart</h1>
                      <h1 className="text-black font-normal text-xl">Google & Square AI Hackathon</h1>
                      <h1 className="text-black font-light text-xl italic">October 2023</h1>
                      <h1 className="text-white">.</h1>
                      <p>
                        Participated in a hackathon hosted by <br /> 
                        Google and Square looking to integrate <br /> 
                        Google's AutoML and Square{"'"}s payment process API
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center w-full h-full p-12 drop-shadow-xl transition-all duration-300 hover:scale-90">
                  <div className="w-full h-full">
                    <img className="w-full h-1/2 object-cover" src="tiktok.jpg"/>
                    <div className="flex flex-col justify-center items-start w-full h-1/2 bg-white p-12">
                      <h1 className="text-black font-bold text-2xl">ouckah</h1>
                      <h1 className="text-black font-normal text-xl">Content Creation</h1>
                      <h1 className="text-black font-light text-xl italic">February 2023 - Present</h1>
                      <h1 className="text-white">.</h1>
                      <p>
                        Created educational and entertainment content <br />  
                        revolving around the culture of Computer Science
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center w-full h-full p-12 drop-shadow-xl transition-all duration-300 hover:scale-90">
                  <div className="w-full h-full">
                    <img className="w-full h-1/2 object-cover" src="codeforgood.jpg"/>
                    <div className="flex flex-col justify-center items-start w-full h-1/2 bg-white p-12">
                      <h1 className="text-black font-bold text-2xl">EazyWay</h1>
                      <h1 className="text-black font-normal text-xl">J.P. Morgan Code for Good</h1>
                      <h1 className="text-black font-light text-xl italic">September 2023</h1>
                      <h1 className="text-white">.</h1>
                      <p>
                        Developed a project for non-profit Wellfare <br />
                        to optimize the onboarding process for those <br />
                        with food stamps and government help.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            <Divider />

            <div className="flex flex-col justify-center items-end w-full h-12 bg-gray-100 p-12">
              <h1 className="text-black font-semibold">@aidanouckama</h1>
            </div>

          </>
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
  return ["bg-black", "bg-gray-100"];
}
