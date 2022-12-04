import { BrowserRouter as Router } from "react-router-dom";
import CreateRoutes from "./routes/index";
function App() {
  return (
    <Router>
      <div className="App">
        <CreateRoutes />
      </div>
    </Router>
  );
}

export default App;
