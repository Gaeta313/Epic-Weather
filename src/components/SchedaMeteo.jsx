import { Col, Container, Row } from "react-bootstrap";
import AccordionMenu from "./AccordionMenu";
import SchedaNext from "./SchedaNext";
import SingolaScheda from "./SingolaScheda";

// questo component racchiude tutti i component che visualizzano informazioni sul meteo

const SchedaMeteo = ({ city, cityFore }) => {
  return (
    <Container className="myClass mb-5">
      <Row className="my-5">
        <Col xs={12} sm={5} className="mx-auto">
          <h3>
            {city.name}
            {", "} {city.sys.country}
          </h3>
          <div>
            <span>
              lat : {city.coord.lat}, lon : {city.coord.lon}
            </span>
          </div>
        </Col>
      </Row>
      <Row className="my-5">
        <Col xs={12} sm={5} className="mx-auto">
          <Row>
            <Col xs={12} className="mx-auto">
              <h4>Now</h4>
              <SingolaScheda city={city} />
            </Col>
          </Row>
        </Col>
        <Col xs={12} sm={5} className="mx-auto">
          {
            //visualiza  solo i primi 3 elementi
            cityFore.list.map((obj, i) => {
              return i < 3 && <SchedaNext key={i} city={obj} />;
            })
          }
        </Col>
      </Row>
      <Row>
        <Col xs={10} className="mx-auto">
          <AccordionMenu city={cityFore.list} />
        </Col>
      </Row>
    </Container>
  );
};

export default SchedaMeteo;
