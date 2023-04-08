import { Route, BrowserRouter as Router,Routes } from "react-router-dom";
import './App.css';
import LoginPage from './LoginPage';
import LoginPageLdap from './LoginPageLdap';
import SuccessPage from './Success';

function App() {
  return (

    <div className="App">
      <h1>Test LDAP</h1>
      {/* <LoginPage /> */}
      {/* <LoginPageLdap /> */}
        <Router>
       <Routes>
          <Route path="/" exact  element={<LoginPageLdap/>}></Route>
          <Route path="/SuccessPage" exact element={<SuccessPage />} />

          </Routes>
      </Router>
    </div>
  );
}

export default App;
