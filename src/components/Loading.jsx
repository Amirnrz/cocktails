
const Loading = () => {
  return (
    <div className="mt-32 mx-auto flex items-center justify-center">
      <div>
        <div className="relative drop-shadow-lg">
          <div className="w-20 h-20 border-green-200 border-2 rounded-full shadow-xl shadow-green-200"></div>
          <div className="w-20 h-20 border-green-700 border-t-2 animate-spin rounded-full absolute left-0 top-0 "></div>
        </div>

        <div className="relative">
            <div className="w-10 h-10 border-green-200 border-2 rounded-full shadow-xl shadow-green-300"></div>
            <div className="w-10 h-10 border-green-700 border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
        </div>

        <div className="relative">
            <div className="w-5 h-5 border-green-200 border-2 rounded-full shadow-xl shadow-green-500"></div>
            <div className="w-5 h-5 border-green-700 border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
        </div>
      </div>
    </div>
  )
}

export default Loading
