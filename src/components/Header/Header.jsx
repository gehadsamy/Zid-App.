import { Container } from "react-bootstrap";
import MainButton from "../../shared/Button/MainButton";
import "./header.scss";
import banner from "../../gif/banner.gif";
import Pattern from "../../images/Pattern.png";

import Ellipse from "../../images/Ellipse.png";
import NavBar from "../../shared/NavBar/NavBar";

export default function Header() {
  return (
    <section className="header mt-5 mb-5" id="home">
        <NavBar/>
      <Container className="header__container text-center">
        <h1 className="">طور متجرك ووسع آفاق تجارتك مع سوق تطبيقات زد</h1>
        <p className="header__content col-md-6 col-lg-5 col-xs-10 m-auto mt-1 mb-4">
          طور تجارتك من خلال تطبيقات وحلول سوق تطبيقات زد التي تساعدك في نمو
          أرباحك عبر إدارة عمليات متجرك بشكل فعال واحترافي
        </p>
        <MainButton name="تصفح التطبيقات" className="" />
        <div className="banner__container row justify-content-center">
          <div className="col-7 img-container">
            <img className="banner" src={banner} alt="banner" ></img>
            <img className="img-fluid Pattern" src={Pattern} alt="pattern" ></img>
            <img className="img-fluid Ellipse" src={Ellipse} alt="ellipse" ></img>
          </div>
          
        </div>
      </Container>
    </section>
  );
}
