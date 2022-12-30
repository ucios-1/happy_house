import { infoCardsData } from "../data/infoCardsData";
import { HomeProps } from "../domain/domain";
import { Col, Container, Row } from 'react-bootstrap';
import Cards from "./helping-components/CardsGrid";
import InfoCard from "./helping-components/InfoCard";
import Image from "next/image";
import Divider from "./helping-components/Divider";

export default function HomeAnch(props: HomeProps) {
    const elements = 
        infoCardsData.map((el, i) => 
        <InfoCard 
            key={"InfoCard" + i}
            pictureSrc={el.pictureSrc}
            cardTitle={el.cardTitle}
            cardTxt={el.cardTxt}
            link={el.link}
        />
        )

    return (
        <div id={props.id}>
            <Cards elements={elements} className={"justify-content-around"}  />
            <Divider />
            <Container className="homeAdvertContainer" id="cards">
                <Row xs={1} sm="auto" md="2" className="justify-content-around">
                    <Col xs="auto" className="justify-content-center">
                        <div>
                        <h2 className="homeAdvertHeader">Hostel w doskonałej lokalizacji</h2>
                        <p>m.in. z parkiem Wilsona, Areną czy Międzynarodowymi Targami Poznańskimi. Szybki dojazd komunikacją miejską w każdy zakątek Poznania. W ofercie pokoje 2-8 osobowe oraz luksusowe i zarazem tanie noclegi w apartamentach.</p>
                        <p>Sprawdź już teraz czy termin, który Cię interesuje jest dostępny.</p>
                        </div>
                    </Col>
                    <Col xs="auto">
                        <Image 
                            src="/images/Park_Wilsona_z_lotu_ptaka.jpg" 
                            alt="Photo of Wilson Park " 
                            width="600" 
                            height="400" 
                            className="resizePicture"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}