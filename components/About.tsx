import { Container } from 'react-bootstrap'
import { AboutProps } from '../domain/domain'
import styles from '../styles/Home.module.css'

export default function About(props: AboutProps) {
    return (
        <div className={styles.container} id={props.id}>
          <Container className="aboutAdvert">
            <h1>Hostel z apartamentami w Poznaniu</h1>
            <p>"Happy House" to świetnie wyposażony Hostel oferujący tanie noclegi, do którego koniecznie musisz zajrzeć.</p>
            <p>Bez względu na to, czy potrzebujesz prywatności, czy chcesz poznać nowych ciekawych ludzi, znajdziesz odpowiedni pokój dla siebie. Zapraszamy zarówno tych, którzy przyjechali do Poznania w celach rekreacyjnych jak i tych, których przyjazd do naszego miasta zmusiła praca czy inne obowiązki i chcieliby wyspać się w atrakcyjnym apartamencie.</p>
          </Container>
          <Container className="aboutAdvert">  
            <h2>Dlaczego warto skorzystać z tanich noclegów w hostelu Happy House?</h2>
            <p>Przede wszystkim gwarantujemy naszym Klientom niezwykle komfortowe warunki noclegowe, dzięki którym każdy może poczuć się jak u siebie w domu. Pokoje są odpowiednio wyposażone by spełniać wymagania nawet najbardziej wymagających Klientów.</p>
            <p>Z pewnością naszym wielkim atutem jest lokalizacja. Nasz Hostel usytuowany jest w atrakcyjnym miejscu miasta Poznań.</p>
            <p>Dodatkowym elementem, który wyróżnia Happy House Hostel to dostępność apartamentów. Hostel przy ul. Wyspiańskiego dysponuje dwoma apartamentami, dzięki którym nocleg staje się bardziej komfortowy. Nasze apartamenty oferują wysoki standard wyposażenia przy zachowaniu bardzo atrakcyjnych cen. Happy House Hostel oferuje bowiem tanie noclegi również w apartamentach.</p>
            <p>Naszym Klientom dajemy możliwość rezerwacji noclegów on-line lub też telefonicznie.</p>
            <p>Jeśli interesują Cię tanie noclegi w Poznaniu skontaktuj się z Nami, znajdziesz nas również w Google wpisując popularne frazy związane z naszą działalnością typu: "Apartamenty Poznań" czy "tanie noclegi Poznań"!</p>
          </Container>
        </div>
    )
}