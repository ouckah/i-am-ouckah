'use client'
import { useState } from "react"

export default function Home() {

  const [ouckah, setOuckah] = useState(true);
  const selected = `text-${ouckah ? "white" : "black"} text-2xl font-bold select-none`
  const unselected = selected + " opacity-50";

  return (
    <>
      <main className={`flex h-screen flex-col items-center justify-between bg-${ouckah ? "black" : "white"} p-24`}>
        <div className="flex flex-row justify-center items-center w-full h-screen gap-5">
          <h1 className={`text-${ouckah ? "white" : "black"} text-2xl font-bold uppercase select-none`}>I am</h1>
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-black select-none">{ouckah ? (".") : ("")}</h1>

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

            <h1 className="text-white select-none">{ouckah ? ("") : (".")}</h1>
          </div>
        </div>
      </main>
      {
        ouckah ? (
          <div>

          </div>
        ) : (
          <div>
            
          </div>
        )
      }
    </>
  )
}
