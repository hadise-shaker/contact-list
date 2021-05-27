import React,{useState} from 'react'
import Button from "./Button"
const AddContact = ({action}) => {
    const [text, setText] = useState("")
    const [phone, setphone] = useState("")
    /* const [day, setDay] = useState("") */

const handleSave =(e)=>{ 
  
   if (!text) {
       alert("please add a task")
       return
   }
   /* let obj={} */
   /* this is adder task  */action({text})
   setText("");
   setphone("")
/*    setDay(""); */
   
}
    return (




        <div>
            <figure className="card-container" /* onClick={onclick} */>
               {/*  <img src={contact.picture} alt="" className="pic"/> */}
           
            <figcaption className="text-container">
                <input className="name" onChange={(e)=> setText(e.target.value)} value={text}  style={{backgroundColor:"transparent"}}/>
                <label htmlFor="">phone:</label>
                <input className="name" onChange={(e)=> setphone(e.target.value)} value={phone}  style={{backgroundColor:"transparent"}}/> 
{/*                 <p className="email"><span className="text-email">email:</span>{contact.email}</p>
                <p className="email"><span className="text-email">last:</span>{contact.last}</p>
                <p className="phone"><span className="text-phone">phone:</span>{contact.phone}</p> */}
            </figcaption>
            <Button onClick={handleSave} buttonLable="save" ></Button>
           {/*  {modal && <InfoModal name={name} ></InfoModal>} */}
            </figure>
        </div>

    )
}

export default AddContact
