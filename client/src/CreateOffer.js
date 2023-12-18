import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CreateOffer({ 
    horse,
    horses,
    setHorses,
    offers
}) 

{
    const [buyer, setBuyer] = useState([])
    const [price, setPrice] = useState([])

    function handleReset() {
        setBuyer("")
        setPrice("")
    }

    function handleSubmit(e) {
        e.preventDefault();
        const offerData = {
            buyer: buyer,
            price: price,
            user_id: horse.user_id,
            horse_id: horse.id
        }
        fetch(`/offers`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(offerData),
        })
        .then((r) => r.json())
        .then((offer) => handleNewOffer(offer))
        .then(handleReset)
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

    return (
        <div >
        <Form className="Card"onSubmit={handleSubmit}>Leave Offer
                    <Form.Control onChange={(e) => setBuyer(e.target.value)}type="text" name="buyer" placeholder="Your Name" value={buyer}/>
                    <Form.Control onChange={(e) => setPrice(e.target.value)}type="text" name="price" placeholder="What is your offer?" value={price}/>
                <Button type="submit">Add Offer</Button>
            </Form>
      </div>
    )

}

export default CreateOffer