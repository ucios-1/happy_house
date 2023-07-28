import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import { Col, Container, InputGroup, Row } from "react-bootstrap";
import DateRangePick from "./DateRangePicker";
import Calendar from "../../public/logos/outline-24-calendar-date-2.svg"
import { useState, useEffect } from "react";
import { DateStringSelection, MailProps } from "../../domain/domain";



export default function MailForm () {
    const [toggle, setToggle] = useState(false)
    const [datesSelection, setDatesSelection] = useState((): DateStringSelection => {
        return {}
    })
    const [mailProps, setMailProps] = useState(() :MailProps => {
        return {
            replyToEmail: "",
            startDate: "",
            endDate: "",
            longInput: ""
        }
    })

    useEffect(() => {
        window.addEventListener('scroll', () => { setToggle(false) });
    }, [])

    function hideCalendarIfNeeded(ev: React.MouseEvent<HTMLElement>) {
        if(
            (ev.target as HTMLElement).id === "replyToEmail" ||
            (ev.target as HTMLElement).id === "formSubmit" ||
            (ev.target as HTMLElement).id === "longInput"
        ) {
            setToggle(false)
        }
    }

    async function handleSubmission (ev: React.SyntheticEvent) {
        ev.preventDefault();
        
        const obj: MailProps = {
            ...mailProps, 
            startDate: datesSelection.startDate,
            endDate: datesSelection.endDate
        }

        
        const response = await fetch("/api/mailer", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj),
        });
        const responseData = await response.json();
        console.log('form responseData', responseData);

    }

    function handleChange (e: React.ChangeEvent<HTMLInputElement>)  {
        const evValue = e.currentTarget.value;
        const evID = e.currentTarget.id;
        const obj: MailProps = {
            ...mailProps, 
            [evID]: evValue 
        }

        setMailProps(obj)
    }

    return (
        <Container 
            fluid="md" 
            onClick={ hideCalendarIfNeeded }
        >
            <Row>
                <Col xl className="contactColumn">
                    Text goes here
                </Col>
                <Col xl className="contactColumn">
                    <Form onSubmit={ handleSubmission } >
                        <Row>
                            <Col md >
                                <Form.Group className="mb-3" controlId="replyToEmail">
                                    <Form.Label>Email kontaktowy</Form.Label>
                                    <Form.Control type="email" placeholder="example@mail.com" onChange={handleChange} />
                                </Form.Group>
                            </Col>
                            <Col md >
                                <Form.Label>Pobyt</Form.Label>
                                <InputGroup>
                                    <Button 
                                        id="calendarButton"
                                        variant="outline-secondary" 
                                        onClick={() => { setToggle(!toggle) }}
                                    >
                                        <Calendar className="noPointer" />
                                    </Button>
                                    <Form.Control 
                                        placeholder="Od" 
                                        value={datesSelection.startDate ? datesSelection.startDate : ""}
                                        readOnly 
                                    />
                                    <Form.Control 
                                        placeholder="Do"
                                        value={datesSelection.endDate ? datesSelection.endDate : ""} 
                                        readOnly  
                                    />
                                </InputGroup>
                                <div className={toggle ? "absolute" : "absolute hidden"}>
                                    <DateRangePick onRageSelect={setDatesSelection} />
                                </div>
                            </Col>
                        </Row>

                        <Form.Group className="mb-3" controlId="longInput" >
                            <Form.Label>Zapytanie</Form.Label>
                            <Form.Control as="textarea" rows={3} onChange={handleChange} />
                        </Form.Group>
                        
                        <Button 
                            id="formSubmit"
                            variant="primary" 
                            type="submit"
                        >
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
