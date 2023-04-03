import Head from 'next/head'
import CarouselSlider from '../components/helping-components/Carousel'
import styles from '../styles/Home.module.css'
import TopNavbar from '../components/Navbar';
import Cards from '../components/helping-components/CardsGrid';
import Footer from '../components/Footer';
import Divider from '../components/helping-components/Divider';
import { roomCardsData } from "../data/roomsData";
import RoomCard from '../components/helping-components/RoomCard';
import { PageNavigation } from '../domain/domain';
import About from '../components/About';
import HomeAnch from '../components/HomeAnch';
import Contact from '../components/Contact';

export default function Home() {

  const pageNavigation: PageNavigation[] = [
    {
      id: "home",
      name: "Home"
    },
    {
      id: "about",
      name: "O nas"
    },
    {
      id: "rooms",
      name: "Pokoje"
    },
    {
      id: "contact",
      name: "Kontakt"
    }
  ]

  const rooms = 
    roomCardsData.map((el, i) => 
      <RoomCard 
        key={"roomCards" + i.toString()}
        cardTitle={el.cardTitle}
        modalTitle={el.modalTitle}
        modalSubTitle={el.modalSubTitle}
        modalPrice={el.modalPrice}
        modalRoomEquipment={el.modalRoomEquipment}
        modalRoomDescription={el.modalRoomDescription}
        imageData={el.imageData}
      />
    )

  return (
    <div className={styles.container}>
      <Head>
        <title>Happy House hostel</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Website to present a Happy House hostel to the clients" />
        <meta name="keywords" content="HHH, hhh, happy house hostel, Happy House Hostel, hostel poznan, Happy House, happy house, happy hostel, Happy Hostel, hostel, poznan, poznan hostel, poznan rooms, rooms rent, poznan stay, poznan where to stay, rent in poznan, rent room, book room, book poznan" />
        <meta name="author" content="Leon Adarcewicz" />
        <link rel="icon" href="/hhh_color.ico" />
      </Head>

      <CarouselSlider id={ pageNavigation.map(el => el.id === "home" && el.id).filter(el => el !== false).join("") } />
      <TopNavbar nav={pageNavigation} />

      <HomeAnch id={pageNavigation.map(el => el.id === "about" && el.id).filter(el => el !== false).join("") } />
      <About />

      <Divider id={pageNavigation.map(el => el.id === "rooms" && el.id).filter(el => el !== false).join("") } />
      <div className={styles.container} >
        <Cards elements={rooms} className={"justify-content-center"}/>
      </div>

      <Divider id={pageNavigation.map(el => el.id === "contact" && el.id).filter(el => el !== false).join("") } />
      <Contact />

      <Footer /> 
    </div> 
  )
}
