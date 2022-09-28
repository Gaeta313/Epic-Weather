import { Col, Row } from "react-bootstrap";

//questo component mostra le previsioni future sulla colonna di destra

const SchedaNext = ({ city }) => {
  return (
    <Row className="mb-1">
      <Col xs={12} className="mx-auto">
        <div>
          <h5>Data : {city.dt_txt}</h5>
        </div>
        <Row>
          <Col xs={12} md={5} className="mx-auto">
            <div className="mb-4">
              <h5>{city.weather[0].main}</h5>
              <img
                src={
                  "http://openweathermap.org/img/w/" +
                  city.weather[0].icon +
                  ".png"
                }
                alt="icon"
              />
            </div>
          </Col>
          <Col xs={12} md={5} className="mx-auto">
            <div>
              <p>Temp : {(city.main.temp - 273).toFixed(1)}C°</p>
              <p>Max : {(city.main.temp_max - 273).toFixed(1)}C°</p>
              <p>Min : {(city.main.temp_min - 273).toFixed(1)}C°</p>
            </div>
          </Col>
        </Row>
        <div className="d-flex my-1 justify-content-around"></div>
      </Col>
    </Row>
  );
};

export default SchedaNext;
