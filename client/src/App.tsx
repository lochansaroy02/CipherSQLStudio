import { BrowserRouter, Route, Routes } from "react-router-dom";
import Question from "./components/Question";
import Layout from "./Layout";
import Home from "./pages/Home";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Layout wraps all these routes */}
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/question/:id" element={<Question />} />

                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;