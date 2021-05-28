import React ,{useState} from 'react'
import "./Search.css"
const Search = () => {
    const [myval, setMyval] = useState("")
    const AddVal =(e)=>{
        const filter = e.target.value
        const result =[filter.toLowerCase()]
        setMyval(result)
    }
    console.log(myval);
    return (
        <div className="search">
            <input type="text" onChange={(e)=>AddVal(e)} value={myval} className="input" placeholder="enter name"/>
         {/*   { !myval&& <List></List>} */}
            
        </div>
    )
}

export default Search