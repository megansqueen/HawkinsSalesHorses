import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

function Login({ setCurrentUser }) {
    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")
    const[errors, setErrors] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }).then((r) => {
          setIsLoading(false);
          if (r.ok) {
            r.json().then((user) => setCurrentUser(user));
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
                <Form.Group>
                    <Button variant="primary" type="Login" value="Create Profile">
                        {isLoading ? "Loading..." : "Login"}
                    </Button>
                </Form.Group>
                <Form.Group>
                    {errors.map((err) => (
                        <Form.Error key={err}>{err}</Form.Error>
                    ))}
                </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    </Container>
  );
}

export default Login;