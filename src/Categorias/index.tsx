
import { useGetData } from "../hooks/useGetData"; 
import Categoria from "../CategoriaCard";


interface Categoria{
    name: string;
    status:string;
    species:string;
    type:string;

}


function Categorias() {


const { data, error, loading } = useGetData<Categoria>(
    `https://api.escuelajs.co/api/v1/categories`
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
                  data.map((categ) => {
                    return(
                      
                      <div>
                      <img className="detalleFotos" src={categ.image} alt="" />             
                    <div/>
              
                      <Categoria 
                      key={categ.id}
                      id={categ.id}
                      name={categ.name}
                      /> 
                     </div>
                  
                   
                    )
                  })
                
                 )}  
                  
                  
    
              </div>
              
              </>
          
      )
}

export default Categorias;