import './App.css';
import React, { useState, createContext, useMemo } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Login from './components/Login';
export const UserContext = createContext(null);

function App() {
  const [token, setToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [user, setUser] = useState(null);
  const userContextValue = useMemo(() => ({ user, setUser }), [user]);

  const handleLoginResult = (result) => {
    debugger;
    if (result.token) {
      setToken(result.token);
      setIsAuthenticated(true);
      setUser(result.user);
      debugger
      return;
    }
    alert('Login result:' + result.token);
  };

  debugger;
  if (!isAuthenticated) {
    return <Login onLoginResult={handleLoginResult} />;
  }

  return (

    <UserContext.Provider value={userContextValue}>
      <BrowserRouter>
        <div className="App">
          <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/Home">Home</Nav.Link>
                <Nav.Link as={Link} to="/About">About</Nav.Link>
              </Nav>
            </Container>
          </Navbar>

          <Container className="mt-4">
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/About" element={<About />} />
            </Routes>
          </Container>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}


export default App;
