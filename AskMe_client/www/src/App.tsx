import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";


const App: React.FC = () => {
    

    return (
        <main className="container">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />}/>
                </Route>
            </Routes>
        </main>
    )
}


export default App;