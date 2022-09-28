import { useState } from "react";
import { Accordion, Button, Container } from "react-bootstrap";
import SingolaScheda from "./SingolaScheda";

// visualizza la sezione accordion

const AccordionMenu = ({ city }) => {
  const [show, setShow] = useState(false);
 

  return (
    <Container >
        <Button className="my-5" variant="primary" onClick={() => {
            show? setShow(false) : setShow(true);
        }} >
            Mostra/Nascondi Previsioni Future
        </Button>
      {show && (
        <Accordion >
          {city.map((obj, i) => (
            <Accordion.Item className="accordion" key={i} eventKey={i}>
              <Accordion.Header >Date : {obj.dt_txt}</Accordion.Header>
              <Accordion.Body>
                <SingolaScheda city={obj} />
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      )}
    </Container>
  );
};

export default AccordionMenu;
