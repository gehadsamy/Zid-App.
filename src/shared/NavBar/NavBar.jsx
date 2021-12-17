import { Container, Nav, Navbar } from "react-bootstrap";
import "./NavBar.scss";
import logo from "../../images/zid-logo.png";

function NavBar() {
  return (
    <Navbar className="navbar mb-5">
        <Navbar.Brand href="#home" className="col-xs-3">
          <img className="w-100" src={logo} alt="logo"></img>
        </Navbar.Brand>
      <Container className="navbar__container d-flex">
      
        <Nav className="col-xs-9 nav_link">
          <Nav.Link className="pe-5" href="#home">
            الرئيسية
          </Nav.Link>
          <Nav.Link href="#features">التصنيفات</Nav.Link>
          <Nav.Link href="#AppsReview">التطبيقات</Nav.Link>
          <Nav.Link href="#features">طور تطبيق</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
export default NavBar;
