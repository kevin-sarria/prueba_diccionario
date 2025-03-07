import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";

import { IoMdPlay } from "react-icons/io";

export default function Home() {
  return (
    <div className="sm:w-2xl mx-4 md:mx-auto my-5 p-2">
      <Header />
      <SearchBar />

      <div className="flex justify-between items-center my-10">
        <div>
          <h2 className="text-3xl sm:text-5xl font-bold">Keyboard</h2>
          <span className="text-xl text-purple-400">{"həˈləʊ"}</span>
        </div>

        <div className="bg-purple-200 p-1 rounded-full h-14 w-14 flex justify-center items-center cursor-pointer">
          <IoMdPlay className="text-purple-600 w-6 h-6" />
        </div>
      </div>

      <div className="flex gap-5 items-center mx-3">
        <span className="text-slate-900 font-semibold">noun</span>
        <hr className="border border-neutral-200 w-11/12" />
      </div>

      <div className="my-10">
        <h3 className="text-xl text-neutral-400 mb-5">Meaning</h3>
        <ul className="list-disc px-10">
          <li className="text-neutral-600">used as a greeting or to begin a phone conversation.</li>
          <li className="text-neutral-600">an utterance of ‘hello’; a greeting.</li>
        </ul>
      </div>

      <div className="flex gap-5 my-10">
        <h4 className="text-lg sm:text-xl text-neutral-400">Synonyms</h4>
        <p className="text-lg sm:text-xl text-purple-500 font-semibold cursor-pointer">electronic keyboard</p>
      </div>

      <div className="flex gap-5 items-center mx-3">
        <span className="text-slate-900 font-semibold">Verb</span>
        <hr className="border border-neutral-200 w-11/12" />
      </div>

      <div className="my-10">
        <h3 className="text-xl text-neutral-400 mb-5">Meaning</h3>
        <ul className="list-disc px-10">
          <li className="text-neutral-600">say or shout ‘hello’.</li>
          <li className="text-neutral-400 list-none ml-3">"I pressed the phone button and helloed"</li>
        </ul>
      </div>

      <div className="mx-3">
        <hr className="border border-neutral-200" />
      </div>

      <div className="flex gap-x-5 my-10 flex-wrap">
        <h5 className="text-md text-neutral-400 mb-5">Source</h5>
        <a
          href="https://en.wiktionary.org/wiki/keyboard"
          target="_blank"
          className="text-neutral-700 underline"
        >
          https://en.wiktionary.org/wiki/keyboard
        </a>
      </div>

    </div>
  );
}
