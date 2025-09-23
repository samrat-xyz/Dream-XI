import React, { use } from 'react'
import PlayerCards from './PlayerCards';

function AvailablePlayers({
  promiseData,
  availableBalance,
  setAvailableBalance,
  setPurchesedPlayer,
  purchesedPlayer
}) {
  const players = use(promiseData);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-xl font-bold text-gray-800 my-6">Available Players</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {players.map((player) => (
          <PlayerCards
            key={player.id}
            player={player}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            purchesedPlayer={purchesedPlayer}
            setPurchesedPlayer={setPurchesedPlayer}
          />
        ))}
      </div>
    </div>
  )
}

export default AvailablePlayers;
