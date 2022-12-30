import Carousel from 'react-bootstrap/Carousel';
import Image from "next/image";
import { useState, useEffect } from 'react';

export default function CarouselSlider() {
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
    <Carousel variant="dark">
      <Carousel.Item>
        <Image 
            src="/images/happy_house_carousel_1.jpg" 
            alt="First slide" 
            width={windowSize.width} 
            height={windowSize.height} 
            className={"carousel_image"}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image 
            src="/images/happy_house_carousel_2.jpg" 
            alt="Second slide" 
            width={windowSize.width} 
            height={windowSize.height} 
            className={"carousel_image"}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image 
            src="/images/happy_house_carousel_3.jpg" 
            alt="Third slide" 
            width={windowSize.width} 
            height={windowSize.height} 
            className={"carousel_image"}
        />
      </Carousel.Item>
    </Carousel>
  );
}