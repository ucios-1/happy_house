import { InfoCardProps, ModalData } from "../domain/domain";

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

export const roomCardsData: ModalData[] = [
    {
        cardTitle: "COMFORT",
        modalTitle: "APARTAMENT TYPU COMFORT",
        modalSubTitle: "Apartament z łóżkiem małżeńskim typu Comfort", 
        modalPrice: "80",
        modalRoomEquipment: [
            "Darmowe Wi-Fi",
            "Darmowa kawa",
            "Darmowa herbata",
            "Kuchnia z lodówką i mikrofalówką",
            "Telewizja kablowa",
            "Budzenie na życzenie",
            "Żelazko",
            "Suszarka do włosów",
        ],
        imageData: [
            {
                path: "/images/comfort/apartament-2-osobowy-z-lozkiem-malzenskim_l.jpg",
                alt: "dummy",
            },
            {
                path: "/images/comfort/apartament-2-osobowy-z-lozkiem-malzenskim.1_l.jpg",
                alt: "dummy",
            },
            {
                path: "/images/comfort/apartament-2-osobowy-z-lozkiem-malzenskim.2_l.jpg",
                alt: "dummy",
            },
            {
                path: "/images/comfort/apartament-2-osobowy-z-lozkiem-malzenskim-ze-wspolna-lazienka.5_l.jpg",
                alt: "dummy",
            }
        ]
    },
    {
        cardTitle: "MAŁŻENSKI",
        modalTitle: "APARTAMENT TYPU MAŁŻENSKI",
        modalSubTitle: "Apartament z łóżkiem małżeńskim typu Comfort", 
        modalPrice: "100",
        modalRoomEquipment: [
            "Darmowe Wi-Fi",
            "Darmowa kawa",
            "Darmowa herbata",
            "Kuchnia z lodówką i mikrofalówką",
            "Telewizja kablowa",
            "Budzenie na życzenie",
            "Żelazko",
            "Suszarka do włosów",
        ],
        imageData: [
            {
                path: "/images/apartament-2-osobowy-z-lozkiem-malzenskim-i-osobna-lazienka.2_l.jpg",
                alt: "dummy",
            },
            {
                path: "/images/comfort/apartament-2-osobowy-z-lozkiem-malzenskim.1_l.jpg",
                alt: "dummy",
            },
            {
                path: "/images/comfort/apartament-2-osobowy-z-lozkiem-malzenskim.2_l.jpg",
                alt: "dummy",
            },
            {
                path: "/images/comfort/apartament-2-osobowy-z-lozkiem-malzenskim-ze-wspolna-lazienka.5_l.jpg",
                alt: "dummy",
            }
        ]
    },
    {
        cardTitle: "STUDIO",
        modalTitle: "APARTAMENT TYPU STUDIO",
        modalSubTitle: "Apartament z łóżkiem małżeńskim typu Comfort", 
        modalPrice: "110",
        modalRoomEquipment: [
            "Darmowe Wi-Fi",
            "Darmowa kawa",
            "Darmowa herbata",
            "Kuchnia z lodówką i mikrofalówką",
            "Telewizja kablowa",
            "Budzenie na życzenie",
            "Żelazko",
            "Suszarka do włosów",
        ],
        imageData: [
            {
                path: "/images/apartament-typu-studio-z-duzym-lozkiem-i-rozkladana-sofa_l.jpg",
                alt: "dummy",
            },
            {
                path: "/images/comfort/apartament-2-osobowy-z-lozkiem-malzenskim.1_l.jpg",
                alt: "dummy",
            },
            {
                path: "/images/comfort/apartament-2-osobowy-z-lozkiem-malzenskim.2_l.jpg",
                alt: "dummy",
            },
            {
                path: "/images/comfort/apartament-2-osobowy-z-lozkiem-malzenskim-ze-wspolna-lazienka.5_l.jpg",
                alt: "dummy",
            }
        ]
    },
    {
        cardTitle: "POKÓJ 3-OSOBOWY",
        modalTitle: "APARTAMENT TYPU POKÓJ 3-OSOBOWY",
        modalSubTitle: "Apartament z łóżkiem małżeńskim typu Comfort", 
        modalPrice: "100",
        modalRoomEquipment: [
            "Darmowe Wi-Fi",
            "Darmowa kawa",
            "Darmowa herbata",
            "Kuchnia z lodówką i mikrofalówką",
            "Telewizja kablowa",
            "Budzenie na życzenie",
            "Żelazko",
            "Suszarka do włosów",
        ],
        imageData: [
            {
                path: "/images/pokoj-4-osobowy-lozka-zwykle.6_l.jpg",
                alt: "dummy",
            },
            {
                path: "/images/comfort/apartament-2-osobowy-z-lozkiem-malzenskim.1_l.jpg",
                alt: "dummy",
            },
            {
                path: "/images/comfort/apartament-2-osobowy-z-lozkiem-malzenskim.2_l.jpg",
                alt: "dummy",
            },
            {
                path: "/images/comfort/apartament-2-osobowy-z-lozkiem-malzenskim-ze-wspolna-lazienka.5_l.jpg",
                alt: "dummy",
            }
        ]
    },
    {
        cardTitle: "POKÓJ 2-OSOBOWY / TWIN",
        modalTitle: "APARTAMENT TYPU POKÓJ 2-OSOBOWY / TWIN",
        modalSubTitle: "Apartament z łóżkiem małżeńskim typu Comfort", 
        modalPrice: "99",
        modalRoomEquipment: [
            "Darmowe Wi-Fi",
            "Darmowa kawa",
            "Darmowa herbata",
            "Kuchnia z lodówką i mikrofalówką",
            "Telewizja kablowa",
            "Budzenie na życzenie",
            "Żelazko",
            "Suszarka do włosów",
        ],
        imageData: [
            {
                path: "/images/pokoj-2-osobowy-lozka-zwykle_l.jpg",
                alt: "dummy",
            },
            {
                path: "/images/comfort/apartament-2-osobowy-z-lozkiem-malzenskim.1_l.jpg",
                alt: "dummy",
            },
            {
                path: "/images/comfort/apartament-2-osobowy-z-lozkiem-malzenskim.2_l.jpg",
                alt: "dummy",
            },
            {
                path: "/images/comfort/apartament-2-osobowy-z-lozkiem-malzenskim-ze-wspolna-lazienka.5_l.jpg",
                alt: "dummy",
            }
        ]
    }
]