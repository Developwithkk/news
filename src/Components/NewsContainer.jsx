import { useState } from "react"
import Newsitem from "./Newsitem"
import Navbar from "./Navbar"
import Footer from "./Footer"


function NewsContainer({mode , category , changeMode}) {


    const [page , setPage] = useState(1)

    const handlePrev = () => {
        console.log('prev')
    }

    const handleNext = () => {
        setPage({
            page : page + 1
        })
    }
  return (<>
    <Navbar mode={mode} changeMode= {changeMode}/>
    <div className=" mt-2 lg: grid-cols-3 gap-10">
      <Newsitem mode ={mode} category={category} />
    </div>
    <Footer mode={mode}/>
    </>
  ) 
}

export default NewsContainer
