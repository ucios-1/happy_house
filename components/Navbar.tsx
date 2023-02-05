import { Container, Navbar, Nav } from "react-bootstrap";
import Image from "next/image";
import Spacer from "./helping-components/Spacer";
import { PageNavigationProps } from "../domain/domain";

export default function TopNavbar (props: PageNavigationProps) {
    return <>
        <Navbar expand="lg" variant="light" sticky="top" className="navBar">
            <Container>
                <Navbar.Brand href="tel:+48 784-298-186">
                    <Image 
                        src="/images/happy_house_logo.png" 
                        alt="Happy House Hostel logo" 
                        width={50} 
                        height={50} 
                        priority
                    />
                </Navbar.Brand>
                <a href="tel:+48 784-298-186" className="contactNumber">(+48) 784 298 186</a>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="justify-content-end">
                        { props.nav.map(navLink => 
                            <Nav.Link 
                                key={"navLink" + navLink.id}
                                className="navBarLinks" 
                                href={"#"+navLink.id}
                            >
                                    {navLink.name}
                            </Nav.Link>
                            ) 
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Spacer />
    </>
}