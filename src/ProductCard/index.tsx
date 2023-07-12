import { Link } from "react-router-dom"

interface Props{
    title: string;
    price:string;
    description:string;
     
    id:number;
    

}


function Producto({title, price, description, id}:Props){
      return(
        <div>
            <h1>{title}</h1>
            <p>{price}</p>
            <p>{description}</p>
             
             
        
            <Link to={`/producto/${id}`}>Detalle</Link>
           
        </div>
          
      
      
  )
}

export default Producto
