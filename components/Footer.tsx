import { Container, Navbar, Nav } from "react-bootstrap";
import Image from "next/image";
import Spacer from "./helping-components/Spacer";

export default function Footer () {
    const date = new Date()
    const color = {
        color: "rgba(200, 200, 200, 0.9)"
    }
    return <>
        <Spacer />
        <Navbar 
            bg="dark" 
            expand="lg" 
            variant="dark" 
            fixed="bottom"
            className="footer"
        >
            <Container className="flex-column">
                {/* <Navbar id="basic-navbar-nav" className="justify-content-end" style={{width: "100%"}}>
                    <Nav className="justify-content-end flex-column">
                        <Nav.Link href="#home" style={color}>Home</Nav.Link>
                        <Nav.Link href="#link" style={color}>Pokoje</Nav.Link>
                        <Nav.Link href="#link" style={color}>Kontakt</Nav.Link>
                    </Nav>
                </Navbar> */}
                <Image 
                    className="blackLogo"
                    src="/logos/hhh_black.png" 
                    alt="Happy House Hostel black logo" 
                    width={50} 
                    height={50} 
                    priority
                />
                <br />
                <Nav.Link 
                    disabled
                    style={color}
                >
                    ©2014-{date.getFullYear()}
                </Nav.Link>
            </Container>
        </Navbar>
    </>
}