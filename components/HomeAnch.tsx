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
            key={"InfoCard" + i.toString()}
            pictureSrc={el.pictureSrc}
            cardTitle={el.cardTitle}
            cardTxt={el.cardTxt}
            links={el.links}
        />
        )

    return (
        <div >
            <Cards elements={elements} className={"justify-content-around"}  />
            <Divider id={props.id} />
            <Container className="homeAdvertContainer" id="cards">
                <Row xs={1} sm="auto" md="2" className="justify-content-around">
                    <Col xs="auto" className="justify-content-center">
                        <div>
                        <h2 className="homeAdvertHeader">Hostel w doskonałej lokalizacji</h2>
                        <p>Happy House Hostel to doskonałe miejsce dla osób, które szukają komfortowego i przystępnego cenowo zakwaterowania <span className="redBold">w centrum Poznania</span>, co zapewnia łatwy dostęp do najważniejszych atrakcji turystycznych, sklepów, restauracji i parków miejskich.</p>
                        <p>Hostel mieści się tuż obok <span className="redBold">Międzynarodowych Targów Poznańskich</span> oraz 10 min pieszo z <span className="redBold">Dworca Głównego w Poznaniu</span>. Zapraszamy zarówno tych, którzy przyjechali do Poznania w celach rekreacyjnych jak i tych, których przyjazd do naszego miasta zmusiła praca czy inne obowiązki.</p>
                        <p>W pobliżu hostelu znajdują się dwa urokliwe parki: <span className="redBold">Park Wilsona i Park Kasprowicza</span>. Każdy z tych parków ma swój niepowtarzalny urok i oferuje wiele możliwości relaksu i zabawy na świeżym powietrzu</p>
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