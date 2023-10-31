import { Education, Subtitle } from "../types/cards";

const EducationCard = ({ school, major, image, subtitles }: Education) => {
    return (
        <div className="group flex flex-row justify-center items-center w-full h-full">
            <img className="h-full rounded-full transition-all duration-500 group-hover:rounded-l-2xl group-hover:rounded-r-none" src={image}/>
            <div className="flex flex-row justify-center items-center w-0 h-full bg-white opacity-0 rounded-r-2xl drop-shadow-lg transition-all duration-700 group-hover:w-3/4 group-hover:p-12 group-hover:opacity-100 overflow-hidden">
                <div className="flex flex-col justify-start items-center w-1/2 h-full">
                    <h1 className="text-black font-bold text-2xl">{school}</h1>
                    <h1 className="text-black font-light text-xl">{major}</h1>
                    <h1>_</h1>
                    {
                        subtitles.map((subtitle) => (
                            <h1 className="text-black font-light text-xl"><span className="font-normal">{subtitle.title}:</span> {subtitle.description}</h1>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default EducationCard;