import React from "react";
import  playerAvaterImg from '../assets/Group.png'
import flagImg from '../assets/flag.png'
function PlayerCards({ player }) {
    const {name,country,player_image,playing_role,player_rating,price,batting_role,bowling_role} = player
  console.log(player);
  return (
    <div className="max-w-7xl mx-auto ">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
         
            <img
            src={player_image}
            alt="Shoes"
            className="w-full object-cover"
          />
          
        </figure>
        <div className="card-body">
          <h2 className="card-title"><img src={playerAvaterImg} alt="" /> {name}</h2>
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-2">
            <img src={flagImg} alt="" />
            <p className="text-lg text-gray-500 font-bold">{country}</p>
            </div>
            <button className="px-4 py-2 btn ">{playing_role}</button>
          </div>
          <p className="font-bold text-md">Rating : {player_rating}</p>

          <div className="flex items-center text-[14px] font-extrabold my-3">
            <p className="">{batting_role}</p>
            <p className="text-gray-500">{bowling_role}</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Price: {price}</p>
            <button className="btn">Choose Player</button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default PlayerCards;
