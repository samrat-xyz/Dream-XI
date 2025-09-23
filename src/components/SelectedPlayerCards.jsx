import React from "react";

function SelectedPlayerCards({ selectedPlayer,removePlayer }) {
  const {
    name,
    player_image,
    batting_role,
  } = selectedPlayer;
  const handleSelected = () =>{
    removePlayer(selectedPlayer);
  }
  
  return (
    <div className="max-w-7xl mx-auto my-6">
      <ul className="list bg-base-100 rounded-lg shadow-lg">
        <li className="list-row">
          <div className="text-4xl font-thin opacity-30 tabular-nums">
            {selectedPlayer.length}
          </div>
          <div>
            <img className="size-12 object-cover rounded-box" src={player_image} 
            
            />
          </div>
          <div className="list-col-grow">
            <div>{name}</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              {batting_role}
            </div>
          </div>
          <button
          onClick={handleSelected}
          className="btn btn-square btn-ghost text-red-500 text-lg">
            🗑︎
          </button>
        </li>
      </ul>
    </div>
  );
}

export default SelectedPlayerCards;
