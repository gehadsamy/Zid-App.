import { Container, Row } from "react-bootstrap";
import MainButton from "../../../shared/Button/MainButton";
import FeaturesCard from "../FeaturesCard/FeaturesCard";
import "./features.scss";

export default function Features() {
    return(
      <section className="Features">
        <Container className="Features__Container ">
          <div className="Features__title text-center">
          <h3>التطبيقات المميزة</h3>
          <p className="mb-4">تطبيقات تقدم حلول وخدمات مميزة نوصي بتجربتها</p>
          </div>
          <Row>
            <FeaturesCard/>
            <FeaturesCard/>
            <FeaturesCard/>
            <FeaturesCard/>
          </Row>
          <Row className="justify-content-center mt-4">
            <MainButton name="جميع التطبيقات" className="Features__button"></MainButton>
          </Row>
        </Container>
      </section>
 
    );
    
};
