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

export const roomCardsData: InfoCardProps[] = [
    {
        pictureSrc: "/images/comfort/apartament-2-osobowy-z-lozkiem-malzenskim.1_l.jpg",
        cardTitle: "COMFORT",
        cardTxt: "80 zł/doba",
    },
    {
        pictureSrc: "/images/apartament-2-osobowy-z-lozkiem-malzenskim-i-osobna-lazienka.2_l.jpg",
        cardTitle: "MAŁŻENSKI",
        cardTxt: "100 zł/doba",
    },
    {
        pictureSrc: "/images/apartament-typu-studio-z-duzym-lozkiem-i-rozkladana-sofa_l.jpg",
        cardTitle: "STUDIO",
        cardTxt: "120 zł/doba",
    },
    {
        pictureSrc: "/images/pokoj-4-osobowy-lozka-zwykle.6_l.jpg",
        cardTitle: "POKÓJ 3-OSOBOWY",
        cardTxt: "100 zł/doba",
    },
    {
        pictureSrc: "/images/pokoj-2-osobowy-lozka-zwykle_l.jpg",
        cardTitle: "POKÓJ 2-OSOBOWY / TWIN",
        cardTxt: "99 zł/doba",
    }
]