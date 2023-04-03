import { InfoCardProps } from "../domain/domain";

export const infoCardsData: InfoCardProps[] = [
    {
        pictureSrc: "/logos/outline-64-furnished-property.svg",
        cardTitle: "Komfortowe i przestronne pokoje",
        cardTxt: "Oferujemy wygodne zakwaterowanie w prywatnych pokojach i apartamentach",
    },
    {
        pictureSrc: "/logos/outline-64-pin-heart.svg",
        cardTitle: "Doskonała lokalizacja",
        cardTxt: "Hostel umiejscowiony w centrum tuż obok Dworca Głównego i Międzynarodowych Targów Poznańskich",
    },
    {
        pictureSrc: "/logos/outline-64-pan.svg",
        cardTitle: "Wyposażona kuchnia",
        cardTxt: "Wszystkie prywatne pokoje mają dostęp do wygodnej wyposażonej kuchni",
    },
    {
        pictureSrc: "/logos/outline-64-mobile-contact.svg",
        cardTitle: "Rezerwacja telefoniczna i online",
        cardTxt: "Zadzwoń +48 784 298 186",
        links: [{
            goTo: "mailto:leon_adarcewicz@mckinsey.com",
            txt: "Napisz"
        },
        {
            goTo: "#",
            txt: "Lub rezerwój online"
        }]
    }
]