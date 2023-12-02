import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import _index from "./app/_index";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<_index />} />
    </Routes>
  </Router>
);

export default App;
