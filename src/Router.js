import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Error from './pages/Error';

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/guides/:guide/:page" element={<Detail />} />
            <Route path="/error" element={<Error />} />
        </Routes>
    </BrowserRouter>
);

export default Router;
