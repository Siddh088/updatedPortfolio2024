import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaLessThan, FaGreaterThan } from "react-icons/fa";
import { BsSlashLg } from "react-icons/bs";
import { RxSlash } from "react-icons/rx";
import "./Navbar.css";

function Navs() {
  return (
    <Navbar
      expand="lg"
      className=" "
      // style={{ backgroundColor: "#02141F", padding: "10px" }}
    >
      <Container>
        <div>
          <FaLessThan color="#ffff" size="40px" />
          <Navbar.Brand href="#home">Siddhant Bhandari</Navbar.Brand>
          <RxSlash
            size="40px"
            color="#9067C6"
            style={{ marginLeft: "-10px" }}
          />
          <FaGreaterThan
            color="#ffff"
            size="40px"
            style={{ marginLeft: "-15px" }}
          />
        </div>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="nav-mobile"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#project">Projects</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navs;
