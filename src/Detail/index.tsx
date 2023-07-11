import { useParams } from "react-router-dom";
import { useGetData } from "../hooks/useGetData";


interface Character{
    name: string;
    
    

}


function Detail() {

const { id } = useParams();
const { data, error, loading } = useGetData<Character>(
    `https://api.escuelajs.co/api/v1/categories/${id}`
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
        <div>
        {data && (
            <>
              <h1>Detalle de {data.name}</h1>
          </>
        
        )}
        </div>


    )
}

export default Detail;