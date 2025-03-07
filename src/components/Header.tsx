import { NightModeButton } from "./NightModeButton"

export const Header = () => {
  return (
    <div className="flex justify-between mx-auto">
        
        <div className="w-8 h-8">
            <img src="/icons/icon-libro.png" alt="Icon App" />
        </div>

        <div className="flex gap-2">

            <div className="border-r-2 border-gray-200 p-1 pr-4 mr-4">
                <select name="type_letter" id="type_letter" className="text-neutral-700 font-bold cursor-pointer">
                    <option value="0">Serif</option>
                    <option value="1">Sans Serif</option>
                    <option value="2">Monospace</option>
                </select>
            </div>

          <NightModeButton />
        </div>

    </div>
  )
}
