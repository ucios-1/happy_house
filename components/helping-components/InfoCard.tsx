import { Container, Card } from 'react-bootstrap';
import { InfoCardProps } from '../../domain/domain';

export default function InfoCard(props: InfoCardProps) {
  return (
    <Card border="warning" className="infoCard">
        <Container style={{padding: "13%"}}>
            <Card.Img variant="top" src={ props.pictureSrc } />
        </Container>
      <Card.Body>
        <Card.Title as="h5">{ props.cardTitle }</Card.Title>
        <Card.Text> { props.cardTxt } </Card.Text>
          { props.links && props.links.map((link, i) => 
            <Card.Link 
              key={ props.cardTitle + i.toString() } 
              href={ link.goTo }
              className="infoCardLinks"
              >
                { link.txt }
            </Card.Link> )
          }
      </Card.Body>
    </Card>
  );
}