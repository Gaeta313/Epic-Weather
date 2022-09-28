import { Col, Row } from "react-bootstrap";

//questo component visualizza a video la singola scheda meteo in una data fascia oraria
// visualizza inoltre ogni scheda meteo negli accordion item

const SingolaScheda = ({ city }) => {
  return (
    <Row>
      <Col xs={12} className="mx-auto">
        <Row className="mb-5">
          <Col xs={12} lg={5} className="mx-auto">
            <div className="mb-4 w-100">
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
          <Col xs={12} lg={5} className="mx-auto">
            <div>
              <p>Clouds : {city.clouds.all}%</p>
              <p>Humidity : {city.main.humidity}% </p>
              <p>Pressure : {city.main.pressure}b</p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={12} lg={5} className="mx-auto">
            <div>
              <p>Temp : {(city.main.temp - 273).toFixed(1)}C°</p>
              <p>Max : {(city.main.temp_max - 273).toFixed(1)}C°</p>
              <p>Min : {(city.main.temp_min - 273).toFixed(1)}C°</p>
            </div>
          </Col>
          <Col xs={12} lg={5} className="mx-auto">
            <div>
              <p>Wind Deg : {city.wind.deg}°</p>
              <p>Wind Speed : {city.wind.speed} m/s</p>
            </div>
          </Col>
        </Row>
        <div className="d-flex my-5 justify-content-around"></div>
      </Col>
    </Row>
  );
};

export default SingolaScheda;
