import "./App.css";
import BubbleSort from "./components/BubbleSort";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bubble-sort" element={<BubbleSort />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
