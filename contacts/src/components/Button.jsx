import React from 'react'
import Proptypes from "prop-types";
import "./Button.css"
const Button = ({buttonLable, classes , onClick})=>{

    return(
        <div className="btn-container">
            <button  onClick={()=> onClick("test")} className={`btn ${classes}`} /* style= {{backgroundColor: classes}} */>{
                buttonLable}
                </button>
                </div>
    )
}
Button.propTypes = {
    buttonLable: Proptypes.string,
    classes : Proptypes.string,
   /*  btncolor : Proptypes.string, */
    onClick : Proptypes.func,
}
export default Button
