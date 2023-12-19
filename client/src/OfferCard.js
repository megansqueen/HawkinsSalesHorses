import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';

function OfferCard({    
    offer,
    currentUser,
    handleNewOffer
}) {

    const {id, buyer, price, user_id, horse_id} = offer
    const [isEditable, setIsEditable] = useState(false)
    const [updatedPrice, setUpdatedPrice] = useState(price)

    useEffect(() => {
      if (currentUser) {
        if (user_id === JSON.stringify(currentUser.id))
          setIsEditable(true)
      }
    }, [])

    const handlePriceInput = (e) => { 
      const value = e.target.value;
      const formattedValue = value.replace(/[^0-9]/g,'');
      setUpdatedPrice(formattedValue)
    }

    function handleUpdate(e) {
      console.log(updatedPrice)
      e.preventDefault();
      const offerData = {
          buyer: buyer,
          user_id: user_id,
          horse_id: horse_id,
          price: updatedPrice
      }
      fetch(`/offerUpdate`, {
          method: "PATCH",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(offerData),
      })
      .then((r) => r.json())
      .then((offer) => handleNewOffer(offer))
  }

  console.log(isEditable)
  console.log(offer)

  return (
    <Card>
            <ListGroup className="list-group-flush" key={id}>
                  <ListGroup.Item>Buyer: {buyer}</ListGroup.Item>
                  {(!isEditable) && (
                    <ListGroup.Item>Price: {updatedPrice}</ListGroup.Item>
                  )}
                  {(isEditable) && (
                    <Form className="Card"onSubmit={handleUpdate}>Update Offer
                      <Form.Control onChange={handlePriceInput}type="text" name="price" placeholder={updatedPrice} value={updatedPrice}/>
                      <Button type="submit">Update Offer</Button>
                    </Form>
                  )}
            </ListGroup>
          
      </Card>
  );
}

export default OfferCard;