import React, { Suspense, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SelectedPlayers from "./components/SelectedPlayers";
import Loading from "./components/Loading";
import AvailablePlayers from "./components/Available";
import { ToastContainer } from 'react-toastify';
import Footer from "./components/Footer";

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

  // remove player
  const removePlayer = (p) =>{
    console.log(p)
    const filterData = purchesedPlayer.filter(ply => ply.id !== p.id);
    console.log(filterData)
    setPurchesedPlayer(filterData)
    setAvailableBalance(availableBalance+p.price)
  }
  


  const [availableBalance,setAvailableBalance] = useState(100000000);
  return (
    <div>
      <Navbar availableBalance={availableBalance}/>
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
              className={`w-full sm:w-auto px-6 border py-2 rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none border-b-0 sm:border-b cursor-pointer hover:bg-gray-500 border-gray-500 font-bold ${toggle ? "bg-gray-600 text-white" : "bg-white"}`}
            >
              Available
            </button>
            <button
              onClick={handleSelected}
              className={`w-full sm:w-auto px-6 border py-2 rounded-b-xl sm:rounded-r-xl sm:rounded-bl-none border-t-0 sm:border-t cursor-pointer hover:bg-gray-500 border-gray-500 font-bold ${!toggle ? "bg-gray-600 text-white" : "bg-white"}`}
            >
              Selected <span>({`${purchesedPlayer.length}`})</span>
            </button>
          </div>
        </div>
      </section>

      {toggle ? (
        <Suspense fallback={<Loading/>}>
          <AvailablePlayers promiseData={promiseData} availableBalance={availableBalance}
          setAvailableBalance={setAvailableBalance}
          purchesedPlayer={purchesedPlayer}
          setPurchesedPlayer={setPurchesedPlayer}
          />
        </Suspense>
      ) : (
        <SelectedPlayers purchesedPlayer={purchesedPlayer}
        removePlayer={removePlayer}
        />
      )}

      <Footer/>
      <ToastContainer />
    </div>
  );
}

export default App;
