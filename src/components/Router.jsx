import { Routes,Route } from "react-router-dom";

import Index from "../User/Index";
import Home from "../User/Home";

export default function Router() {
    <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/home" element={<Home/>}/>
    </Routes>
}