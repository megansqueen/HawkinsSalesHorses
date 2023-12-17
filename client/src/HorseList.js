import React from "react";
import HorseCard from "./HorseCard.js";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HorseList({
    horses,
    setHorses,
    searchTerm
}) {

    const filteredHorses = horses.filter ((horse) => {
        return horse.breed.toLowerCase().includes(searchTerm.toLowerCase()) 
    })

    function handleDeleted(deletedHorse) {
        const remainingHorses = filteredHorses.filter((horse) => {
            if (horse.id !== deletedHorse) {
                return horse
            } else {
                return null
            }
        })
        setHorses(remainingHorses)
    }

    function handleNewOffer(newOffer) {
        const updatedHorses = horses.map((horse) => {
          if(horse.id === newOffer.horseId) {
            const updatedOffers = horse.offers.push(newOffer);
            return {
              ...horse,
              offers:
              updatedOffers
            }
          }
          return horse;
        })
        setHorses(updatedHorses);
    }

    return (
        <Container>
            <Row>
            {filteredHorses.map((horse) => (
            <Col sm key={horse.id}>
                    
                        <HorseCard
                            horse={horse}
                            id={horse.id}
                            handleDeleted={handleDeleted}
                            setHorses={setHorses}
                            horses={horses}
                            offers={horse.offers}
                            handleNewOffer={handleNewOffer}
                        />
            </Col>
            ))}
            </Row>
        </Container>
    )

}

export default HorseList