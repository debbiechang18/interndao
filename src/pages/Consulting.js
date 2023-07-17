import React from "react"
import "../styles/Consulting.css"
import Accordion from "../components/Accordion"
import AccordionNew from "../components/Accordion"
import consultingData from "../data/consulting.json"


const Consulting = () => {
    const path = window.location.pathname
    return (
        <>
            {/* <Accordion data={ consultingData }/> */}
            <AccordionNew data={ consultingData }/>
        </>
        )
    }

export default Consulting;