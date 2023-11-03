import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ProductPage from './pages/ProductPage';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <div className='App'>
            <Router>
                <Routes>
                    <Route
                        exact
                        path='/'
                        element={
                            <LoginPage
                                isAuthenticated={isAuthenticated}
                                setIsAuthenticated={setIsAuthenticated}
                            />
                        }
                    />
                    <Route
                        path='/products'
                        element={
                            <ProductPage
                                setIsAuthenticated={setIsAuthenticated}
                            />
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
