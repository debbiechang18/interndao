import React from "react"
import "../styles/Contact.css"
import Accordion from "../components/Accordion"
import AccordionNew from "../components/Accordion"
import contactData from "../data/contact.json"



const Contact = () => {
    const path = window.location.pathname
    return (
        <>
            {/* <Accordion data={ contactData }/> */}
            <AccordionNew data={ contactData }/>
        </>
        )
    }

export default Contact;