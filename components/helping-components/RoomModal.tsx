import { Col, Container, Modal, Row } from "react-bootstrap";
import { RoomModalProps } from "../../domain/domain";
import Image from "next/image"
import React from "react";

export default function RoomModal(props: RoomModalProps) {
  const mainPic = props.dataToShow.imageData.find(first => first !== undefined) 
  const [pictSrc, setPictSrc] = React.useState({
    path: mainPic?.path || "No picture",
    alt: mainPic?.alt || "No picture"
  })

  const handleClose = () => {
    setPictSrc({
      path: mainPic?.path || "No picture",
      alt: mainPic?.alt || "No picture"
    })
    props.onHide()
  }

  return (
    <Modal
      show={props.show}
      onHide={handleClose}
      dialogClassName="modal-90w"
      fullscreen="sm-down"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.dataToShow.cardTitle}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <Image 
                src={pictSrc.path} 
                alt={pictSrc.alt}  
                width={500} 
                height={400} 
                className="modalMainPicture" 
              />
              <Container style={{padding: "0"}}>
                { props.dataToShow.imageData.map((image, i) => 
                    <Image 
                      key={image.path + i.toString()}
                      onClick={() => setPictSrc({path: image.path, alt: image.alt})} 
                      className="modalSmallPicture" 
                      src={image.path} 
                      alt={image.alt} 
                      width={50} 
                      height={50} 
                    />
                  )
                }
              </Container>
            </Col>
            <Col xs={12} md={6}>
              <h1 className="modalH1">{props.dataToShow.modalTitle}</h1>
              <h4>{props.dataToShow.modalSubTitle}</h4>
              <h6 className="priceGreen">{props.dataToShow.modalPrice} zł/doba. <span className="priceAdditional">Cena może ulec zmianie w zależności od okresu pobytu</span></h6>
              <p className="roomCardDescribe" >{ props.dataToShow.modalRoomDescription }</p>
              <ul>
                { props.dataToShow.modalRoomEquipment && props.dataToShow.modalRoomEquipment.map(el => 
                  <li key={props.dataToShow.modalTitle+"#"+el}>
                    {el}
                  </li> ) 
                }
              </ul>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  )
}