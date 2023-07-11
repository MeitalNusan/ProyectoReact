import { Link } from "react-router-dom"

interface Props{
    name:string;
    id:number;
   
   
   
}

function Categoria({name,id}:Props){
      return(
        <div>
            <p>{name}</p>
            
        
            <Link to={`/detail/${id}`}>Ver mas</Link>
           
        </div>
          
      
      
  )
}

export default Categoria
