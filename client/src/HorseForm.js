import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function HorseForm({
  handleNewHorse
}) {
  const[image, setImage] = useState("")
  const[name, setName] = useState("")
  const[breed, setBreed] = useState("")
  const[color, setColor] = useState("")
  const[skill, setSkill] = useState("")
  const[price, setPrice] = useState("")
  // :name, :image, :breed, :color, :skill, :price

  function handleReset() {
    setName("")
    setImage("")
    setBreed("")
    setColor("")
    setSkill("")
    setPrice("")
}

  function handleSubmit(e) {
    // e.preventDefault();
    const horseData = {
        image: image,
        name: name,
        breed: breed,
        color: color,
        skill: skill,
        price: price
    }
    fetch("http://localhost:9292/rides", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(horseData),
    })
    .then((r) => r.json())
    .then((newItem) => handleNewHorse(newItem))
    .then(handleReset)
}

  return (
    <div >
    <h2>Create Ride</h2>
    <Form className="Card"onSubmit={handleSubmit}>
          <Form.Control onChange={(e) => setName(e.target.value)}type="text" name="name" placeholder="Ride name" value={name}/>
          <Form.Control onChange={(e) => setBreed(e.target.value)}type="text" name="breed" placeholder="Breed" value={breed}/>
          <Form.Control onChange={(e) => setImage(e.target.value)}type="url" name="image" placeholder="Image URL" value={image}/>
          <Form.Control onChange={(e) => setColor(e.target.value)}type="text" name="color" placeholder="Color" value={color}/>
          <Form.Control onChange={(e) => setSkill(e.target.value)}type="text" name="skill" placeholder="Discipline" value={skill}/>
          <Form.Control onChange={(e) => setPrice(e.target.value)}type="integer" name="price" placeholder="Price" value={price}/>
        <Button type="submit">Add Park</Button>
    </Form>
  </div>
  );
}

export default HorseForm;