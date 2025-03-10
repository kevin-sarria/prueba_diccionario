import { MdHistory } from "react-icons/md"

interface Props {
  setIsDrawerOpen: (isOpen: boolean) => void;
}

export const HistoryButton = ({ setIsDrawerOpen }: Props) => {
  return (
    <div className="w-full flex">
        <button
            className="history-button flex items-center gap-2 p-2 text-neutral-500 bg-gray-100 hover:bg-gray-50 cursor-pointer rounded-2xl shadow-sm"
            onClick={() => setIsDrawerOpen(true)}
        >
            <MdHistory className="text-xl" />
            <span>History</span>
        </button>
    </div>
  )
}
