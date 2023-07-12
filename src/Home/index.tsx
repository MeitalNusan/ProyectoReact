import { Link } from "react-router-dom"
function Home(){
    return(
 <>
 <main>
    <div className="contenedor">
            <div className="cinco">
                <Link to="/categorias"><button className="boton">Categorias</button> </Link>          
            </div>
    
            <div className="cinco">
            <Link to="/productos"><button className="boton">Productos</button> </Link>                
            </div>

            <div>
                <form>
                    <ul>
                        <li>
                            <label htmlFor="name">Nombre:</label>
                            <input type="text" id="name" name="user_name"/>
                        </li>
                        <li>
                            <label htmlFor="mail">Correo electrónico:</label>
                            <input type="email" id="mail" name="user_mail"/>
                        </li>
                        <li>
                            <label htmlFor="msg">Mensaje:</label>
                            <textarea id="msg" name="user_message"></textarea>
                        </li>
                        <li className="submit">
                            <button type="submit">Envíe su mensaje</button>
                        </li>
                    </ul>
                </form>
            </div>
    </div>
     
         
 
</main>
</>
    )
}

export default Home