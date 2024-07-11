import React, { useState } from "react";
import Bright_bg from "./assets/bright_bg.webp";
import bright_poster from "./assets/bright_poster.jpg";
import download from "./assets/download.jpeg";
import tomb_raider_poster from "./assets/tomb_raider_poster.webp";
import hangover from "./assets/hangover.jpeg";
import hangover2 from "./assets/han.jpeg";

function App() {
  let col = ["rgba(255, 0, 0,0.5)", "rgba(0, 0, 255,0.5)"];
  const [movies, setMovies] = useState([
    {
      bgimg: Bright_bg,
      poster: bright_poster,
      name: "Bright",
      year: "2017",
      actor: "David Ayer",
      length: "117 min",
      type: ["Action", "Crime", "Fantasy"],
      description:
        "In an alternate present-day where magical creatures live among us, two L.A. cops become embroiled in a prophesied turf battle.",
    },
    {
      bgimg: download,
      poster: tomb_raider_poster,
      name: "Tomb Raider",
      year: "2018",
      actor: "Roar Uthaug",
      length: "106 min",
      type: ["Action", "Fantasy"],
      description:
        "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.",
      path: "src/assets/bright_bg.webp",
    },
    {
      bgimg: hangover2,
      poster: hangover,
      name: "The Hangover",
      year: "2009",
      actor: "Zach Galifianakis, Bradley Cooper, Justin Bartha",
      length: "100 min",
      type: ["Comedy", "Thriller"],
      description:
        "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.",
    },
  ]);

  return (
    <div className="w-[85%] mx-auto  flex flex-col gap-20">
      {movies.map((movie, index) => (
        <div
          style={{ boxShadow: `0px 0px 35px ${col[index]}` }}
          key={index}
          className="flex items-center overflow-hidden bg-[rgb(13,13,12)]"
        >
          <div
            style={{ boxShadow: "0px 0 10px 45px rgba(0,0,0,0.6)" }}
            className="w-1/2 text-white flex flex-col p-16 h-[400px] z-10 bg-[rgb(13,13,12)] shadow-md"
          >
            <div className="flex gap-5 mb-8">
              <img src={movie.poster} alt="" className="h-[180px] w-[135px]" />
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold mb-2">{movie.name}</h2>
                <p className="text-blue-400 mb-2">
                  {movie.year}, {movie.actor}
                </p>
                <p style={{ textShadow: " blue 1px 0 10px" }} className=" mb-2">
                  {" "}
                </p>
                <div className="flex gap-3 items-center">
                  <p
                    style={{ textShadow: " blue 1px 0 10px" }}
                    className=" mb-2 border-grey-500 border-[1px] rounded-md p-1"
                  >
                    {" "}
                    {movie.length}
                  </p>
                  <p
                    style={{ textShadow: " blue 1px 0 10px" }}
                    className=" mb-2"
                  >
                    {" "}
                    {movie.type.join(", ")}
                  </p>
                </div>
              </div>
            </div>
            <p style={{ textShadow: " blue 1px 0 10px" }} className="">
              {movie.description}
            </p>
          </div>

          <div className="w-1/2">
            <img
              className="w-full scale-125"
              src={movie.bgimg}
              alt={movie.name}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
