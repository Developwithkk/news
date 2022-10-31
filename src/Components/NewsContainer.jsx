import { useState } from "react"
import Newsitem from "./Newsitem"


function NewsContainer() {


    const [page , setPage] = useState(1)

    const handlePrev = () => {
        console.log('prev')
    }

    const handleNext = () => {
        setPage({
            page : page + 1
        })
    }
  return (
    <div className=" mt-2 lg: grid-cols-3 gap-10">
      <Newsitem />
      <div className="flex justify-between">
        <button className="ml-4 inline-flex text-gray-700 bg-blue-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg" onClick={handlePrev} disabled={page <=1}>Next</button>
        <button className="ml-4 inline-flex text-gray-700 bg-blue-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg" onClick={handleNext}>Prev</button>
      </div>
    </div>
  ) 
}

export default NewsContainer
