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
    setHorses
}) {

    const {id, name, image, breed, color, skill, price} = horse

    function handleDeleteClick() {
        fetch(`/delete`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then(() => handleDeleted(id))
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

    const handleNewOffer = (newOffer) => {
      const updatedHorses = horses.map((horse) => {
        if(horse.id === newOffer.horse_id) {
          return {
            ...horse,
            offers:
            [...offers, newOffer]
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
        <ListGroup.Item>Park: {park}</ListGroup.Item>
        <ListGroup.Item>Reviews:</ListGroup.Item>
      </ListGroup>
        <ListGroup className="list-group-flush">
            {reviews.map((review) =>
                 <ListGroup.Item key={review.id}>
                        <ReviewCard
                            review={review}
                            handleDeletedReview={handleDeletedReview}          
                            />
                        </ListGroup.Item>
                )}
        </ListGroup>
        <Card.Body>
            <CreateReview 
                rides={rides}
                setRides={setRides}
                id={id}
                reviews={reviews}
                handleNewReview={handleNewReview}
                />
        </Card.Body>
      <Card.Body>
        <Button onClick={handleDeleteClick}variant="dark">Delete Ride</Button>
      </Card.Body>
    </Card>
  );
}

export default HorseCard;