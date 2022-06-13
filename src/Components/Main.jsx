import React from "react";
import axios from "axios";
import requests from "../Requests";
import { useEffect, useState } from "react";

const Main = () => {
  const [movies, setMovies] = useState([]);

  // to generate random movie everytime we refresh it
  const movie = movies[Math.floor(Math.random() * movies.length)];
  console.log(movies.length);
  //we will be making api calls only
  // when the page loads
  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  // console.log(movie);
  //<div className="absolute w-full h-[600px] bg-gradient-to-r from-black"></div>

  const truck = (str,num)=>{
    if (str?.length > num){
        return str.slice(0,num) + '...'
    }else{
        return str
    }
  }
  let imgpath = movie?.backdrop_path;
  // console.log(imgpath);
  return (
    <>
      <div className="w-full h-[550px] text-white">
        <div className="w-full h-full">
          <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
          <img
            className="w-full h-full object-cover"
            src={"https://image.tmdb.org/t/p/original" + imgpath} alt={movie?.title}
          />
          <div className="absolute w-full h-full top-[20%] p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
            <div className="my-5">
              <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5 ml-5 hover:bg-red-500 hover:transition-all hover:text-white ">
                {" "}
                Play{" "}
              </button>
              <button className="border  text-white border-gray-300 py-2 px-5 ml-5 ">
                {" "}
                Watch Later
              </button>
            </div>
            <p className = "text-grey-400 text-sm ">Released : {movie?.release_date}</p>
            <p className = "w-50% md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 "> {truck(movie?.overview , 180)}</p>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;

// https://image.tmdb.org/t/p/original/hcNM0HjfPonIzOVy6LVTDBXSfMq.jpg
