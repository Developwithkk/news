import { useState , useEffect  } from "react"




function Newsitem({mode , category}) {

    const [items , setItems] = useState([])

    useEffect(() => {
        fetchNews()
        
    })

    const fetchNews = async () => {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=8c3f0bf3ad59401cb37c89ca217269ae`)
        const data = await response.json()
        console.log(data.articles)
        setItems(data.articles)
     }

     const itemsList = items.map((obj )=> {

        return (
            <div key={obj.url} >
              <section className={`text-${mode === "light" ? "gray-600" : "white"} body-font`}>
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img className="object-cover object-center rounded" alt="hero" src={obj.urlToImage ===null || obj.urlToImage ==="" ? "https://images.unsplash.com/photo-1546422904-90eab23c3d7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80" : obj.urlToImage }/>
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className={`title-font sm:text-4xl text-3xl mb-4 font-medium text-${ mode === "light" ? "gray-900" : "white"}`}>{obj.description}
                <br className="hidden lg:inline-block"/>${obj.title}
              </h1>
              <p className="mb-8 leading-relaxed">${obj.content}</p>
              <div className="flex justify-center">
                
                <a href={obj.url}  target="_blank" rel="noreferrer" className={`ml-4 inline-flex text-${mode === "light" ? "gray-700" : "white"} bg-${mode === "light"?"blue-100":"slate-900"} border-0 py-2 px-6 focus:outline-none hover:bg-${mode === "light" ? "gray-200" :"gray-600"} rounded text-lg`}>Read More</a>
              </div>
            </div>
          </div>
        </section>
            </div>
          )
     })

     return (
         <div>
       <div className="row">
           {itemsList}
       </div>
     </div>
            )

}

export default Newsitem
