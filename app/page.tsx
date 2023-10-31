'use client'
import { useState } from "react"

import Ouckah from "./components/ouckah";
import AidanOuckama from "./components/aidanouckama";

import Divider from "./components/divider";

export default function Home() {

  const [ouckah, setOuckah] = useState(true);
  const selected = `text-${ouckah ? "white" : "black"} text-5xl font-bold select-none`
  const unselected = selected + " opacity-50";

  const [primary, secondary] = getColorStyle();

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
      
      <Divider primaryMode={ouckah} />

      {
        ouckah ? (
          <Ouckah />
        ) : (
          <AidanOuckama />
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
