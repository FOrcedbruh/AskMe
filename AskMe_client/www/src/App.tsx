import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import Registration from "./pages/Registration/Registration";
import Login from "./pages/Login/Login";

const App: React.FC = () => {
    

    return (
        <main className="container">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />}/>
                    <Route path="/registration" element={<Registration />}/>
                    <Route path="/login" element={<Login />}/> 
                </Route>
            </Routes>
        </main>
    )
}


export default App;