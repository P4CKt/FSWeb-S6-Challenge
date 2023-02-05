import React, { useState } from "react"
import styled from "styled-components"
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Karakter(props){


const{data}=props

const SCCharacter= styled.div`
display:flex;
align-items: center;
flex-direction:column;

`
const SCNameCard= styled.h3`
font-size:15px;
text-align:center;
`
const SCIdCard= styled.li`
text-align:left;
list-style-type:none;
font-size:larger;
color:white;
`
const SCName=styled.p`
align-items:center;
margin-right:10vh;
margin-bottom:0;
width:350px;
`


const [open, setOpen] = useState("0");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }};

    return(
    <SCCharacter>
        
           <Accordion open={open} toggle={toggle}>
         <AccordionItem>
         <AccordionHeader targetId="1">{<SCName>{data.name}</SCName>}{<SCName>{data.birth_year}</SCName>}</AccordionHeader>
         <AccordionBody  accordionId="1">
           <SCIdCard>Height: {data.height}</SCIdCard> 
           <SCIdCard>Gender: {data.gender}</SCIdCard>
           <SCIdCard>Eye Color: {data.eye_color}</SCIdCard>
           <SCIdCard>Mass: {data.mass}</SCIdCard>
           <SCIdCard>Birth Year: {data.birth_year}</SCIdCard>
           <SCIdCard>Hair Color: {data.hair_color}</SCIdCard>
           <SCIdCard>Skin Color: {data.skin_color}</SCIdCard>
           {/* <SCIdCard>Films: {data.films}</SCIdCard> */}
            </AccordionBody>
           </AccordionItem>
           </Accordion> 
        
    </SCCharacter>  
    )
}




export default Karakter