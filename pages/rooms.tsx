import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TopNavbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cards from '../components/helping-components/CardsGrid';
import RoomCard from '../components/helping-components/RoomCard';
import { roomCardsData } from '../data/infoCardsData';

export default function Home() {
  const elements = 
  roomCardsData.map((el, i) => 
      <RoomCard 
        key={"RoomCard"+i}
        pictureSrc={el.pictureSrc}
        cardTitle={el.cardTitle}
        cardTxt={el.cardTxt}
        link={el.link}
      />
    )
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <TopNavbar /> */}
      <Cards elements={elements} className={"justify-content-center"}/>
      <Footer />
    </div>
  )
}
