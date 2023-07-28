export type CardLink = {
    goTo: string,
    txt: string
}

export type InfoCardProps = {
    pictureSrc: any,
    cardTitle: string,
    cardTxt: string,
    links?: CardLink[],
    id?: string
}


export type CardsGrid = {
    elements: JSX.Element[],
    className?: string
}

export type RoomModalProps = {
    show: boolean, 
    dataToShow: ModalData,
    onHide: (() => void)
}

export type ModalData = {
    cardTitle: string,
    modalTitle?: string,
    modalSubTitle?: string, 
    modalPrice: string,
    modalRoomEquipment?: string[],
    modalRoomDescription?: string,
    imageData: ImageModal[]
}

export type ImageModal = {
    path: string, 
    alt: string,
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

export type DateStringSelection = {
    startDate?: string;
    endDate?: string;
}

export type DateRageSelection = {
    startDate: Date;
    endDate: Date;
}

export type MailProps = {
    replyToEmail: string;
    longInput: string;
    startDate?: string;
    endDate?: string;
}