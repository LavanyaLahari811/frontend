import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./routes/login_auth/auth.component";
import Info from "./routes/info/info.component";
import Register from "./routes/register/register.component";


function App() {
 
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/info" element={<Info/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
