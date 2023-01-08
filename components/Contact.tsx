import { Container, Row, Col } from "react-bootstrap";
import Location from "../public/logos/outline-64-property-location.svg";
import Mobile from "../public/logos/outline-64-mobile-contact.svg";
import Mail from "../public/logos/outline-64-at-sign.svg";

export default function Contact () {
    return (
        <Container >
            <Row>
              <Col className="contactColumn">
                <h2>HAPPY HOUSE HOSTEL</h2>
                <h6 className="contactAdditionInfo">Dane kontaktowe</h6>
                <Row>
                  <Row>
                    <div className="col d-flex align-items-start">
                      <div className="icon-square d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3 iconYellow">
                        <Location  className="iconYellow" />
                      </div>
                      <div>
                        <h5>Adres</h5>
                        <p>ul. Wyspiańskiego 14/2 <br /> 60-750 Poznań</p>
                      </div>
                    </div>
                  </Row>
                  <Row>
                    <a href="tel:+48 784-298-186" className="contactNumber">
                      <div className="col d-flex align-items-start">
                        <div className="icon-square d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                          <Mobile  className="iconYellow" />
                        </div>
                        <div>
                          <h5>Kom.</h5>
                          <p>(+48) 784 298 186</p>
                        </div>
                      </div>
                    </a>
                  </Row>
                  <Row>
                    <div className="col d-flex align-items-start">
                      <div className="icon-square d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                        <Mail  className="iconYellow" />
                      </div>
                      <div>
                        <h5>Email</h5>
                        <a href="mailto:hhhostelpoznan@gmail.com">hhhostelpoznan@gmail.com</a>
                      </div>
                    </div>
                  </Row>
                </Row>
              </Col>
              <Col className="contactColumn">
                <div className="mapouter">
                  <div className="gmap_canvas">
                    <iframe width="700" height="600" id="gmap_canvas" src="https://maps.google.com/maps?q=Stanis%C5%82awa%20Wyspia%C5%84skiego%2014/2,%2060-750%20Pozna%C5%84&t=&z=15&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0}></iframe>
                    <a href="https://fmovies-online.net"></a>
                    <br />
                  </div>
                </div>
              </Col>
            </Row>
        </Container>
    )
}