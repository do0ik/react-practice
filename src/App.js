import Detail from "./routes/Detail";
import Home from "./routes/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}`} >
          <Route index element={<Home />} />
          <Route path="/movie/:id" element={<Detail />} />
          <Route path="/hello" element={<h1>Hello</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
