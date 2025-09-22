import React from 'react'
import SelectedPlayerCards from './SelectedPlayerCards'


function SelectedPlayers({purchesedPlayer}) {
  const selectedPlayersData = purchesedPlayer;
  return (
    <div>
      {
        selectedPlayersData.map(selectedPlayer =><SelectedPlayerCards selectedPlayer={selectedPlayer}
        key={selectedPlayer.id}
        />
          
        )
      }
    </div>
  )
}

export default SelectedPlayers
