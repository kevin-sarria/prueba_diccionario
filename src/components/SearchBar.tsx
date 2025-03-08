"use client"

import { useEffect, useState } from "react";
import { useAppDispatch } from "@/hooks/storeHooks";

import { FaSearch } from "react-icons/fa";
import Swal from "sweetalert2";
import { isLoading, noLoading, setInfo } from "@/store/dictionarySlice";

export const SearchBar = () => {

  const [ wordToAsk, setWordToAsk ] = useState<string>("");

  const dispatch = useAppDispatch();

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const word = wordToAsk.trim();

    if( !word ) {
      Swal.fire({
        title: "Error!",
        text: "The word to ask is requried",
        icon: "error"
      });
      return;
    }

    dispatch(isLoading());

    try {
      const resp = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then( resp => resp.json() );
      dispatch(setInfo(resp[0]));
      setWordToAsk("");
    } catch (error) {
      setWordToAsk("");
      dispatch(noLoading());
      Swal.fire({
        title: "Info",
        text: "the searched word was not found",
        icon: "info"
      });
      return;
    }
  }

  return (
    <div className="w-full my-10">

        <div className="flex p-3 bg-gray-200 rounded-xl mx-auto h-12 items-center">
            <form
              className="w-full flex"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Type a Word to Ask..."
                className="text-neutral-700 font-semibold w-full focus:outline-0"
                value={wordToAsk}
                onChange={ (e) => setWordToAsk(e.target.value) }
                autoComplete="off"
              />
              <button type="submit">
                <FaSearch className="w-5 h-5 text-purple-400 cursor-pointer" />
              </button>
            </form>
        </div>

    </div>
  )
}
