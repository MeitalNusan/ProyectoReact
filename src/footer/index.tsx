import { Link } from "react-router-dom"
 

function Footer() {
    return(
        <>
        
        <div className="linea">
         </div>
        <ul className="footer">
             <li> <Link to="/"><img className="imagenFooter" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOBPb9bFgruTh5v0_xna_Z5fhJAC7FLHYX-OSYfrSqMQ&s" alt="" /></Link></li>      
        </ul>
        
        </>
    )
}

export default Footer