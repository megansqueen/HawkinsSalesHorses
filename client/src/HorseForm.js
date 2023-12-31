import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function HorseForm({
  handleNewHorse,
  currentUser
}) {
  const[image, setImage] = useState("")
  const[name, setName] = useState("")
  const[breed, setBreed] = useState("")
  const[color, setColor] = useState("")
  const[skill, setSkill] = useState("")
  const[price, setPrice] = useState("")
  const navigate = useNavigate()
  // :name, :image, :breed, :color, :skill, :price

  function handleReset() {
    setName("")
    setImage("")
    setBreed("")
    setColor("")
    setSkill("")
    setPrice("")
}

  const handlePriceInput = (e) => { 
    const value = e.target.value;
    const formattedValue = value.replace(/[^0-9]/g,'');
  setPrice(formattedValue)
  }

  function handleSubmit(e) {
    console.log(currentUser)
    // e.preventDefault();
    if (currentUser){
    const horseData = {
      horse: {
        image: image,
        name: name,
        breed: breed,
        color: color,
        skill: skill,
        price: price, 
        user_id: currentUser.user_id
      }
    }
    fetch("/addHorse", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(horseData),
    })
    .then((r) => r.json())
    .then((newItem) => handleNewHorse(newItem))
    .then(handleReset)
  } else {
    navigate('/login')
  }
}

  return (
    <div >
    <h2>Create Horse</h2>
    <Form className="Card"onSubmit={handleSubmit}>
          <Form.Control onChange={(e) => setName(e.target.value)}type="text" name="name" placeholder="Horse name" value={name}/>
          <Form.Control onChange={(e) => setBreed(e.target.value)}type="text" name="breed" placeholder="Breed" value={breed}/>
          <Form.Control onChange={(e) => setImage(e.target.value)}type="url" name="image" placeholder="Image URL" value={image}/>
          <Form.Control onChange={(e) => setColor(e.target.value)}type="text" name="color" placeholder="Color" value={color}/>
          <Form.Control onChange={(e) => setSkill(e.target.value)}type="text" name="skill" placeholder="Discipline" value={skill}/>
          <Form.Control onChange={handlePriceInput}type="currency" name="price" placeholder="Price" value={price}/>
        <Button type="submit">Add Horse</Button>
    </Form>
  </div>
  );
}

export default HorseForm;