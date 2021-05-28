import React,{useState} from 'react'
import Button from "./Button";
import img from "./download.png"
const AddContact = ({action}) => {
    const [text, setText] = useState("")
    const [phone, setphone] = useState("")
    /* const [day, setDay] = useState("") */

const handleSave =(e)=>{ 
  
   if (!text) {
       alert("please add a name")
       return
   }
   if (!phone) {
    alert("please add a phone")
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
                <img src={img} alt="" className="pic"/>
           
            <figcaption className="text-container">
                <label htmlFor="name">name</label>
                <input className="name" onChange={(e)=> setText(e.target.value)} value={text}  style={{backgroundColor:"transparent"}}/>
                <label htmlFor="">phone:</label>
                <input className="name" onChange={(e)=> setphone(e.target.value)} value={phone}  style={{backgroundColor:"transparent"}}/> 
               <p className="email"><span className="text-email">email:</span><input type="text"/></p>
                <p className="email"><span className="text-email">last:</span><input type="text"/></p>
            </figcaption>
            <Button onClick={handleSave} buttonLable="save" ></Button>
           {/*  {modal && <InfoModal name={name} ></InfoModal>} */}
            </figure>
        </div>

    )
}

export default AddContact
