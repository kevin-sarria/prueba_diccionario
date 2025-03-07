import { FaSearch } from "react-icons/fa";

export const SearchBar = () => {
  return (
    <div className="w-full my-10">

        <div className="flex p-3 bg-gray-200 rounded-xl mx-auto h-12 items-center">
            <input type="text" name="search" id="search" placeholder="Type a Word to Ask..." className="text-neutral-700 font-semibold w-full focus:outline-0" />
            <FaSearch className="w-5 h-5 text-purple-400 cursor-pointer" />
        </div>

    </div>
  )
}
