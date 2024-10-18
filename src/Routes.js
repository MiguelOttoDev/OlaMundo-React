import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Pag/Inicio";
import SobreMim from "./Pag/SobreMim";
import Menu from "./components/Menu";
import Rodape from "./components/Rodape";
import PagPadrao from "./components/PagPadrao";
import Post from "./Pag/Post";
import NaoEncontrada from "./Pag/NaoEncontrada";



function AppRoutes() {
  return (
    <BrowserRouter>

      <Menu/>
    
      <Routes>
      <Route path="/" element={<PagPadrao/>}>
      <Route index element={<Inicio/>} />
      <Route path="Sobremim" element={<SobreMim/>} />
      </Route>

      <Route path="posts/:id" element={<Post/>} />
      <Route path="*" element={<NaoEncontrada/>}/>

      </Routes>

      <Rodape/>
    </BrowserRouter>
  )
}
export default AppRoutes;
