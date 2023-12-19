import HorseList from "./HorseList";

function HorsePage({ 
    horses, 
    setHorses,
    searchTerm,
    currentUser,
    updateHorseData
}) {

  return (
    <main>
            <HorseList 
                updateHorseData={updateHorseData}
                horses={horses}
                setHorses={setHorses}
                searchTerm={searchTerm}
                currentUser={currentUser}
            />
    </main>
  );
}

export default HorsePage;