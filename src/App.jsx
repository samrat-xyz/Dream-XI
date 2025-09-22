import React, { Suspense, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AvaiablePlayers from "./components/AvaiablePlayers";
import SelectedPlayers from "./components/SelectedPlayers";
import Loading from "./components/Loading";

const fetchingData = async () => {
  const res = await fetch("./players.json");
  return res.json();
};
const promiseData = fetchingData();
function App() {
  const [toggle, setToggle] = useState(true);
  const [purchesedPlayer,setPurchesedPlayer] = useState([]);
  
  const handleAvailable = () => {
    setToggle(true);
  };
  const handleSelected = () => {
    setToggle(false);
  };
  const [avaiableBalance,setAvailableBalance] = useState(10000000);
  return (
    <div>
      <Navbar avaiableBalance={avaiableBalance}/>
      <Hero />
      {/* Toggling section */}
      <section className="max-w-7xl mx-auto mt-5 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h3 className="text-xl font-bold text-center md:text-left">
            {
              toggle ? 'Available Players' : `Selected Players (${purchesedPlayer.length}/11)`
            }
          </h3>
          <div className="flex flex-col sm:flex-row w-full md:w-auto">
            <button
              onClick={handleAvailable}
              className={`w-full sm:w-auto px-6 border py-2 rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none border-b-0 sm:border-b cursor-pointer hover:bg-gray-500 border-gray-500 font-bold ${toggle ? "bg-gray-600" : "bg-white"}`}
            >
              Available
            </button>
            <button
              onClick={handleSelected}
              className={`w-full sm:w-auto px-6 border py-2 rounded-b-xl sm:rounded-r-xl sm:rounded-bl-none border-t-0 sm:border-t cursor-pointer hover:bg-gray-500 border-gray-500 font-bold ${!toggle ? "bg-gray-600" : "bg-white"}`}
            >
              Selected <span>({`${purchesedPlayer.length}`})</span>
            </button>
          </div>
        </div>
      </section>

      {toggle ? (
        <Suspense fallback={<Loading/>}>
          <AvaiablePlayers promiseData={promiseData} avaiableBalance={avaiableBalance}
          setAvailableBalance={setAvailableBalance}
          purchesedPlayer={purchesedPlayer}
          setPurchesedPlayer={setPurchesedPlayer}
          />
        </Suspense>
      ) : (
        <SelectedPlayers purchesedPlayer={purchesedPlayer}/>
      )}
    </div>
  );
}

export default App;
