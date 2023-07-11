import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout";
import Home from "./Home";
import NotFound from "./NotFound";
import Detail from "./Detail";
import Categorias from "./Categorias";
 
function App() {
     return (
          <BrowserRouter>
               <Routes>                  
                    <Route element={<Layout />} >
                         <Route path="/" element={<Home />} />
                         <Route path="/detail/:id" element={<Detail />}/>  
                         <Route path="/categorias" element={<Categorias />}/> 
                         <Route path="*" element={<NotFound />} />
                    </Route>  
               </Routes>
          </BrowserRouter>
     );
}

export default App
