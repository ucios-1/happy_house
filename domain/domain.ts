export type InfoCardProps = {
    pictureSrc: any,
    cardTitle: string,
    cardTxt: string,
    link?: {
        goTo: string,
        txt: string
    },
    id?: string
}


export type CardsGrid = {
    elements: JSX.Element[],
    className?: string
}

export type RoomModalProps = {
    show: boolean, 
    dataToShow: {
        title: string
    }
    onHide: (() => void)
}

export type PageNavigation = {
    id: string, 
    name: string
}

export type PageNavigationProps = {
    nav: PageNavigation[]
}

export type AboutProps = {
    id?: string
}

export type HomeProps = {
    id?: string
}

export type DividerProps = {
    id?: string
}