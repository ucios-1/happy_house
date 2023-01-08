import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { ModalData } from '../../domain/domain';
import RoomModal from './RoomModal';

export default function RoomCard(props: ModalData) {
  const mainPic = props.imageData.find(first => first !== undefined);
  const [modalShow, showModal] = React.useState(false);

  return (
    <>
      <Card className="bg-light text-dark roomCard" >
          <Card.Header>{ props.cardTitle }</Card.Header>
          <Card.Body className="noPadding">
            <div className="roomCardPictureContainer horizontalCenter">
              <Card.Img src={ mainPic?.path } onClick={() => showModal(true)} className="sharpEdges roomCardPicture pointer" />
            </div>
          </Card.Body>
          <div className="d-grid gap-2">
              <Button size="lg" variant="warning" className="sharpTopEdges">{ props.modalPrice } zł/doba</Button>
          </div>
      </Card>
      <RoomModal
        show={modalShow}
        dataToShow={props}
        onHide={() => showModal(false)}
      />
    </>
  );
}