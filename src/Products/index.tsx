
import { useGetData } from "../hooks/useGetData"; 
import Producto from "../ProductCard";



interface Produ{
    title: string;
    price:string;
    description:string;
    id:number;
    categoria:object;
    

}


function Productos() {


const { data, error, loading } = useGetData<Produ>(
    `https://api.escuelajs.co/api/v1/products`
    )

        if (loading){
            return <h1>Cargando...</h1>
        }

        if (error){
            return(
                <>
                  <h1>Error...</h1>
                  <p>{error}</p>
                </>
            )
        }   

        return(
            <>
           
            <div className="categorias">
                
                 {data && (
                  data.map((produc) => {
                    return(
                      
                      <div>
                      <img className="fotosProductos" src={produc.category.image} alt="" />             
                    <div/>
                    <div className="producto">
                      <Producto 
                      key={produc.id}
                      id={produc.id}
                      title={produc.title}
                      /> 
                      </div>
                     </div>
                  
                   
                    )
                  })
                
                 )}  
                  
                  
    
              </div>
              
              </>
          
      )
}

export default Productos