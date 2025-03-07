export const NightModeButton = () => {
  return (
    <div className="flex items-center gap-3">

        <div className="w-12 h-fit p-1.5 rounded-4xl bg-gray-500 cursor-pointer flex justify-start">
          <div className="rounded-full w-3 h-3 bg-white"></div>
        </div>

        <div className="w-6 h-6">
          <img src="/icons/icon-moon.png" alt="Icon Moon" />
        </div>
    </div>
  )
}
