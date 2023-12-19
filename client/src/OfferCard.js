import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

function OfferCard({    
    offer
}) {

    const {id, buyer, price} = offer

  return (
    <Card>
            <ListGroup className="list-group-flush" key={id}>
                  <ListGroup.Item>Buyer: {buyer}</ListGroup.Item>
                  <ListGroup.Item>Price: {price}</ListGroup.Item>
            </ListGroup>
          
      </Card>
  );
}

export default OfferCard;