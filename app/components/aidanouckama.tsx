// icons
import SocialIcon from "./socialicon"
import { Tiktok, Linkedin, Github } from "react-bootstrap-icons";

// components
import Divider from "./divider"
import EducationCard from "./educationcard";
import ExperienceCard from "./experiencecard";
import ProjectCard from "./projectcard";

// types
import { Education, Experience, Project } from "../types/cards";

const education: Education[] = [
    {
        school: "Stevens Institute of Technology",
        major: "Computer Science, Minor in Math",
        image: "stevens.jpg",
        subtitles: [
            {
                title: "Awards",
                description: "Pinnacle Scholar 🞄 Dean’s List: Fall 2022, Spring 2023"
            },
            {
                title: "Clubs",
                description: "Ultimate Frisbee 🞄 Blueprint 🞄 Chess 🞄 Poker"
            }
        ]
    },
    {
        school: "Montclair State University",
        major: "Co-op Program",
        image: "msu.png",
        subtitles: [
            {
                title: "Classes",
                description: "Calculus I, II 🞄 Introduction to Java Programming"
            },
            {
                title: "Clubs",
                description: "None. I was scared."
            }
        ]
    }
]

const experiences: Experience[] = [
    {
        company: "Datadog",
        title: "Incoming Software Engineer",
        image: "datadog-logo.png",
        date: "September 2024 - December 2024",
        location: "New York, NY"
    },
    {
        company: "DoorDash",
        title: "Incoming Software Engineer",
        image: "doordash-logo.png",
        date: "May 2024 - August 2024",
        location: "New York, NY"
    },
    {
        company: "Stevens Institute of Technology",
        title: "Undergraduate Researcher",
        image: "stevens.jpg",
        date: "May 2023 - September 2023",
        location: "Hoboken, NJ"
    },
    {
        company: "Stanford University",
        title: "Student Instructor",
        image: "stanford.jpg",
        date: "April 2023 - June 2023",
        location: "Stanford, CA"
    }
]

const projects: Project[] = [
    {
        title: "Snap Cart",
        subtitle: "Google & Square AI Hackathon",
        image: "snapcart.png",
        date: "October 2023",
        description: "Participated in a hackathon hosted by Google and Square looking to integrate Google's AutoML and Square\'s payment process API"
    },
    {
        title: "ouckah",
        subtitle: "Content Creation",
        image: "tiktok.jpg",
        date: "February 2023 - Present",
        description: "Created educational and entertainment content revolving around the culture of Computer Science"
    },
    {
        title: "EazyWay",
        subtitle: "J.P. Morgan Code for Good",
        image: "codeforgood.jpg",
        date: "September 2023",
        description: "Developed a project for non-profit Wellfare to optimize the onboarding process for those with food stamps and government help"
    }
]

const AidanOuckama = () => {
    return (
        <>

            <Header />

            <Divider /> 

            <div className="flex flex-col justify-center items-center w-full h-screen bg-gray-100 p-8 gap-5">
              <h1 className="text-black text-4xl font-extralight uppercase">education</h1>

                {
                    education.map((school, i) => (
                        <>
                            <div className="flex flex-col justify-center items-center w-full h-1/4">
                                <EducationCard 
                                    school={school.school}
                                    major={school.major}
                                    image={school.image}
                                    subtitles={school.subtitles}
                                />
                            </div>

                            { i != education.length - 1 ? (<div className="w-0.5 h-12 bg-black"/>) : (<></>) }
                        </>
                    ))
                }

            </div>

            <Divider /> 

            <div className="flex flex-col justify-center items-center w-full h-screen bg-gray-100 p-8 gap-5">
              <h1 className="text-black text-4xl font-extralight uppercase">experience</h1>

              {
                experiences.map((experience, i) => (
                    <>
                        <div className="group flex flex-row justify-center items-center w-full h-1/6">
                            <ExperienceCard 
                                company={experience.company}
                                title={experience.title}
                                image={experience.image}
                                date={experience.date}
                                location={experience.location}
                            />
                        </div>

                        { i != experiences.length - 1 ? (<div className="w-0.5 h-12 bg-black"/>) : (<></>) }
                    </>
                ))
              }

            </div>

            <Divider />

            <Socials />

            <Divider /> 

            <div 
                className="flex flex-col justify-center items-center w-full min-h-screen bg-gray-100 p-8 gap-5
                           lg:h-screen"
            >
              <h1 className="text-black text-4xl font-extralight uppercase">projects</h1>

              <div 
                className="flex flex-col justify-center items-center w-full h-5/6
                           lg:grid lg:grid-rows-1 lg:grid-cols-3 "
              >
                
                {
                    projects.map((project, i) => (
                        <ProjectCard
                            key={i}
                            title={project.title}
                            subtitle={project.subtitle}
                            image={project.image}
                            date={project.date}
                            description={project.description}
                        />
                    ))
                }

              </div>

            </div>

            <Divider />

            <Footer />

        </>
    )
}

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-screen bg-gray-100">
            <div 
                className="flex flex-col justify-evenly items-center w-full h-1/2 bg-black bg-opacity-40 px-24 py-16
                           md:flex-row"
            >
                <img 
                    src="/pfp.png" 
                    className="w-1/2 h-full object-cover rounded-full shadow-xl
                               md:w-1/5"
                />
                <div 
                    className="flex flex-col justify-center items-center w-1/2 h-full gap-2
                               md:items-start md:gap-10"
                > 
                    <div>
                        <h1 
                            className="hidden text-6xl text-gray-100 font-bold
                                       md:block"
                        >
                            my name is
                        </h1>
                        <div 
                            className="flex flex-row justify-center items-center w-full
                                       md:justify-start"
                        >
                            <h1 className="text-6xl text-black font-bold animate-pulse animation-delay-0">a</h1>
                            <h1 className="text-6xl text-black font-bold animate-pulse animation-delay-100">i</h1>
                            <h1 className="text-6xl text-black font-bold animate-pulse animation-delay-200">d</h1>
                            <h1 className="text-6xl text-black font-bold animate-pulse animation-delay-300">a</h1>
                            <h1 className="text-6xl text-black font-bold animate-pulse animation-delay-400">n</h1>
                        </div>
                    </div>

                    <p 
                        className="text-md text-black font-bold opacity-80
                                   md:text-3xl"
                    >
                        and im a <span className="text-yellow-400">computer science student</span> <br />
                        with a passion for <span className="text-yellow-400"> software engineering</span> <br />
                        and <span className="text-yellow-400"> machine learning</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

const Socials = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-36 bg-gray-100 p-8 gap-5">
            <h1 className="text-black text-4xl font-extralight uppercase">socials</h1>
            <div className="flex flex-row justify-evenly items-center w-full h-full gap-3">
                <SocialIcon url="https://tiktok.com/@ouckah" icon={<Tiktok color="black" size={36} />} />
                <SocialIcon url="https://www.linkedin.com/in/aidan-ouckama/" icon={<Linkedin color="black" size={36} />} />
                <SocialIcon url="https://www.github.com/ouckah" icon={<Github color="black" size={36} />} />
            </div>            
        </div>
    )
}

const Footer = () => {
    return (
        <div className="flex flex-col justify-center items-end w-full h-12 bg-gray-100 p-12">
            <h1 className="text-black font-semibold">@aidanouckama</h1>
        </div>
    )
}

export default AidanOuckama;