import { Row, Col, Container } from "react-bootstrap";
import { CardsGrid } from "../../domain/domain";

export default function Cards (props: CardsGrid) {
    return (
        <Container fluid="md">
            <Row xs={1} sm="auto" md="auto" className={props.className}>
                {props.elements.map((element, i) => 
                    <Col xs="auto" key={element.key + i.toString()}>
                        {element}
                    </Col>
                )}
            </Row>
        </Container>
    )
}