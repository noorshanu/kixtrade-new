import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home2 from "./Pages/Home2";
import Home3 from "./Pages/Home3";

function App() {
  return (
    <>
     <Router>
     <Routes>

     <Route path="/" element={<Home />} />
     <Route path="/v2" element={<Home2 />} />
     <Route path="/v3" element={<Home3 />} />
        </Routes>
     </Router>
    </>
  );
}

export default App;
