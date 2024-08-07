import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import Registration from "./pages/Registration/Registration";
import Login from "./pages/Login/Login";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Profile from "./pages/Profile/Profile";


const App: React.FC = () => {
    

    const client = new QueryClient();

    return (
        <QueryClientProvider client={client}>
            <main className="container">
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route path="/" element={<Home />}/>
                            <Route path="/registration" element={<Registration />}/>
                            <Route path="/login" element={<Login />}/> 
                        </Route>
                        <Route path="/account" element={<Profile />}/>
                    </Routes>
            </main>
        </QueryClientProvider>
        
    )
}


export default App;