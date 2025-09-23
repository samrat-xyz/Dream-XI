import React from 'react'
import SelectedPlayerCards from './SelectedPlayerCards'


function SelectedPlayers({purchesedPlayer,removePlayer}) {
  const selectedPlayersData = purchesedPlayer;
  return (
    <div>
      {
        selectedPlayersData.map(selectedPlayer =><SelectedPlayerCards selectedPlayer={selectedPlayer}
        key={selectedPlayer.id}
        removePlayer={removePlayer}
        />
          
        )
      }
    </div>
  )
}

export default SelectedPlayers
