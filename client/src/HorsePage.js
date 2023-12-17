import React, { useState } from "react";
import HorseList from "./HorseList";
import Search from "./Search";

function HorsePage({ 
    horses, 
    setHorses
}) {
    const [searchTerm, setSearchTerm] = useState("")

    function handleSearch(search) {
        console.log(rides)
        setSearchTerm(search)
        }

  return (
    <main>
        <Search searchTerm={searchTerm}handleSearch={handleSearch}/>
            <HorseList 
                horses={horses}
                setHorses={setHorses}
                searchTerm={searchTerm}
            />
    </main>
  );
}

export default HorsePage;