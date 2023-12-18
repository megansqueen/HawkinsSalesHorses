import HorseList from "./HorseList";

function HorsePage({ 
    horses, 
    setHorses,
    searchTerm,
    currentUser
}) {

  return (
    <main>
            <HorseList 
                horses={horses}
                setHorses={setHorses}
                searchTerm={searchTerm}
                currentUser={currentUser}
            />
    </main>
  );
}

export default HorsePage;