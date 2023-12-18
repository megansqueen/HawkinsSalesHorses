import React from "react";
import CreateOffer from './CreateOffer';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import OfferCard from './OfferCard';
import UpdatePic from './UpdatePic';
import { CardBody } from "react-bootstrap";

function HorseCard({ 
    horse,  
    handleDeleted,
    horses,
    setHorses,
    currentUser
}) {

    const {id, name, image, breed, color, skill, price, offers} = horse

    function handleDeleteClick() {
        const itemData = {
          id: id
        }
        fetch(`/delete`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
        },
          body: JSON.stringify(itemData),
        })
          .then((r) => r.json())
          .then((data) => handleDeleted(data))
    }

    function handleNewPicture(newItem) {
      console.log(newItem)
      const updatedHorses = horses.map((horse) => {
        if(horse.id === newItem.id) {
          return {
            ...horse,
            image:
            newItem.image
          }
        }
        return horse;
      })
      setHorses(updatedHorses)
    }



    // function handleDeletedReview(deletedReview) {
    //   const remainingReviews = reviews.filter((review) => review.id !== deletedReview.id)
    //     const updatedRides = rides.map((ride) => {
    //       if(ride.id === deletedReview.ride_id) {
    //         return {
    //           ...ride,
    //           reviews:
    //           remainingReviews
    //         }
    //       }
    //       return ride;
    //     })
    //     setRides(updatedRides)
    // }
    

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
      <CardBody>
        <UpdatePic handleNewPicture={handleNewPicture}image={image}name={name}id={id}offers={offers}/>
        </CardBody>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Name: {name}</ListGroup.Item>
        <ListGroup.Item>Breed: {breed}</ListGroup.Item>
        <ListGroup.Item>Color: {color}</ListGroup.Item>
        <ListGroup.Item>Skill: {skill}</ListGroup.Item>
        <ListGroup.Item>Price: ${price}</ListGroup.Item>
        <ListGroup.Item>Offers:</ListGroup.Item>
      </ListGroup>
        <ListGroup className="list-group-flush">
            {offers.map((offer) =>
                 <ListGroup.Item key={offer.id}>
                        <OfferCard
                            offer={offer}        
                            />
                        </ListGroup.Item>
                )}
        </ListGroup>
        <Card.Body>
            <CreateOffer 
                horse={horse}
                horses={horses}
                setHorses={setHorses}
                offers={offers}
                />
        </Card.Body>
      <Card.Body>
        <Button onClick={handleDeleteClick}variant="dark">Delete Horse</Button>
      </Card.Body>
    </Card>
  );
}

export default HorseCard;