import { Col, Container, Row } from "react-bootstrap";
import "./appsreview.scss";
import group1 from "../../images/Group1.png";

import group2 from "../../images/Group2.png";
import group3 from "../../images/Group3.png";
import appsgif from "../../gif/apps-gif.gif";
import Pattern from "../../images/Pattern.png";
import Ellipse from "../../images/Ellipse.png";
import MainButton from "../../shared/Button/MainButton";

export default function AppsReview() {
  return (
    <section className="AppsReview mt-5">
      <Container className="AppsReview__container mt-5">
        <Row className="mt-5">
          <Col lg="5" md="6" xs="12">
            <h2>كل ما تحتاجه لنمو متجرك فى مكان واحد</h2>

            <p>
              مميزات سوق تطبيقات زد تساعدك في سهولة وسرعة الاستفادة من خدمات
              وحلول سوق التطبيقات لنمو متجرك ومضاعفة أرباحك
            </p>
            <ul>
              <li className="d-flex align-items-center ">
                <img
                  alt="group1"
                  className="img-fluid group1 group"
                  src={group1}
                ></img>
                سهولة ادارة و تفعيل تطبيقاتك من نفس لوحة تحكم متجرك
              </li>
              <li className="d-flex align-items-center">
                <img
                  alt="group2"
                  className="img-fluid group2 group"
                  src={group2}
                ></img>
                دعم فني و تقني متكامل متوفر على مدار الساعة
              </li>
              <li className="d-flex align-items-center mb-5">
                <img
                  alt="group3"
                  className="img-fluid group3 group"
                  src={group3}
                ></img>
                أسعار تنافسية مع تجربة مجانية وباقات اشتراك متنوعة
              </li>
              <MainButton name="تصفح التطبيقات" className="" />
            </ul>
          </Col>
          <Col lg="7" md="6" xs="12">
            <figure>
              <img
                alt="pattern"
                className="img-fluid Pattern"
                src={Pattern}
              ></img>
              <img
                alt="ellipse"
                className="img-fluid Ellipse"
                src={Ellipse}
              ></img>
              <img alt="apps" className="img-fluid appsgif" src={appsgif}></img>
            </figure>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
