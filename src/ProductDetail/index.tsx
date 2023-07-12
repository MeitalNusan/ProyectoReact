import { useParams } from "react-router-dom";
import { useGetData } from "../hooks/useGetData";


interface Character{
    name: string;
    
    

}


function ProductDetail() {

const { id } = useParams();
const { data, error, loading } = useGetData<Character>(
    `https://api.escuelajs.co/api/v1/products/${id}`
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

return ( 
        <div className="productoDetalle">
        {data && (
            <>
              <h1>{data.title}</h1>
              <p>Precio: ${data.price}</p>
              <p>Descripción: "{data.description}"</p>
          </>
        
        )}
        </div>


    )
}

export default ProductDetail;