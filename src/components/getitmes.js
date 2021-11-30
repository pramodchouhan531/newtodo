import React from "react";

const Getitems=()=>{
        const localtodo = JSON.parse(localStorage.getItem('todos'))
        console.log(localtodo)
        return(
            <>
             <li>{localtodo.map(el=>(
                 <>
                 <p>{el.description}</p>
                 <p>{el.title}</p>
                 </>
             ))}</li>
            </>
        )
}
export default Getitems;