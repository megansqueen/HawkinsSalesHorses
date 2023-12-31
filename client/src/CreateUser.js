import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CreateUser({ setCurrentUser }) {
    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")
    const[errors, setErrors] = useState([])


    function clearOut(){
        setPassword("")
        setUsername("")
    }

    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        const user = {
          user: {
          username,
          password
        }}
        fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }).then((r) => {
          if (r.ok) {
            r.json().then(setCurrentUser);
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
      }

  return (
    <Container fluid>
        <Card style={{ width: '35rem' }}>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username (Email Address)</Form.Label>
                    <Form.Control onChange={(e) => setUsername(e.target.value)}type="email" placeholder="Enter email"value={username}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(e) => setPassword(e.target.value)}type="password" placeholder="Enter password" value={password}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                </Form.Group>
                <Button variant="primary" type="submit" value="Login">
                    Create Profile
                </Button>
                </Form>
            </Card.Body>
        </Card>
    </Container>
  );
}

export default CreateUser;