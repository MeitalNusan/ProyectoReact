import { Link } from "react-router-dom"
 

function Nav() {
    return(
        <>
        <ul className="nav">
            <div >
            <img className="imagenNav" src="https://www.seekpng.com/png/full/300-3004069_earth-comments-mundo-a-blanco-y-negro.png" alt="" />
            </div>
               <li> <Link to="/">Home</Link></li>
               <li> <Link to="/login">Login</Link></li>
               <li> <Link to="/register">Register</Link></li>
               <li> <Link to="/categorias">Categorias</Link></li>
               <li> <Link to="/productos">Productos</Link></li>   
        </ul>
        
        <section className="pattern">
            <div className="geeks">
                <h1></h1>
            </div>
        </section>
        
        </>
    )
}

export default Nav 