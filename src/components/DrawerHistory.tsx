"use client"

import { useHistory } from "@/hooks/useHistory";

interface Props {
    isDrawerOpen: boolean;
    setIsDrawerOpen: (isOpen: boolean) => void;
}

export const DrawerHistory = ({ isDrawerOpen, setIsDrawerOpen }: Props) => {

    const { history } = useHistory();

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/20 transition-opacity ${
          isDrawerOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsDrawerOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`drawer fixed top-0 right-0 h-screen w-full md:w-4/12 lg:w-1/4 bg-white shadow-lg transform transition-transform ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="btn-close-drawer absolute top-4 right-4 text-gray-600 hover:cursor-pointer"
          onClick={() => setIsDrawerOpen(false)}
        >
          ✖
        </button>

        <div className="p-6 h-12/12">
          <h2 className="text-lg font-bold">History</h2>
          <div className="flex flex-col gap-5 h-11/12 mt-5 overflow-y-auto">

            {
                history.map( (obj, key) => (
                    <div className="card-word p-2 mx-2 rounded-2xl shadow" key={key}>
                        <span className="text-lg font-bold text-neutral-800">{obj?.word}</span>
                        <p className="text-neutral-400"><span className="font-semibold text-neutral-700">Date: </span>{obj?.time}</p>
                    </div>
                ) )
            }

            {
                history.length < 1 && 
                <span className="text-center text-neutral-400 mt-10">There are no previous translations...</span>
            }

          </div>
        </div>
      </div>
    </>
  );
};
