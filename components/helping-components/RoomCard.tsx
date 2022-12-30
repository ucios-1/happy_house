import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { InfoCardProps } from '../../domain/domain';
import RoomModal from './RoomModal';

export default function RoomCard(props: InfoCardProps) {
  const [modalShow, setModalShow] = React.useState(false);
  const modalData = {
    title: props.cardTitle
  }

  return (
    <>
      <Card className="bg-light text-dark roomCard" >
          <Card.Header>{ props.cardTitle }</Card.Header>
          <Card.Body className="noPadding">
              <Card.Img src={ props.pictureSrc } onClick={() => setModalShow(true)} className="sharpEdges pointer" />
          </Card.Body>
          <div className="d-grid gap-2">
              <Button size="lg" variant="warning" className="sharpTopEdges">{ props.cardTxt }</Button>
          </div>
      </Card>
      <RoomModal
        show={modalShow}
        dataToShow={modalData}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}