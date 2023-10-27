import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home2 from "./Pages/Home2";

function App() {
  return (
    <>
     <Router>
     <Routes>

     <Route path="/" element={<Home />} />
     <Route path="/v1" element={<Home2 />} />
        </Routes>
     </Router>
    </>
  );
}

export default App;
