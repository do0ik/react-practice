import Detail from "./routes/Detail";
import Home from "./routes/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/hello" element={<h1>Hello</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
