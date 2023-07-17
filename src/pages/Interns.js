import React from "react"
import Accordion from "../components/Accordion"
import teamData from '../data/members.json'


const Interns = ({activePanel}) => {
    return (
        <>
            <Accordion data={ teamData } activePanel={{activePanel}}/>
        </>

        )
    }


    
export default Interns;