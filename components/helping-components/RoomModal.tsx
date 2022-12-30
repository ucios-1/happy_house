import { Col, Container, Modal, Row } from "react-bootstrap";
import { RoomModalProps } from "../domain/domain";
import Image from "next/image"
import React from "react";

export default function RoomModal(props: RoomModalProps) {
    const [pictSrc, setPictSrc] = React.useState("/images/comfort/apartament-2-osobowy-z-lozkiem-malzenskim.1_l.jpg")

    return (
      <Modal
        show={props.show}
        onHide={props.onHide}
        dialogClassName="modal-90w"
        fullscreen="sm-down"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.dataToShow.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <Image 
                            src={pictSrc} 
                            alt="dfdfd" 
                            width={500} 
                            height={400} 
                            className="modalMainPicture" 
                        />
                        <Container style={{padding: "0"}}>
                            <Image 
                                onClick={() => setPictSrc("/images/comfort/apartament-2-osobowy-z-lozkiem-malzenskim_l.jpg")} 
                                className="modalSmallPicture" 
                                src={"/images/comfort/apartament-2-osobowy-z-lozkiem-malzenskim_l.jpg"} 
                                alt="dfdfd" 
                                width={50} 
                                height={50} 
                            />
                            <Image 
                                onClick={() => setPictSrc("/images/comfort/apartament-2-osobowy-z-lozkiem-malzenskim.1_l.jpg")} 
                                className="modalSmallPicture" 
                                src={"/images/comfort/apartament-2-osobowy-z-lozkiem-malzenskim.1_l.jpg"} 
                                alt="dfdfd" 
                                width={50} 
                                height={50}
                            />
                            <Image className="modalSmallPicture" src={"/images/comfort/apartament-2-osobowy-z-lozkiem-malzenskim.2_l.jpg"} alt="dfdfd" width={50} height={50}/>
                            <Image className="modalSmallPicture" src={"/images/comfort/apartament-2-osobowy-z-lozkiem-malzenskim-ze-wspolna-lazienka.5_l.jpg"} alt="dfdfd" width={50} height={50}/>
                        </Container>
                    </Col>
                    <Col xs={12} md={6}>
                        <h1 className="modalH1">APARTAMENT TYPU COMFORT</h1>
                        <h4>Apartament z łóżkiem małżeńskim typu Comfort</h4>
                        <h6 className="priceGreen">80 zł/doba <span className="priceAdditional">w okresie targowym cena może ulec zmianie</span></h6>
                        <ul>
                            <li>Darmowe Wi-Fi</li>
                            <li>Darmowa kawa</li>
                            <li>Darmowa herbata</li>
                            <li>Kuchnia z lodówką i mikrofalówką</li>
                            <li>Telewizja kablowa</li>
                            <li>Budzenie na życzenie</li>
                            <li>Żelazko</li>
                            <li>Suszarka do włosów</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Modal.Body>
      </Modal>
    );
  }