"use client"

import { useAppSelector } from "@/hooks/storeHooks";
import { dictionaryState } from "@/interfaces/dictionaryState.interface";
import { useEffect, useState } from "react";
import { IoMdPlay } from "react-icons/io";

export const Translation = () => {

    const [ linkAudio, setLinkAudio ] = useState<string>("");
    const [ audio, setAudio ] = useState<HTMLAudioElement | null>(null);

    const { word, phonetic, phonetics, meanings, source } = useAppSelector( (state: { dictionary: dictionaryState }) => state.dictionary );

    useEffect( () => {
        const audioUrl = phonetics?.find((obj) => obj?.audio)?.audio || "";
        setLinkAudio(audioUrl);
        setAudio(audioUrl ? new Audio(audioUrl) : null);
    }, [word, phonetics] );

    const playAudio = () => {
        if( audio ) audio.play();
    }

    if( !word ) return;

  return (
    <>
      <div className="flex justify-between items-center my-10">
        <div>
          <h2 className="text-3xl dark:text-white sm:text-5xl font-bold">{word}</h2>
          <span className="text-xl text-purple-400">{phonetic}</span>
        </div>

        <div
            className={`${linkAudio ? 'bg-purple-200 hover:bg-purple-100 hover:cursor-pointer' : 'bg-gray-200 cursor-not-allowed'} p-1 rounded-full h-14 w-14 flex justify-center items-center`}
            onClick={() => playAudio()}>
          <IoMdPlay className={`${linkAudio ? 'text-purple-600' : 'text-gray-800'} w-6 h-6`} />
        </div>
      </div>

      <div className="flex gap-5 items-center mx-3">
        <span className="text-slate-900 dark:text-neutral-300 font-semibold">noun</span>
        <hr className="border border-neutral-200 w-11/12" />
      </div>

      <div className="my-10">
        <h3 className="text-xl text-neutral-400 dark:text-neutral-200 mb-5">Meaning</h3>
        <ul className="list-disc px-10">
          {
            meanings && meanings[0]?.definitions.map( (obj, index) => (
                <li className="text-neutral-600 dark:text-neutral-300" key={index}>
                    {obj.definition}
                </li>
            ) )
          }
        </ul>
      </div>

      {
        meanings && <div className="flex gap-5 my-10">
        <h4 className="text-lg sm:text-xl text-neutral-400 dark:text-neutral-200">Synonyms</h4>
        <p className="text-lg sm:text-xl text-purple-500 font-semibold">
          {meanings[0]?.synonyms[0]}
        </p>
      </div>
      }

      <div className="flex gap-5 items-center mx-3">
        <span className="text-slate-900 dark:text-neutral-300 font-semibold">Verb</span>
        <hr className="border border-neutral-200 w-11/12" />
      </div>

      <div className="my-10">
        <h3 className="text-xl text-neutral-400 dark:text-neutral-200 mb-5">Meaning</h3>
        <ul className="list-disc px-10">
            {
                meanings && meanings[1]?.definitions.map( (obj, index) => (
                    <li className="text-neutral-600 dark:text-neutral-300" key={index}>{obj.definition}</li>
                ) )
            }
        </ul>
      </div>

      <div className="mx-3">
        <hr className="border border-neutral-200" />
      </div>

      <div className="flex gap-x-5 my-10 flex-wrap">
        <h5 className="text-md text-neutral-400 dark:text-neutral-200 mb-5">Source</h5>
        <a
          href={source && source[0]}
          target="_blank"
          className="text-neutral-700 dark:text-neutral-300 underline"
        >
          {source && source[0]}
        </a>
      </div>
    </>
  );
};
