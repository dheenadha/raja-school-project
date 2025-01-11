
import Topbar from './Topbar';
import Home from './Home';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Router, Routes,Navigate } from "react-router-dom";
function App() {

    return (
     <>
 <BrowserRouter>
 <Routes>
 <Route path="/" element={<Topbar/>} >
 <Route path="/home" element={<Home/>} />
 </Route>
 </Routes>
 </BrowserRouter>
     </>
    )
}
export default App
