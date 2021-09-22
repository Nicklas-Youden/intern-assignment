import { useEffect, useState } from "react"
import {useRouter} from "next/router"

export default function single() {
  var router = useRouter()
  var { id } = router.query
  var [content, setcontent] = useState({})

  useEffect(function () {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=2cf7b2d1c5af92e89a000ec9a1de2aad&language=da`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setcontent(data)
      })
      .catch(err => {
        console.error(err);
      });
      // console.log (id)
  }, [])

  return (
    <div className="m-8">

      <h1 className="text-3xl font-bold mb-8 ">{content.title}</h1>
      <img src={"https://image.tmdb.org/t/p/w200" + content.poster_path} alt="" />
      <p className="mb-1">{content.release_date}</p>
      <p className="mb-6">{content.popularity}</p>
      <p>{content.overview}</p>
    </div>
      
    
  )
}