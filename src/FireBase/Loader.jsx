import React from 'react'

function Loader() {
  return (
    <div className="flex items-center justify-center h-screen">
          <div>
            <p className="text-2xl font-semibold text-gray-700 animate-pulse text-center">
              Loading...
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            <div className="flex w-52 flex-col gap-4">
  <div className="skeleton h-32 w-full"></div>
  <div className="skeleton h-4 w-28"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
</div>
<div className="flex w-52 flex-col gap-4">
  <div className="skeleton h-32 w-full"></div>
  <div className="skeleton h-4 w-28"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
</div>
<div className="flex w-52 flex-col gap-4">
  <div className="skeleton h-32 w-full"></div>
  <div className="skeleton h-4 w-28"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
</div>
            </div>
          </div>
        </div>
  )
}

export default Loader