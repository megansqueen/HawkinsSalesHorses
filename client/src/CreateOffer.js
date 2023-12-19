import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CreateOffer({ 
    horse,
    handleNewOffer,
    currentUser
}) 

{
    const [buyer, setBuyer] = useState([])
    const [price, setPrice] = useState("")

    function handleReset() {
        setBuyer("")
        setPrice("")
    }

    const handlePriceInput = (e) => { 
        const value = e.target.value;
        const formattedValue = value.replace(/[^0-9]/g,'');
        setPrice(formattedValue)
      }

    function handleSubmit(e) {
        e.preventDefault();
        const offerData = {
            buyer: buyer,
            price: price,
            horse_id: horse.id,
            user_id: currentUser.user_id
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

    return (
        <div >
        <Form className="Card"onSubmit={handleSubmit}>Leave Offer
                    <Form.Control onChange={(e) => setBuyer(e.target.value)}type="text" name="buyer" placeholder="Your Name" value={buyer}/>
                    <Form.Control onChange={handlePriceInput}type="text" name="price" placeholder="What is your offer?" value={price}/>
                <Button type="submit">Add Offer</Button>
            </Form>
      </div>
    )

}

export default CreateOffer