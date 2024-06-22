
function App() {
  

  return (
    <>
    {/* width - height - margin - padding - text - font - text color - background color */}
      <h1 className="w-1/2 h-28 m-12 p-24 text-center text-5xl font-semibold text-orange-500 bg-gray-700">
        Hello world!
      </h1>
      {/* container-round-box shadow */}
      <div className="container">
        <h2 className="rounded shadow text-center font-bold text-2xl bg-gray-300">Our products</h2>
      </div>
      {/* overflow */}
      <div className="bg-zinc-500 h-12 w-12 overflow-auto">
        <h3 className="bg-amber-200 w-24">
          Overflow
        </h3>
      </div>
      {/* positions */}
      <div className="bg-zinc-500 h-20 overflow-auto relative">
        <h3 className="bg-amber-200 w-60 absolute right-0 bottom-0">
          Position fixed, absolute, ...
        </h3>
      </div>
      {/* opacity  */}
      <div className="bg-zinc-500 h-20 overflow-auto relative">
        <h3 className="bg-red-800 w-60 absolute right-0 bottom-0 opacity-50">
          opacity-50
        </h3>
      </div>
      {/* rotate  */}
      <div className="bg-zinc-500 h-20 overflow-auto relative">
        <h3 className="bg-green-500 w-60 absolute right-0 bottom-0 rotate-12">
          rotate-45
        </h3>
      </div>
      {/* flex  */}
      <div className="bg-gray-900 h-96 flex justify-between items-center">
        <div className="bg-orange-500 size-32">flex</div>
        <div className="bg-orange-500 size-32">flex</div>
        <div className="bg-orange-500 size-32">flex</div>
        <div className="bg-orange-500 size-32">flex</div>
      </div>
      {/* flex basis */}
      <div className="bg-gray-900 h-96 flex flex-row">
        <div className="bg-orange-600 h-32 basis-3/12">flex</div>
        <div className="bg-orange-700 h-32 basis-3/12">flex</div>
        <div className="bg-orange-800 h-32 basis-3/12">flex</div>
        <div className="bg-orange-900 h-32 basis-3/12">flex</div>
      </div>
      {/* grid */}
      <div className="bg-gray-900 h-96 grid grid-cols-4 gap-4">
        <div className="bg-orange-600 h-20 col-span-3">grid</div>
        <div className="bg-orange-700 h-20 col-span-1">grid</div>
        <div className="bg-orange-800 h-20 col-span-1">grid</div>
        <div className="bg-orange-900 h-20 col-span-3">grid</div>
      </div>
    </>
  )
}

export default App
