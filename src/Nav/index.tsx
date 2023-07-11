import { Link } from "react-router-dom"
 

function Nav() {
    return(
        <ul className="nav" type="none">
             
               <li> <Link to="/">Home</Link></li>
               <li> <Link to="/login">Login</Link></li>
               <li> <Link to="/register">Register</Link></li>
               <li> <Link to="/categorias">Categorias</Link></li>
               <li> <Link to="/productos">Productos</Link></li>
               
           
        </ul>
    )
}

export default Nav 