import React,{useState} from 'react'
import "./ContactCards.css"
import InfoModal from "./InfoModal";
import ContactCard from "./ContactCard"
const ContactCards = ({contactList,onDelete}) => {
    contactList.name&&console.log(contactList.name);

    return (
        <>
        {contactList?.map((contact,index)=>(
            <ContactCard key={index} contact={contact} onDelete={onDelete}></ContactCard>
        ))} 
        </>
    )
}

export default ContactCards
