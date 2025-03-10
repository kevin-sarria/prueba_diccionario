"use client"

import { useState } from "react";
import { useAppDispatch } from "@/hooks/storeHooks";

import { FaSearch } from "react-icons/fa";
import Swal from "sweetalert2";
import { isLoading, noLoading, setInfo } from "@/store/dictionarySlice";
import { useHistory } from "@/hooks/useHistory";

export const SearchBar = () => {

  const [ wordToAsk, setWordToAsk ] = useState<string>("");

  const dispatch = useAppDispatch();

  const { addWordToHistory } = useHistory();

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
      addWordToHistory(word);
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

        <div className="searchbar flex px-5 bg-gray-200 rounded-2xl mx-auto h-14 items-center">
            <form
              className="w-full flex"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Type a Word to Ask..."
                className="text-neutral-700 placeholder:text-neutral-600 font-semibold w-full focus:outline-0"
                value={wordToAsk}
                onChange={ (e) => setWordToAsk(e.target.value) }
                autoComplete="off"
              />
              <button type="submit">
                <FaSearch className="w-5 h-5 text-purple-400 hover:text-purple-300 cursor-pointer" />
              </button>
            </form>
        </div>

    </div>
  )
}
