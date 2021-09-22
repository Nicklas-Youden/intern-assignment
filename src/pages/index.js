import React from 'react';
import Head from 'next/head';


import Link from "next/link"

import { useEffect, useState } from "react";

export default function Home() {
  const API_KEY = '2cf7b2d1c5af92e89a000ec9a1de2aad'


  var [content, setcontent] = useState([])
  useEffect(function () {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=2cf7b2d1c5af92e89a000ec9a1de2aad&language=da&page=1")
      .then(response => response.json())
      .then(data => {
        console.log(data.results[0].poster_path)
        setcontent(data.results)
      })
      .catch(err => {
        console.error(err);
      });
  }, [])

  return (


    <div>
      <Head>
        <title>Student assignment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p className="text-xl font-medium text-gray-800 mx-10 my-10">Movielist</p>

      <section>
        {content.map(movies =>
            <Link href={{
              pathname:`/detail/[id]`,
              query: { id: movies.id }
            }}>
          <article className="grid grid-cols-2 grid-flow-rows my-12 mx-8 h-64 mb-20"  >
            <h2 className="mb-2">

            {movies.title}
            </h2>
            <p className="mb-8">{movies.popularity}</p>
           
            <p className="truncate h-52 whitespace-normal">{movies.overview}</p>

            
            <img className="col-start-2 row-start-1 row-span-3" src={"https://image.tmdb.org/t/p/w200" + movies.poster_path} alt="" /> 
            
          </article>
            </Link>

        )}
      </section>

    </div>
  );
}
