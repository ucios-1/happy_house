import Carousel from 'react-bootstrap/Carousel';
import Image from "next/image";
import { useState, useEffect } from 'react';
import { HomeProps } from '../../domain/domain';

export default function CarouselSlider(props: HomeProps) {
  const [windowSize, setWindowSize] = useState({
    width: 10,
    height: 10,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth / 0.5,
        height: window.innerHeight / 3,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);
     
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return (
    <Carousel id={props.id} variant="dark">
      <Carousel.Item>
        <Image 
            src="/images/pokoj_z_prywatna_lazienka/lozko_z_sowa_2_sciany_i_okno.jpg" 
            alt="lozko z poduszką-sowa, komod, lustro i wyjście na balkon" 
            width={windowSize.width} 
            height={windowSize.height} 
            className={"carousel_image"}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image 
            src="/images/photo_slider/targi.jpg" 
            alt="Miejskie Targi Poznanskie" 
            width={windowSize.width} 
            height={windowSize.height} 
            className={"carousel_image"}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image 
            src="/images/pokoj_z_duzym_lozkiem/lozko_z_kotkiem_i_okno.jpg" 
            alt="lozko z kotkiem i okno" 
            width={windowSize.width} 
            height={windowSize.height} 
            className={"carousel_image"}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image 
            src="/images/photo_slider/katedra_i_domki_wieczorem.jpg" 
            alt="lozko z kotkiem i okno" 
            width={windowSize.width} 
            height={windowSize.height} 
            className={"carousel_image"}
        />
      </Carousel.Item>
      {/* <Carousel.Item>
        <Image 
            src="/images/photo_slider/stare_miasto_i_fontanna_wieczorem.png" 
            alt="lozko z kotkiem i okno" 
            width={windowSize.width} 
            height={windowSize.height} 
            className={"carousel_image"}
        />
      </Carousel.Item> */}
    </Carousel>
  );
}