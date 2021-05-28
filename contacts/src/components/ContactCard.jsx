import React,{useState} from 'react'
import "./ContactCards.css"
import InfoModal from "./InfoModal";
import Button from "./Button"
const ContactCard = ({contact,onDelete}) => {
    const [modal, setModal] = useState(false);
    const [name, setname] = useState("")
    const onclick = () => {
        setModal(!modal);
        /* setfilter(lowercasedFilter) */
        /* setname(contact.name.first) */
      };
/*       const lowercasedFilter = name.toLowerCase();
      const [filter, setfilter] = useState({}) */
      
     /*  console.log(filter); */
    return (
        <div>
            <form className="card-container" onClick={onclick}>
                <img src={contact.picture} alt="" className="pic"/>
           
            <div className="text-container">
                <input className="name" onClick={(e)=>setname(e.target.value)} value={contact.name} readOnly style={{backgroundColor:"transparent"}}/> 
                <p className="email"><span className="text-email">email:</span>{contact.email}</p>
                <p className="email"><span className="text-email">last:</span>{contact.last}</p>
                <p className="phone"><span className="text-phone">phone:</span>{contact.phone}</p>
            </div>
            
            {modal && <InfoModal name={name} /* lastname={contact.name.last} */></InfoModal>}
            </form>
            <Button onClick={()=>onDelete(contact.id)} buttonLable="delete" ></Button>
        </div>
    )
}

export default ContactCard
