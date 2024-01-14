import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Marketplace from "./pages/Marketplace";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App({ Component, pageProps }) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Marketplace />}>
                    {/* <Route index element={<Marketplace />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
