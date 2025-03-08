import Detail from "./pages/Detail";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}`} > {/* gh-pages 배포*/}
          <Route index element={<Home />} />
          <Route path="movie/:id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
