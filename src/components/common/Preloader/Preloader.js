import preloader from "../../../assets/images/loading.gif";
import React from "react";

let Preloader = (props) => {
    return (
        <div>
            <img width='60%' src={preloader} alt={'loader'}/>
        </div>
)}
 export default Preloader