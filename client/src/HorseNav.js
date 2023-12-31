import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Search from "./Search";

function HorseNav({ currentUser, navigate, setCurrentUser, handleSearch, searchTerm, setSearchTerm }) {

    function handleLogoutClick() {
      fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          setCurrentUser(null);
          navigate('/login')
        }
      });
    }

  if(!currentUser) return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Hawkins Horses for Sale</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/horses">Horses</Nav.Link>
              <NavDropdown title="More" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/createprofile">
                  Create Profile
                </NavDropdown.Item>
                <NavDropdown.Item href="/login">
                  Login
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Search handleSearch={handleSearch}searchTerm={searchTerm}setSearchTerm={setSearchTerm}/>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Hawkins Horses for Sale</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/horses">Horses</Nav.Link>
            <NavDropdown title="More" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/addhorse">Add Horse</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Search handleSearch={handleSearch}searchTerm={searchTerm}setSearchTerm={setSearchTerm}/>
            <Button onClick={handleLogoutClick}>Logout</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HorseNav;