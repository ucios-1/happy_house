import { Container } from 'react-bootstrap'
import { AboutProps } from '../domain/domain'
import styles from '../styles/Home.module.css'

export default function About(props: AboutProps) {
    return (
        <div className={styles.container} id={props.id}>
          <Container className="aboutAdvert">
            <h1>Kameralny hostel - idealne miejsce na wypoczynek</h1>
            <p>Zapraszamy do naszego hostelu, który oferuje komfortowe warunki oraz bogate wyposażenie, aby Twój pobyt był niezapomniany. Nasz hostel położony jest <span className="redBold">w centrum miasta</span>, co umożliwia łatwy dostęp do wielu atrakcji turystycznych oraz sklepów i restauracji.</p>
            <p>Wszystkie nasze pokoje są przestronne i wyposażone w <span className="redBold">wygodne łóżka</span> oraz mają dostęp do <span className="redBold">wspólnej lub prywatnej łazienki</span>. Zapewniamy także <span className="redBold">świeżą pościel oraz ręczniki</span> dla każdego z naszych gości. Dla komfortu naszych klientów udostępniamy bezpłatny dostęp do WiFi w całym hostelu.</p>
            <p>Nasz hostel posiada także w pełni <span className="redBold">wyposażoną kuchnię</span>, gdzie nasi goście mogą przygotowywać własne posiłki. Zapewniamy także <span className="redBold">bezpłatną kawę i herbatę</span> przez cały dzień.</p>
            <p>W trosce o naszych gości, nasz personel jest zawsze do dyspozycji, aby pomóc w organizacji wycieczek, rezerwacji biletów lub innych potrzebnych informacji.</p>
            <p>Zapraszamy serdecznie do naszego hostelu, gdzie zadbamy o Twój komfort i satysfakcję podczas pobytu w naszym mieście</p>
          </Container>
        </div>
    )
}