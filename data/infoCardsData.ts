import { InfoCardProps } from "../domain/domain";

export const infoCardsData: InfoCardProps[] = [
    {
        pictureSrc: "/logos/outline-64-furnished-property.svg",
        cardTitle: "Komfortowe, przestronne pokoje",
        cardTxt: "Nasze pokoje charakteryzują się wysokim standardem oraz bogatym wyposażniem",
    },
    {
        pictureSrc: "/logos/outline-64-mobile-contact.svg",
        cardTitle: "Rezerwacja telefoniczna i online",
        cardTxt: "tel. (+48) 784 298 186",
        link: {
            goTo: "#",
            txt: "Rezerwój online"
        }
    },
    {
        pictureSrc: "/logos/outline-64-pin-heart.svg",
        cardTitle: "Rewelacyjna lokalizacja",
        cardTxt: "Hostel umiejscowiony w centrum Poznania tuż obok niezywkle istotnych punktów w mieście",
    },
    {
        pictureSrc: "/logos/outline-64-wifi-2.svg",
        cardTitle: "Bezpłatne WI-FI",
        cardTxt: "Na terenie naszego obiektu oferujemy zupełnie darmowy dostęp do internetu",
    }
]