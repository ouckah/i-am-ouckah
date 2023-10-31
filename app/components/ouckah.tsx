// icons
import SocialIcon from "./socialicon";
import { Tiktok, Linkedin, Youtube, Instagram, Discord } from "react-bootstrap-icons";

// components
import TikTok from "./tiktok";
import Divider from "./divider";

interface Metric { title: string, value: string }
const Metric = ({ title, value }: Metric) => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-full">
            <h1 className="text-white font-light tracking-widest uppercase">{title}</h1>
            <p className="text-white font-bold text-4xl cursor-pointer transition-all duration-300 hover:text-6xl">{value}</p>
        </div>
    )
}

const metrics: Metric[] = [
    {
        title:"followers",
        value:"19,300+"
    },
    {
        title:"likes",
        value:"1,300,000+"
    },
    {
        title:"monthly views",
        value:"500,000+"
    },
    {
        title:"montly unique viewers",
        value:"300,000+"
    },
]

const Ouckah = () => {
    return (
        <>

            <Header />

            <Divider primaryMode />

            <TikTokGallery />

            <Divider primaryMode />

            <Socials />

            <Divider primaryMode />

            <div className="flex flex-col justify-center items-center w-full h-screen bg-black p-8 gap-5">
              <h1 className="text-white text-4xl font-thin uppercase">metrics</h1>
              <h1 className="text-white text-xl font-thin uppercase">2023</h1>
              <div className="grid grid-cols-2 justify-center items-center w-full h-full gap-3">
                {
                    metrics.map((metric) => (
                        <Metric title={metric.title} value={metric.value}/>
                    ))
                }
              </div>
            </div>

            <Divider primaryMode />

            <Footer />

        </>
    )
}

const Header = () => {
    return (
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
    )
}

const TikTokGallery = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-screen bg-black p-8 gap-5">
            <h1 className="text-white text-4xl font-thin uppercase">check out my content</h1>
            <div className="flex flex-row justify-center items-center w-full h-full gap-3">
                <TikTok id={1} url="https://www.tiktok.com/@ouckah/video/7220422135536225578" />
                <TikTok id={2} url="https://www.tiktok.com/@ouckah/video/7279096539253919018" />
                <TikTok id={3} url="https://www.tiktok.com/@ouckah/video/7240867467327802667" />
                <TikTok id={4} url="https://www.tiktok.com/@ouckah/video/7217269265718644014" />
            </div>
        </div>
    )
}

const Socials = () => {
    return (
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
    )
}

const Footer = () => {
    return (
        <div className="flex flex-col justify-center items-end w-full h-12 bg-black p-12">
            <h1 className="text-white font-semibold">@ouckah</h1>
        </div>
    )
}

export default Ouckah;