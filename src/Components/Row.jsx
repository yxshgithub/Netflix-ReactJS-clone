/* eslint-disable */ 
import axios from "axios";
import React, { useState, useEffect } from "react";
import Movies from "./Movies";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';


const Row = ({ title, fetchURL , rowID }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const slideleft = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  }
  const slideright = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  }


  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group overflow-hidden scroll-relative">
      <MdChevronLeft onClick={slideleft} className = 'bg-white left-0 rounded-full opacity-40 hover:opacity-100 cursor-pointer group-hover:block'  size={35} />
        <div id={'slider' + rowID} className= 'w-full h-full overflow-x-scroll  whitespace-nowrap scroll-smooth  scrollbar-hide relative'>
          {movies.map((item, id) => (
            // eslint-disable-next-line
              <Movies item = {item} key = {id}/> 
          ))}
        </div>
        <MdChevronRight onClick={slideright} className = 'bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer hidden group-hover:block'  size={35} />
      </div>
    </>
  );
};

export default Row;
// absolute top-0 left-0 w-full h-full hover:bg-black/85 opacacity-10  text-white hover:opacity-100