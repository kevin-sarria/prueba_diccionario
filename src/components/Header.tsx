"use client"
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux"

import { NightModeButton } from "./NightModeButton"
import { userConfigState } from "@/interfaces/userConfigState.interface";
import { setFontFamily } from "@/store/userConfigSlice";

export const Header = () => {

  const dispatch = useDispatch();
  const { fontFamily } = useSelector( (state: { config: userConfigState }) => state.config );

  const handleFontFamily = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFontFamily(e.target.value));
  }

  return (
    <div className="flex justify-between mx-auto">
        
        <div className="w-8 h-8">
            <img src="/icons/icon-libro.png" alt="Icon App" className="dark:fill-white" />
        </div>

        <div className="flex gap-2">

            <div className="border-r-2 border-gray-200 dark:border-gray-100 p-1 pr-4 mr-4">
                <select
                  name="type_letter"
                  id="type_letter"
                  className="text-neutral-700 dark:text-black bg-white font-bold cursor-pointer w-18 sm:w-fit"
                  value={fontFamily}
                  onChange={handleFontFamily}
                >
                    <option value="serif">Serif</option>
                    <option value="sans-serif">Sans Serif</option>
                    <option value="monospace">Monospace</option>
                </select>
            </div>

          <NightModeButton />
        </div>

    </div>
  )
}
