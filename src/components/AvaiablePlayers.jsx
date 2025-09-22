import React, { use } from 'react'
import PlayerCards from './PlayerCards';

function AvaiablePlayers({promiseData,avaiableBalance,setAvailableBalance,setPurchesedPlayer,purchesedPlayer}) {
    const players = use(promiseData);
    
  return (
    <div>
      

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
        {
          players.map(player =><PlayerCards player={player} key={player.id} 
          avaiableBalance={avaiableBalance}
          setAvailableBalance={setAvailableBalance}
          purchesedPlayer={purchesedPlayer}
          setPurchesedPlayer={setPurchesedPlayer}
          />)
        }
      </div>
    </div>
  )
}

export default AvaiablePlayers
